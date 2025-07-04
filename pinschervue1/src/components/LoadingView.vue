<script setup>

</script>

<template>
<div id="loading-container">
  <div class="centered">
    <div class="loading">
      <div>

      </div>
    </div>
  </div>
</div>
</template>

<style>
#loading-container{
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(210, 105, 30, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;

}
#loading-container .centered{
  padding: 10%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
#loading-container .centered .loading{
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  left: -20px;

}
#loading-container .centered .loading div{
  width: 90px;
  height: 90px;
  border-radius: 100%;
  border-right: solid 10px greenyellow;
  border-bottom: solid 10px rgb(255, 98, 0);
  border-left: solid 10px greenyellow;
  border-top: solid 10px rgb(255, 98, 0);
  animation: sp 1s infinite ease-out;
}

@keyframes sp {
  from{
    transform: rotate(0);
  }to{
  transform: rotate(360deg);
     }
}
</style>