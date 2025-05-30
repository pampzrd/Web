<script>
export default {
  data() {
    return {
      conteudo : ["O Senhor é meu pastor e nada me faltará.","Deitar-me faz em verdes pastos."]
    }
  },
  computed: {
    formattedArray() {
      return this.conteudo.join('<br>');
    }
  }
}

</script>

<template>
  <div v-html="formattedArray"></div>
</template>

<style scoped>
div{
  font-family: "Faculty Glyphic", sans-serif;
  color: #fff;
  text-align: center;
}
</style>