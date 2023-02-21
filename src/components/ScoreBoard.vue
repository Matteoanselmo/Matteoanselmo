<template>
    <div class="scoreboard">
      <div class="scoreboard__board">
        <span class="text">{{ turnCount }}</span>
        <div>
          <span v-for="(turn, index) in score" :key="index" :class="`turn turn--${turn}`" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ScoreBoard',
    props: {
      score: {
        type: Array,
        default: () => null,
      },
    },
  
    computed: {
      matchCount() {
        return this.score.filter(turn => turn === 'match').length;
      },
      turnCount() {
        return this.score.length;
      },
    },
  
  
  };
  
  </script>
  
  <style lang="scss" scoped>
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  .text {
    color: #fff;
    display: inline-block;
    font: bold 12px / 1.4 arial;
    margin-right: 20px;
    font-size: xx-large;
  }
  
  .scoreboard {
    color: #fff;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top:18%;
    right:8%;
  
    @media (min-width: 700px) {
      padding: 15px 50px;
    }
  }
  
  .turn {
    font-size: xx-large;
    border-radius: 5px;
    display: inline-block;
    margin-right: 3px;
  }
  
  .turn--miss {
    border: 2px solid #dddddd;
    background-color: white;
  }
  
  .turn--match {
    background: rgb(30,255,255);
  }
  </style>