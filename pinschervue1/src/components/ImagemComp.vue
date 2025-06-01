<script setup>
const URL="https://dog.ceo/api/breed/pinscher/images/random";
async function retornarInfo(){
  const results = await fetch(URL);
  if(results.status===200){
    const obj = await results.json();

    const imagem = document.getElementById("imagem");
    imagem.src=obj.message
    return imagem.src
  }
}
</script>

<template>

  <main>
    <div class="container">
      <h1>Gerador de Pinschers</h1>
      <div class="imgcontainer">
        <img id="imagem" src="https://images.pexels.com/photos/9642762/pexels-photo-9642762.jpeg" alt="">
      </div>
      <p id="texto">Gerador de Costelas</p>
      <button v-on:click="retornarInfo()">Gerar</button>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=WDXL+Lubrifont+TC&display=swap');
*{
  font-family: "WDXL Lubrifont TC", sans-serif;
}
h1{
  font-size: 35pt;
  color: #ffffff;
  text-align: center;
  margin: 1pt;
  padding: 0;
}
#texto{
  font-size: 15pt;
  margin: 15pt;
  padding: 0;
  color: #ffe45a;
}

main .container{
  display: flex;
  width: auto;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#imagem{
  width: 100%;
  height: auto;
  object-fit: cover;
  filter: contrast(1.3);
}
.imgcontainer{
  width: 300px;
  height: 300px;
  background-color: #af5b2e;
  overflow: hidden;
  border: solid #a2ff00 4px;
  border-radius: 40pt;
  box-shadow: rgba(91, 28, 28, 0.61) 2px 2px 2px 4px;
}

button{
  padding: 4pt 0;
  font-weight: lighter;
  font-size: 15pt;
  color: #a1311c;
  border: #ff6a00 solid 2px;

  width: 100pt;
  background-color:#a2ff00;
  margin-bottom: 0;
}
button:hover{
  cursor: pointer;
  background: #a1311c;
  color: #ffe45a;
  border: #fffffd solid 2px;
  transition: .1s ease-in;
}


@media (min-width: 576px) {
  .container{
    width: 350px;
  }

  .imgcontainer{
    width: 350px;
    height: 350px;
  }
  button{
    width: 150pt;
    font-size: 20pt;
  }
}

@media (min-width: 768px) {
  .container{
    width: 450px;

  }

  .imgcontainer{
    width: 450px;
    height: 450px;
  }
  h1 {
    font-size: 40pt;
  }
  button{
    width: 200pt;
    font-size: 25pt;
  }
}


@media (min-width: 992px) {
  .container{
    width: 550px;

  }
  #texto {
    font-size: 20pt;
  }
  .imgcontainer{
    width: 450px;
    height: 450px;
  }
  h1 {
    font-size: 50pt;
  }
  button{
    width: 250pt;
    font-size: 25pt;
  }
}


@media (min-width: 1200px) {
  .container{
    width: 700px;

  }
  #texto {
    font-size: 20pt;
  }
  .imgcontainer{
    width: 500px;
    height: 500px;
  }
  h1 {
    font-size: 55pt;
  }
  button{
    width: 350pt;
    font-size: 30pt;
  }
}

</style>