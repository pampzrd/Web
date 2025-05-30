<script setup>
import TituloPrincipal from "@/components/titulo-principal.vue";
import ConteudoApp from "@/components/conteudo-app.vue";
</script>

<template>
<body>
<titulo-principal></titulo-principal>
<conteudo-app></conteudo-app>
</body>
</template>

<style scoped>
body{
  width: 100%;
  height: 100vh;
  background: url('../assets/01.jpg');
  background-size: cover;
  background-position: center;
}
</style>