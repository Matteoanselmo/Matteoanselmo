<template>
    <div class="container-fluid pt-3">
        <div class="row">
            <div class="col-12">
                <i class="text-white fa-brands fa-github"></i>
            </div>
        </div>
        <div class="row rounded-pill my-circle-effect"></div>
        <div class="container pt-5">
            <div class="row gy-3 h-100 justify-content-center align-items-center">
                <div class="col-6 col-lg-3" v-for="(card, index) in repoArray" :key="index">
                    <div class="card shadow border-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">{{ card.titolo }}</h5>
                        <p class="card-text">{{card.descrizione}}</p>
                        <div class="w-100 text-center">
                            <a href="#" class="btn">{{ card.link }}</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SezioneRepo',
    data() {
        return{
            repoArray: [
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
                {
                    titolo: 'titolo repo',
                    link: 'link repo',
                    descrizione: 'descrizione repo'
                },
            ]
        }
    }
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
    .container{

        height: calc(100vh - 120px);
        .card{
            background-color: #293D42;
            color: white;
            max-width: 100%;
            .card-body{
                .btn{
                    background-color: #385158;
                }
            }
        }
    }
</style>