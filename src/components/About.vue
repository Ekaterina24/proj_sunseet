<template>
  <div class="about">
    <div class="about__wrapper">
      <h1>О нас</h1>
      <p>База отдыха "Каспийский Лотос" располагается в небольшом селе Вышка. Основные услуги, которые предоставляются
        постояльцам - это частная парковка и возможно размещения с домашними животными.</p>

      <p>Номера оформлены в едином стиле. В каждом имеется односпальная кровать, прикроватная тумбочка и вешалка для хранения вещей.</p>

      <p>На небольшой кухне имеется холодильник, микроволновая печь и электрический чайник.</p>

      <p>Расстояние до ближайшего аэропорта 80 км, а до железнодорожного вокзала около 89 км езды.</p>

      <h2>Галерея</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style scoped>
.about {
  background: linear-gradient(269.86deg, #002F55 0.13%, #0FA0A0 99.88%);
  padding-top: 40px;
  padding-bottom: 100px;
}

.about__wrapper {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  max-width: 1200px;
  padding: 25px 30px 200px;
  margin: 0 auto;

}

h1 {
  font-weight: 600;
  font-size: 26px;
}

p {
  font-size: 16px;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin-top: 50px;
}

</style>