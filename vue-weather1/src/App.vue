<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp>22?'warm':''">
    <main>
      <div class="searchbox">
        <input type="text" class="search-bar" placeholder="Search..." v-model="query" @keyup.enter="fetchWeather"/>
      </div>

      <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">
        <div class="location-box">
          <div class="location">
            {{weather.name}}, {{weather.sys.country}}
          </div>
          <div class="date">
            {{dateBuilder()}}
          </div>
        </div>

        <div class="weather-box">
          <div class="temperature">{{Math.round(weather.main.temp)}}°c</div>
          <div class="weather-status">{{weather.weather[0].main}}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  //Data vai retornar um objeto com a chave api do OpenWeatherApi.
  data(){
    return{
      api_key:'9168a806b0880bb9c9f679059f1f7746',
      url_base:'https://api.openweathermap.org/data/2.5/',
      query:'',
      weather:{}
    }
  },
  methods:{
    fetchWeather(e){
      if(e.key=="Enter"){
        //fetch é uma api javascript para fazer requests na API. As requests estão explanadas nos docs da api.
        //é como uma string de conexão.
        fetch(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.api_key}&lang={pt_br}`)
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
      let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
      let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

      let day=days[d.getDay()];
      let date=d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();

      return `${day} ${date} ${month} ${year}`;
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
  background: url('./assets/winter.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
#app.warm{
  background-image: url('./assets/summer.jpg');
}

main{
  min-height: 100vh;
  padding: 25px;
  background: linear-gradient(to bottom,rgba(0,0,0,0.25), rgba(0,0,0,0.75));
}
.searchbox{
  width: 100%;
  margin-bottom: 30px;

}
.searchbox .search-bar{
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
.searchbox .search-bar:focus{
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
.location-box .date{
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  text-shadow: 1px 3px rgba(0,0,0,0.25);
}
.weather-box{
  text-align: center;

}
.weather-box .temperature{
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

.weather-box .weather-status{
  color: #fff;
  font-size: 48px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0,0,0,0.25);

}
</style>
