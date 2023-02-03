<template>
    <div class="container pt-5">
        <div class="row">
            <div class="col-12 col-md-4 ">
                <router-link class="btn game-btn" :to="{name: 'snake'}">
                    <span class="text-uppercase">Snake</span>
                </router-link>
            </div>
            <div class="col-12 col-md-4 my-2">
                <router-link class="btn game-btn" :to="{name: 'trivia'}">
                    <span class="text-uppercase">trivia</span>
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
    .game-btn{
        background-color: #293D42;
        color: white;
    }
</style>