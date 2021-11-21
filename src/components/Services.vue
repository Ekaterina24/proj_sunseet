<template>
<div class="services">
  <h1>Услуги</h1>
  <div class="services__list">
    <div
        class="services-item"
        v-for="(article, index) in info"
        :key="index">
      <img
          class="services-item__image"
          v-bind:src=" require('../assets/images/' + article.image) "
          alt="img"
      >
      <p class="services-item__name">{{ article.name }}</p>
      <router-link
          :to="`/service/${index+1}`"
          class="services-item__btn"
      >
        Подробнее
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";

export default {
  name: "Services",
  components: {},
  data() {
    return {
      info: []
    };
  },
  mounted() {
    axios
        .get('./db.json')
        .then(response => (this.info = response.data));
  }
}
</script>

<style lang="scss" scoped>
.services {
  h1 {
    margin: 0;
    text-align: center;
  }
  padding: 20px;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1100px;
  }
}

.services-item {
  flex-basis: 15%;
  box-shadow: 0 0 8px 0 #c0c0c0;
  padding: 16px;
  margin: 25px 25px 0;
  width: 250px;
  height: 230px;
  background-color: #e7dddd;
  &__image {
    width: 200px;
    height: 135px;
  }
  &__name {
    line-height: 1.2;
    height: 35px;
  }
  &__btn {
    width: 100px;
    background-color: #118346;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    color: white;
  }
}
</style>