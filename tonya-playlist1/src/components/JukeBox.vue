<script setup lang="js">
//Usar um disco girando com as músicas
//Ao clicar na música ela passa a tocar
/*PLAYLIST:
* Billy Ocean - Caribbean Queen
* The Jets - Crush On You
* LisaLisa & Cult Jam - Head To Toe
* DeBarge - Rhythm Of The Night
* Shalamar - "A Night To Remember"
*
* */
</script>

<template>


  <div id="playlist">
    <a href="">Billy Ocean - Caribbean Queen</a>
    <a href="">The Jets - Crush On You</a>
    <a href="">Lisa Lisa & Cult Jam - Head To Toe</a>
    <a href="">DeBarge - Rhythm Of The Night</a>
    <a href="">Shalamar - A Night To Remember</a>
  </div>
<div class="container">
  <div class="disco">
    <h1>Olá</h1>
    <img src="../../public/Imgs/discoint.png" alt="">
  </div>
</div>
</template>

<style scoped>
.container{
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.disco{

  width: 1200px;
  overflow: hidden;
}

.disco img{
  object-fit: cover;
  object-position: 60%;
  width: 60%;
}
.disco img:hover{
  transform: rotate(360deg);
  transition: 4s linear;
}
</style>