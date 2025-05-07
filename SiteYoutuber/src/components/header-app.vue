<script setup>

</script>

<template>
  <div class="header">
    <nav>
    <h1>Marina Molly</h1>

      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Products</a></li>
        <li><a href="">Youtube</a></li>
        <li><a href="">Interviews</a></li>
        <li><a href="">Lives</a></li>
        <li><a href="">Community</a></li>
        <li><a href="">Subscribe</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
    <button id="joinUs">Join Us</button>
  </div>




</template>

<style scoped>
*{
  color: #F7F9E3;
}
/*
- foto hero
- nav
- call to action p cursos
- logo-nome do ladooporto do nav
*/

.header{
  display: flex;
  height: 474px;
  width: 100%;
  padding: 4%;
  background: url("../assets/images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg");
  background-size: 1600px;
  background-position: 25% 67%;
  object-fit: cover;


}
button{
  border: #F7F9E3 2px solid;
  background-color: transparent;
  height: 35%;
}
ul{
  list-style: none;
  display: flex;
  gap: 1rem;

}

a{
  text-decoration: none;
  font-size: 15pt;
}
a:hover{
  text-decoration: underline;
  transition: 1s ease-in-out;
}
nav{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>