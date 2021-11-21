<template>
  <div class="header">
    <div class="header__content">
      <div class="header__logo">
        <img src="../assets/logo-site.png" alt="logo">
      </div>
      <div class="header__menu">
        <router-link to="/">Главная</router-link>
        <router-link to="/about">О нас</router-link>
        <router-link to="/services">Услуги</router-link>
        <router-link to="/blog">Блог</router-link>
        <router-link to="/book">Забронировать домик</router-link>
        <router-link to="/contacts">Контакты</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style lang="scss">
a {
  text-decoration: none;
  color: white;
}
.header {
  font-family: 'Montserrat', sans-serif;

  &__content {
    padding: 20px;
    display: flex;
    background: #002F55;
    align-items: center;
  }
  &__logo {
    margin-right: 50px;
    img {
      width: 30px;
    }
  }
  &__menu {
    display: flex;
    width: 700px;
    justify-content: space-between;
  }
}
</style>