<template>
  <body>
  <div class="container">
    <main>
        <ImagemComp/>
    </main>
</div>
  </body>
</template>

<script>

import ImagemComp from "@/components/ImagemComp.vue";

export default {
  name: 'App',
  components: {
    ImagemComp,
  }
}
</script>

<style>

.container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

}
div{
  display: flex;
  justify-content: center;


}

</style>
