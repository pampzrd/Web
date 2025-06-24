<script setup>
import {ref} from 'Vue';
const {contagem}= require('./input-cronometer.vue');


let numero=ref(contagem);

</script>

<template>
  <div class="container">
    <div class="contador"><h1 id="contador">{{numero}}</h1></div>
    <div class="img">
      <img src="../assets/garden0.png" alt="Jardim">
    </div>
  </div>
</template>

<style scoped>
*{
  display: flex;
  justify-content: center;
  gap: 3rem;
}
.container{
  display: flex;
  align-items: center;
}
.contador{
  padding: 10%;
  font-size: 30pt;
}
.img{
  width: 200px;
  height: 200px;
}
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>