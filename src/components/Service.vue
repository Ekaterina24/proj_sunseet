<template>
<div class="service">
  <router-link to="/services" class="back">Назад</router-link>
  <h1>{{ info[id-1].name }}</h1>
  <h2>Мы приглашаем вас на рыбалку к Волго-Каспийскому каналу!</h2>
  <div class="block">
    <img class="services-item__image" v-bind:src=" require('../assets/images/' + info[id-1].image) " alt="img">
    <div class="text">{{ info[id-1].description }}</div>
  </div>

  <div class="rent">
    <h2 class="book-text">Успей забронировать!</h2>
    <table border="1" width="500px">
      <tr>
        <td>Услуга</td>
        <td>Кол-во</td>
        <td>Стоимость</td>
      </tr>
      <tr>
        <td>
          <select v-model="selectedService">
            <option v-for="user in services" v-bind:value="user" :key="user.name">{{user.name}}</option>
          </select>
        </td>
        <td>

        </td>
        <td>
          <div v-for="user in selectedService" :key="user.name">
            {{user}}
          </div>
        </td>
      </tr>

    </table>
    <div style="color: red; text-align: center">Предоплата 25% от стоимости</div>
    <button class="btn__book">Рассчитать и забронировать</button>
  </div>

</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Service",
  components: {},
  data() {
    return {
      id: this.$route.params['id'],
      info: [],
      see: true,
      selectedService: [],
      services:[
        {name:'Рыбалка на берегу', price: 1000},
        {name:'Рыбалка на спининге', price: 1200}
      ],
    }
  },
  mounted() {
    axios
        .get('./db.json')
        .then(response => (this.info = response.data));
  }
}
</script>

<style lang="scss" scoped>
.service {
  padding: 20px;
}
.back {
  display: inline-block;
  color: white;
  background-color: #910e27;
  padding: 10px;
  width: 100px;
  box-sizing: border-box;
  text-align: center;
}
.services-item__image {
  width: 500px;
  margin-right: 20px;
}
.block {
  display: flex;
  width: 1200px;
  justify-content: space-between;
  align-items: center;
}
.text {
  font-size: 30px;
  line-height: 1.2;
}


h2.book-text {
  text-align: center;
  margin-top: 50px;
}
table {
  text-align: center;
  margin: 0 auto;
}
.btn__book {
  width: 300px;
  font-size: 20px;
  background-color: #910e27;
  padding: 10px;
  text-align: center;
  box-sizing: border-box;
  color: white;
  outline: none;
  border: 0;
  margin: 30px auto;
  display: block;
}
.btn__book:hover {
  cursor: pointer
}
</style>