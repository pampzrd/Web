<script>

import { defineComponent } from 'vue';
import CardsGallery from '@/components/cardsGallery.vue';

export default defineComponent({
  components: { CardsGallery },
});

</script>

<template>
<div class="gallery">
  <h1>Novidades da Loja!</h1>
  <div class="imports">
    <cards-gallery imgsrc= '@/assets/images/1.jpg' imgalt="Ace"/>
    <cards-gallery imgsrc= "@/assets/images/2.jpg" imgalt="Zoro"/>
    <cards-gallery imgsrc= "@/assets/images/3.jpg" imgalt="Robin"/>
    <cards-gallery imgsrc= "@/assets/images/4.jpg" imgalt="Boa"/>
  </div>

</div>
</template>

<style scoped>
.gallery{
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px auto;
}
.imports{
  display: flex;
  flex-direction: row;

}
</style>
