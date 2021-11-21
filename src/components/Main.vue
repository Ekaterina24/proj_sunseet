<template>
  <div class="main">
    <div class="main__content">
      <div class="main__banner">
        <h1>База отдыха "Каспийский Лотос"</h1>
        <b>Проведите незабываемый отдых в живописном месте!</b>
        <div class="main__buttons">
          <router-link :to="'/book'" class="btn">Забронировать домик</router-link>
          <router-link :to="'/about'" class="btn">Узнать больше</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main"
}
</script>

<style lang="scss" scoped>
.main {
  background-image: url("../assets/fon.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 800px;
  width: 100%;
  font-family: 'Montserrat', sans-serif;
}

.main__content {
  display: flex;
  justify-content: center;
  padding-top: 60px;
}

.main__banner {
  background: rgba(0, 47, 85, 0.85);
  margin-top: 0px;
  border-radius: 50px;
  height: 350px;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.main__buttons {
  margin-top: 75px;
  display: flex;
  justify-content: space-between;
  width: 700px;
}

.btn {
  width: 300px;
  border-radius: 50px;
  background-color: #ffffff;
  color: #002F55;
  font-size: 20px;
  font-weight: 500;
  width: 300px;
  height: 60px;

  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  color: white;
  font-size: 48px;
  margin: 45px 40px 35px;
  font-weight: 700;
}

b {
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
}


</style>