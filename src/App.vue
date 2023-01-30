<template>
  <div id="app">
    <HeaderNav @setStep = "(newStep) => step = newStep"/>
    <transition name="slide-fade">
      <section v-if="step === 0">
        <ChiSono/>
      </section>
    </transition>

    <transition name="slide-fade">
      <section v-if="step === 1">
        <SezioneRepo/>
      </section>
    </transition>

    <transition name="slide-fade">
      <section v-if="step === 2">
        <SezioneGiochi/>
      </section>
    </transition>
  </div>
</template>
<script>
import HeaderNav from './components/HeaderNav.vue';
import ChiSono from './components/ChiSono.vue';
import SezioneRepo from './components/SezioneRepo.vue';
import SezioneGiochi from './components/SezioneGiochi.vue';
export default{
  name: 'App',
  components: {
    HeaderNav,
    ChiSono,
    SezioneRepo,
    SezioneGiochi
  },
  data(){
    return{
      step: 0,
    }
  }
}
</script>
<style lang="scss">
@import './style/main.scss';
    .slide-fade-enter-active {
            transition: all .3s ease;
        }
        .slide-fade-leave-active {
            display: none;
            transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to {
            transform: translateX(10px);
            opacity: 0;
        }
        .my-circle-effect{
        background-color: rgba(37, 55, 59, 0.7607843137);
        transform: rotate(15deg);
        height: 25rem;
        width: 25rem;
        position: absolute;
        top: -20%;
        left: -10%;
        z-index: -1;
    }
</style>
