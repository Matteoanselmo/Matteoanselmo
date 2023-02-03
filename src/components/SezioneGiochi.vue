<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 mb-4">
                <i class="text-white fa-solid fa-gamepad"></i>
            </div>
            <div class="row rounded-pill my-circle-effect"></div>
            <div class="offset-md-2 col-12 col-md-4 ">
                <router-link class="btn game-btn" :to="{name: 'snake'}">
                    <span class="text-uppercase">Snake</span>
                </router-link>
            </div>
            <div class="col-12 col-md-6 my-2">
                <router-link class="btn game-btn" :to="{name: 'trivia'}">
                    <span class="text-uppercase">
                        <i class="fa-regular fa-hand-back-fist"></i>
                        <i class="fa-regular fa-hand px-2"></i>
                        <i class="fa-regular fa-hand-scissors"></i>
                    </span>
                </router-link>
            </div>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SezioneGiochi',
    
}
</script>

<style lang="scss" scoped>
    .fa-gamepad{
        font-size: 6.5rem;
    }
    @media screen and (max-width: 768px) {
        .fa-gamepad{
            font-size: 4.5rem;
        }
        .game-btn{
        background-color: #385158 !important;
        color: white;
    }
    }
    .game-btn{
        background-color: #293D42;
        color: white;
    }
    .game-btn:hover{
        color: white;
    }
</style>