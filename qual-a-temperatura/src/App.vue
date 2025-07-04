<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp>22?'quente':'frio'">
  <main>

    <div class="busca">
      <input type="text" class="busca-bar" placeholder="Busque um local..." v-model="query" @keyup.enter="getClima"/>
    </div>

    <div class="clima-wrap" v-if="typeof weather.main != 'undefined'">

      <div class="location-box">

        <div class="location">
          {{weather.name}}, {{weather.sys.country}}
        </div>

        <div class="data">
          {{dateBuilder()}}
        </div>

      </div>

      <div class="clima-box">
        <div class="temperatura">{{Math.round(weather.main.temp)}}°c</div>
        <div class="clima-status">{{weather.weather[0].main}}</div>
      </div>
      <div class="frase">
        <p v-if="weather.main.temp<=17?'frio':''">Dia de tomar caldo quente!</p>
        <p v-if="weather.main.temp>=22?'quente':''">Dia de tomar sorvete!</p>
      </div>

    </div>
  </main>
</div>
</template>

<script>

export default {
  name: 'App',

  data(){
    return{
      api_key:'9168a806b0880bb9c9f679059f1f7746',
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{},

    }
  },
  methods:{
    getClima(e){
      if(e.key=="Enter"){

        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang={pt}`)
            .then(res=>{
              return res.json();
            }).then(this.setResults)

      }
    },

    setResults(results){
      this.weather=results;
    },

    dateBuilder(){
      let d=new Date();
      let meses=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
      let dias=["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];

      let dia=dias[d.getDay()];
      let data=d.getDate();
      let mes = meses[d.getMonth()];
      let ano = d.getFullYear();

      return `${dia} ${data} ${mes} ${ano}`;
    }
  },

}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: Montserrat,sans-serif;
}
#app{
  background: url('./assets/pexels-brigitte-tohm-36757-287222.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#app.frio{
  color: lightskyblue;
  font-size: 28px;
  text-align: center;
}
#app.quente{
  background-image: url('./assets/pexels-minan1398-801616.jpg');
  color: darkorange;
  font-size: 28px;
  text-align: center;
}

main{
  min-height: 100vh;
  padding: 25px;
  background: linear-gradient(to bottom,rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}
.busca{
  width: 100%;
  margin-bottom: 30px;

}
.busca .busca-bar{
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0 0 8px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.7);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
}
.busca .busca-bar:focus{
  background-color: rgba(255,255,255,0.9);
  box-shadow: 0 0 16px rgba(0,0,0,0.25);
  border-radius: 16px 0 16px 0;
}
.location-box .location{
  color: #fff;
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  text-shadow: 1px 3px rgba(0,0,0,0.25);

}
.location-box .data{
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}
.clima-box{
  text-align: center;

}
.clima-box .temperatura{
  display: inline-block;
  padding: 10px 25px;
  color: #fff;
  font-size: 102px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0,0,0,0.25);
  background-color: rgba(255,255,255,0.25);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0,0,0,0.25);
}

.clima-box .clima-status{
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.25);

}
</style>
