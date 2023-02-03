<template>
    <div class="container-fluid mt-5">
        <div class="buttons-container row">
            
            <div class="col-md-4 col-12">
                <div class="text-center">
                    <h1 class="text-uppercase">Tu</h1>
                </div>
                <div class="d-flex justify-content-evenly">
                    <button :class="{ disabled: !isGameStarted || isGameEnded }" @click="didPicked(1)">
                        <i class="fa-regular fa-hand"></i>
                    </button>
                    <button :class="{ disabled: !isGameStarted || isGameEnded }" @click="didPicked(2)">
                        <i class="fa-regular fa-hand-scissors"></i>
                    </button>
                    <button :class="{ disabled: !isGameStarted || isGameEnded }" @click="didPicked(3)">
                        <i class="fa-regular fa-hand-back-fist"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-4 col-12 score">
                {{ userWins }} : {{ computerWins }}
                <div class="text-success text-uppercase">{{ result }}</div>
            </div>
            <div class="col-md-4 col-12 text-center">
                <h1 class="text-uppercase">computer</h1>
                <button v-html="computerHtml"></button>
            </div>
        </div>
        <div class="game-controls">
            <template v-if="!isGameStarted">
                <button class="text-uppercase" @click="isGameStarted = true">start</button>
            </template>
            <template v-else>
                <button class="text-uppercase" v-show="isGameStarted && isGameEnded" @click="restart">ricomincia</button>
                <h2>Punteggio</h2>
                <ul>
                    <li v-for="(record, i) in records" :class="record.type" :key="i">{{ record.message }}</li>
                </ul>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TriviaVue',
    data() {
        return{
            isGameStarted: false,
            isGameEnded: false,
            computerHtml: '<i class="far fa-hand-paper"></i>',
            userPicked: 0,
            computerPicked: 0,
            whoWin: '',
            userWins: 0,
            computerWins: 0,
            result: '',
            rounds: 0,
            records: [],
            resultCssClass: '',
        }
    },
    methods: {
        restart: function () {
            this.isGameStarted = false;
            this.isGameEnded = false;
            this.computerHtml = '<i class="far fa-hand-paper"></i>';
            this.userPicked = 0;
            this.computerPicked = 0;
            this.whoWin = '';
            this.userWins = 0;
            this.computerWins = 0;
            this.result = '';
            this.rounds = 0;
            this.records = [];
            this.resultCssClass = '';
            },
        didPicked: function (picked) {
            this.userPicked = picked;
            let random_from_1_to_3 = Math.floor(Math.random() * 3) + 1;
            this.computerPicked = random_from_1_to_3;
            let symbolHtml = {
                '1': 'paper',
                '2': 'scissors',
                '3': 'rock'
            };
            this.computerHtml = `<i class="fa-regular fa-hand-${symbolHtml[random_from_1_to_3]}"></i>`;
            if( this.userPicked == this.computerPicked ) {
                this.whoWin = 'draw';
            }else{
            switch( this.userPicked ) {
                case 1:
                    if( this.computerPicked == 2 ) {
                    this.whoWin = 'computer';
                    }else{
                    this.whoWin = 'user';
                    }
                    break;
                case 2:
                    if( this.computerPicked == 3 ) {
                    this.whoWin = 'computer';
                    }else{
                    this.whoWin = 'user';
                    }
                    break;
                case 3:
                    if( this.computerPicked == 1 ) {
                    this.whoWin = 'computer';
                    }else{
                    this.whoWin = 'user';
                    }
                    break;
                default:
                } 
            }
        this.rounds++;
        }
    },
    watch: {
        rounds: function () {
        
        if( this.whoWin == 'user' ) {
            
            this.records.unshift({
            message: 'Hai vinto vinto questo match!',
            type: 'win'
            });
            
            this.userWins++;
        }else if( this.whoWin == 'computer' ) {
            
            this.records.unshift({
            message: 'Il computer ha vinto questo match!',
            type: 'lose'
            });
            
            this.computerWins++;
        }else if( this.whoWin == 'draw' ) {
            this.records.unshift({
            message: 'Pareggio!',
            type: 'draw'
            });
        }
        
        if( this.userWins >= 2 ) {
            
            this.result = 'Hai vinto!';
            this.isGameEnded = true;
        }else if( this.computerWins >= 2 ) {
            
            this.result = 'Il computer vince!';
            this.isGameEnded = true;
        }
        
        }
    }
    }
</script>

<style scoped>
    button {
        color: #293d42;
    font-size: 80px;
    border: 1px solid #ccc;
    background-color: #eee;
    width: 100px;
    height: 100px;
    line-height: 100px;
    border-radius: 20px;
    }

    .buttons-container {
    display: flex;
    border-bottom: 5px solid #999999;
    padding-bottom: 40px;
    margin-bottom: 40px;
    }

    .left {
    width: 35%;
    text-align: center;
    }

    .score {
    text-align: center;
    font-size: 60px;
    color: #293d42;
    margin-top: 12px;
    }

    .right {
    width: 35%;
    text-align: center;
    }

    .game-controls {
    text-align: center;
    }

    .game-controls button {
    width: auto;
    height: auto;
    font-size: 40px;
    line-height: 40px;
    padding: 30px 30px;
    }

    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    ul li {
    padding: 20px;
    margin: 1px;
    background-color: #ccc;
    font-size: 20px;
    }

    .win {
    background-color: #70e87b;
    }
    .lose {
    background-color: #ed6464;
    }
    .draw {
    background-color: #ffed53;
    }
    .system {
    background-color: #ccc;
    }

    .disabled {
    pointer-events: none;
    color: #ccc;
    }
</style>