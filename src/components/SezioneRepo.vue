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
                <div class="col-12">
                    <h2 class="text-white">
                        Piccola premessa, molti progetti non posso inserirli nel mio portfolio per questioni di privacy 🥹
                    </h2>
                </div>
                <div class="col-12 col-lg-3 mb-4" v-for="(card, index) in repoArray" :key="index" :class="card.titolo == 'matteo.anselmo96@gmail.com' ? 'col-lg-12' : '' ">
                    <div class="card shadow border-0">
                    <div class="card-body">
                        <h5 class="card-title text-uppercase">{{ card.titolo }}</h5>
                        <p class="card-text">{{card.descrizione}}</p>
                        <div class="w-100 d-flex align-items-center justify-content-center mb-2">
                            <a :href="card.linkToGitHub" class="btn" target="blank"><i class="text-white fa-brands fa-github fs-5 me-2"></i> {{ card.titolo }}</a>
                        </div>
                        <div class="w-100 d-flex align-items-center justify-content-center" v-if="card.link">
                            <a :href="card.linkToGitHub" class="btn" target="blank"><i class="text-white fa-solid fa-globe fs-5 me-2"></i> {{ card.titolo }}</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <h2 class="text-white text-center mb-4">
                        SE hai domande contattami!
                    </h2>
                    <form name="contact" method="POST" data-netlify="true" class="text-white d-flex flex-column align-items-center">
                        <input type="hidden" name="subject" 
                        value="Sales inquiry from mysitename.netlify.app" />
                        <label class="mb-3">Name <input type="text" name="name" class="form-control" /></label>
                        <label class="mb-3">Email <input type="email" name="email" class="form-control" /></label>
                        <label class="mb-3">Message <textarea name="message" class="form-control"></textarea></label>
                        <button class="btn text-white shadow px-3 py-2" type="submit">Send</button>
                    </form>
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
                    linkToGitHub: 'https://github.com/Matteoanselmo/vue-boolflix',
                    descrizione: 'Riproduzione del noto video-streaming NETFLIX'
                },
                {
                    titolo: 'deliveboo',
                    linkToGitHub: 'https://github.com/giagra91/DeliveBoo',
                    descrizione: 'Realazzato insieme al mio gruppo Boolean, una copia di DELIVEROO'
                },
                {
                    titolo: 'boolpress',
                    linkToGitHub: 'https://github.com/Matteoanselmo/laravel-boolpress',
                    descrizione: 'Riproduzione di WordPress'
                },
                {
                    titolo: 'vue-dc-comics',
                    linkToGitHub: 'https://github.com/Matteoanselmo/vue-dc-comics',
                    descrizione: 'Riproduzione prima pagina del sito di DC comics'
                },
                {
                    titolo: 'NinnaNannaOh',
                    linkToGitHub: 'https://www.ninnanannaoh.com/',
                    descrizione: 'E-commerce con diversi tipi di prodotti (dal più semplice scegli e compra a prodotti con svariate personalizzazioni)',
                    link: 'https://www.ninnanannaoh.com/'
                },
                {
                    titolo: 'ATMSST (UNIMI)',
                    linkToGitHub: 'https://github.com/Matteoanselmo/unimi',
                    descrizione: 'La repo è privata ma basta chiedere per aver più info, il progetto è per la ricerca e sviluppo.',
                    link: 'https://www.atmsst.it/'
                },
                {
                    descrizione: 'i miei progetti più grandi sono privati per tanto ti lascio la mia email qua nel caso tu sia interessato/a (ci sono e-commerce, form per ricerca e sviluppo e molo altro)',
                    linkToGitHub: 'mailto:matteo.anselmo96@gmail.com',
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