<script setup>

import SocialmediaApp from "@/components/socialmedia-app.vue";
import HeaderApp from "@/components/header-app.vue";
import SubscribeApp from "@/components/subscribe-app.vue";
import ContentApp from "@/components/content-app.vue";
import VideoApp from "@/components/video-app.vue";
import InterviewsApp from "@/components/interviews-app.vue";
import InstagramApp from "@/components/instagram-app.vue";
import LiveApp from "@/components/live-app.vue";
</script>

<template>
  <div id="container">
    <section id="s1">
      <header>
        <header-app></header-app>
      </header>
    </section>

    <section id="s2">
      <content-app></content-app>
    </section>

    <section id="s3">
      <video-app></video-app>
    </section>

    <section id="s4">
      <interviews-app></interviews-app>
    </section>

    <section id="s5">
      <live-app></live-app>
    </section>

    <section id="s6">
      <instagram-app></instagram-app>
    </section>

    <section id="s7">
      <subscribe-app></subscribe-app>
    </section>

    <section id="s8">
      <footer>
        <socialmedia-app></socialmedia-app>
      </footer>
    </section>
  </div>

</template>

<style scoped>
#container{
  width: 100%;
  height: auto;
}
#s1{


}
#s2{
  background-color:#fff;
}
#s3{
  background-color: #9f3737;
}
#s4{
  background-color:#fff;
}
#s5{
  background-color:mediumpurple;
}
#s6{
  background-color:#fff;
}
#s7{
  background-color: #895298;
}
#s8{
  background-color: #0f5988;
}
</style>