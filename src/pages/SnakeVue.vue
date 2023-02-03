<template>
    <div class="vue-container">
        <div class="game-container shadow" :class="{ gameOver : gameStatus === 'gameOver' }">
            <div class="message" v-if="gameStatus === 'gameOver'">
                <h1 class="mb-4 text-uppercase">
                    gameover
                </h1>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-success" @click="launchGame()">
                        <i class="fa-solid fa-repeat"></i> Start new Game
                    </button>
                </div>
            </div>
            <div class="case" v-for="(n, index) in cases" :class='{ snake : snake.indexOf(n) !== -1, fruits : fruits.indexOf(n) !== -1 }' :key="index"></div>
        </div>
    </div>
</template>

<script>
export default{
	name: 'SnakeVue',
	data() {
        return{
            register_key : 'down',
            w : 20,
            h : 20,
            s : 10,
            snake_start_size : 2,
            snake : [],
            fruits : [10, 20, 40],
            interval : '',
            gameStatus : 'playing'
        }
	},
	computed : {
		cases () {
			const res = this.w * this.h;
			return res;
		}
	},
	methods : {
		changeGameSize (val) {
			document.documentElement.style.setProperty('--gameSize', val + 'px');
		},
		changeCaseSize (val) {
			document.documentElement.style.setProperty('--caseSize', val + 'px');		
		},
		setSizes (w, s) {
			this.w = w;
			this.h = w;
			this.s = s;
			this.changeGameSize(w*s)
			this.changeCaseSize(s)
		},
		initSnake () {
			this.snake = [];
			const start_head = (this.cases / 2)  - (this.w / 2);
			this.snake.push(start_head, start_head - 1);
		},
		move () {
			const dir = this.register_key;
			switch(dir) {
                case 'right':
                        if( (this.snake[0] + 1) % this.w === 1 ){
                            return (this.snake[0] + 1) - this.w
                        }else{
                            return this.snake[0] + 1
                        }
                case 'left':
                    if( (this.snake[0] - 1) % this.w === 0 ){
                            return (this.snake[0] - 1) + this.w
                        }else{
                            return this.snake[0] - 1
                        }
                case 'up':
                        if( this.snake[0] - this.w < 0 ){
                            return this.snake[0] - this.w + this.cases
                        }else{
                            return this.snake[0] - this.w
                        }
                case 'down':
                        if( this.snake[0] + this.h > this.cases ){
                            return this.snake[0] + this.h - this.cases
                        }else{
                            return this.snake[0] + this.h
                        }
                default:
                    return 0
			}
		},	
		moveSnake() {
			if( this.snake.indexOf(this.snake[0], 1) !== -1 ){
				this.gameStatus = 'gameOver'
				return false
			}
			this.snake.unshift(this.move());
			if( this.fruits.indexOf(this.snake[0]) === -1 ){
				this.snake.splice(-1, 1);
			}else{
				this.fruits.splice(this.fruits.indexOf(this.snake[0]), 1)
			}
		},
		randomApple () {
			if(this.fruits.length < 3){
				let new_apple = this.snake[0];
				while(this.snake.indexOf(new_apple) !== -1){
					new_apple = Math.round(Math.random() * this.cases)
				}
				this.fruits.push(new_apple)
			}
		},
		gameTurn () {
			if( this.gameStatus === 'gameOver' ){
				this.gameEnded()
			}else if( this.gameStatus === 'paused' ){
				this.gamePaused()
			}else{
				this.moveSnake()
				this.randomApple()
			}
		},
		launchGame () {
			this.gameStatus = 'playing'
			this.setSizes(8, 10)
			this.initSnake()
			const self = this
			this.interval = setInterval(function(){
				self.gameTurn()
			}, 300);
		},
		gameEnded () {
			console.log('dead')
			clearInterval(this.interval)
		}
	},
	mounted () {
		this.launchGame();
		const self = this;
		window.addEventListener("keyup", function(e){
			if(e.keyCode === 37){
				self.register_key = 'left'
			}else if(e.keyCode === 38){
				self.register_key = 'up'
			}else if(e.keyCode === 39){
				self.register_key = 'right'
			}else if(e.keyCode === 40){
				self.register_key = 'down'
			}
			if(e.keyCode === 32 && self.gameStatus === 'gameOver'){
				console.log('bob')
				self.launchGame()
			}
		});
	}
}
</script>

<style lang="scss" scoped>
.vue-container{
		font-family:sans-serif;
		.game-container{
			position:absolute;
			top:50%;
			left:50%;
			transform:translatex(-50%) translatey(-50%);
			max-width:320px;
			max-height:320px;
			line-height:var(--caseSize);
			.message{
				position:absolute;
				top:50%;
				left:50%;
				word-wrap:nowrap;
				transform:translatex(-50%) translatey(-50%);
				h1{
                    color: red;
                    font-size:45px;
                    font-weight:900;
                    animation: gameOver .8s ease-out;
                }
			}
            @keyframes gameOver {
                0%{
                    font-size: 45px;
                }
                25%{
                    font-size: 75px;
                }
                50%{
                    font-size: 90px;
                }
                70%{
                    font-size: 75px;
                }
                85%{
                    font-size: 50px;
                }
                95%{
                    font-size: 45px;
                }
            }
			.case{
				width:40px;
				height:40px;
				background-color:lightgrey;
				display:inline-block;
				padding:0;
				margin:0;
				box-sizing:border-box;
				border:1px solid white;
				&.snake{
					background-color: green;
				}
				&.fruits{
					background-color:yellowgreen;
				}
			}
			&.gameOver{
				.case{
					color: black;
				}
			}
		}
	}
    @media screen  and (max-width: 768px){
        .vue-container{
            .game-container{
                position:absolute;
                top:50%;
                left:50%;
                transform:translatex(-50%) translatey(-50%);
                max-width:160px;
                max-height:160px;
                line-height:var(--caseSize);
                .case{
                    height:  20px;
                    width: 20px;
                }
            }
        }
    }
</style>