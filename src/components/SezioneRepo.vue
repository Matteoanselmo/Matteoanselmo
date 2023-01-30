<template>
    <div class="container-fluid pt-3">
        <div class="row">
            <div class="col-12">
                <i class="fa-brands fa-github"></i>
            </div>
        </div>
        <div class="container">
            <div class="row rounded-pill my-circle-effect"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SezioneRepo'
}
</script>

<style lang="scss" scoped>
    .fa-github{
        font-size: 6.5rem;
    }
    @media screen and (max-width: 768px) {
        .fa-github{
            font-size: 4.5rem;
        }
    }
</style>