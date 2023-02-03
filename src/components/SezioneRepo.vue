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
                <div class="col-12 col-lg-3" v-for="(card, index) in repoArray" :key="index">
                    <div class="card shadow border-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">{{ card.titolo }}</h5>
                        <p class="card-text">{{card.descrizione}}</p>
                        <div class="w-100 text-center">
                            <a :href="card.link" class="btn" target="blank">{{ card.titolo }}</a>
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
                    titolo: 'vue-boolflix',
                    link: 'https://github.com/Matteoanselmo/vue-boolflix',
                    descrizione: 'Riproduzione del noto video-streaming NETFLIX'
                },
                {
                    titolo: 'deliveboo',
                    link: 'https://github.com/giagra91/DeliveBoo',
                    descrizione: 'Realazzato insieme al mio gruppo Boolean, una copia di DELIVEROO'
                },
                {
                    titolo: 'boolpress',
                    link: 'https://github.com/Matteoanselmo/laravel-boolpress',
                    descrizione: 'Riproduzione di WordPress'
                },
                {
                    titolo: 'vue-dc-comics',
                    link: 'https://github.com/Matteoanselmo/vue-dc-comics',
                    descrizione: 'Riproduzione prima pagina del sito di DC comics'
                },
                {
                    descrizione: 'i miei progetti più grandi sono privati per tanto ti lascio la mia email qua nel caso tu sia interessato/a (ci sono e-commerce, form per ricerca e sviluppo e molo altro)',
                    link: 'mailto:matteo.anselmo96@gmail.com',
                    titolo: 'matteo.anselmo96@gmail.com'
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
            min-height: 170px;
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