<template>
<div class="main">
  <img src="../assets/fon.jpg" alt="fon">
  <div class="main__content">
    <h1>База отдыха "Каспийский Лотос"</h1>
    <router-link :to="'/book'" class="btn">Забронировать домик</router-link>
  </div>
</div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss" scoped>
.main__content {
  position: absolute;
  top: 150px;
  left: 20px;
  display: flex;
  align-items: center;
}
  .btn {
    width: 300px;
    font-size: 40px;
    background-color: #910e27;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    color: white;
    outline: none;
  }
  img {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 800px;
    width: 100%;
  }
  h1 {
    max-width: 700px;
    color: white;
    font-size: 70px;
    margin-right: 250px;
  }


</style>