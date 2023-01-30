<template>
    <div class="container-fluid pt-3">
        <div class="row mb-4">
            <div class="col-10" >
                <div id="my-img-profile">
                    <img class="rounded-pill" src="../images/io.jpeg" alt="la mia immagine di profilo">
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row rounded-pill my-circle-effect"></div>
            <div class="row">
                <div class="col-10">
                    <p class="typewriter"> 
                        <span data-text="ciao a tutti mi chiamo matteo anselmo, e sono uno web developer, ma so fare cose carine, ti consiglio di andare nella sezione repo per dare un occhiata, la trovi nel menu"></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChiSono',
    mounted(){
        const span = document.querySelector(".typewriter span");
        const textArr = span.getAttribute("data-text").split(", "); 
        const maxTextIndex = textArr.length; 
        const sPerChar = 0.15; 
        const sBetweenWord = 0.5;
        const textIndex = 0; 
        typing(textIndex, textArr[textIndex]); 
        function typing(textIndex, text) {
            let charIndex = 0; 
            const maxCharIndex = text.length - 1; 
            const typeInterval = setInterval(function () {
                span.innerHTML += text[charIndex]; 
                if (charIndex == maxCharIndex) {
                    clearInterval(typeInterval);
                    setTimeout(function() { deleting(textIndex, text) }, sBetweenWord * 300); 
                    
                } else {
                    charIndex += 1; 
                }
            }, sPerChar * 550); 
        }
        function deleting(textIndex, text) {
            const minCharIndex = 0; 
            let charIndex = text.length - 1; 
            const typeInterval = setInterval(function () {
                span.innerHTML = text.substr(0, charIndex); 
                if (charIndex == minCharIndex) {
                    clearInterval(typeInterval);
                    textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1; 
                    setTimeout(function() { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 300); 
                } else {
                    charIndex -= 1; 
                }
            }, sPerChar * 300); 
        }
    }
}
</script>

<style lang="scss" scoped>
    #my-img-profile{
        height: 7rem;
        width: 7rem;
        img{
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }
    @media screen and (max-width: 768px) {
        #my-img-profile{
            height: 4.5rem;
            width: 4.5rem;
        }
    }
    .typewriter {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 56px;
        color: #fff;
        font-weight: bold;
        position: relative;
        margin: 0;
        top: 50%;
        transform: translateY(-50%);
        span {
            color: var(--text-color);
            text-transform: uppercase;
            border-right: solid var(--text-color) 10px; 
            animation: cursor .35s ease-in-out infinite;
        }
    }
    @keyframes cursor {
        from { border-color: var(--text-color); }
        to { border-color: transparent; }
    }
    @media (max-width: 576px) {
        .typewriter { font-size: 24px; }
    }
    @media (max-width: 768px) {
        .typewriter { font-size: 36px; }
    }


    
</style>