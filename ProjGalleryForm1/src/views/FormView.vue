<style>
img{
  width: 10%;
}
label{
  margin: 10pt;
}
span{
  padding: 20pt;
  font-size: 20pt;
  color: #0f5988;
}
</style>
<template>
  <h1>Form</h1>
  <img src="@/assets/Transparent.png" alt="">
  <div class="forms">
    <h1>This is a Contact page!</h1>

    <form id="form" action="/" method="get">

      <label for="matthew">Matthew
      <input type="checkbox" id="matthew" name="matthew" value="Matthew" v-model="checkedNames">
      </label>
      <label for="mark">Mark
      <input type="checkbox" id="mark" name="mark" value="Mark" v-model="checkedNames">
      </label>
      <label for="luke">Luke
        <input type="checkbox" id="luke" name="luke" value="Luke" v-model="checkedNames">
      </label>
<label for="john">John
      <input type="checkbox" id="john" name="john" value="John" v-model="checkedNames">
</label>

      <button type="submit">Submit</button>
    </form>
    <br>
    <span>Checkednames: {{ checkedNames }}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedNames: [],
    };
  },
};

</script>
<!--

<script>

Vue({
  el: function () {
    return {
      pessoa: {
        nome: 'Oi meu chapa!',
        idade: 39,
      },
    };
  },
  data: {
    checkedNames: [],
  },
});
</script>

<template>
  <div class="forms">
    <h1>This is a Contact page!</h1>
    <form>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>

      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>

      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
    </form>
    <br>
    <span>Checkednames: {{ checkedNames }}</span>
  </div>
</template>

<style scoped>
h1{
  color: #e8823a;
}
</style>
-->
