<template>
<div class="book">
  <div class="book__type">Выбор домика:
  <select v-model="selectedHome">
    <option v-for="user in users" v-bind:value="user.name" :key="user.name">{{user.name}}</option>
  </select>
  <span>Выбрано: {{selectedHome}}</span>
  </div>

  <div class="book__comfort">Класс комфорта:
    <select v-model="selectedComfort">
      <option v-for="user in users" v-bind:value="user.comfort" :key="user.name">{{user.comfort}}</option>
    </select>
    <span>Выбрано: {{selectedComfort}}</span>
  </div>

  <div class="book__count">Кол-во чел:
    <button
        type="button"
        @click="removePerson"
    >-</button>
    <input
        :value="selectedCount"
        :min="minCount"
        :max="maxCount"
    >
    <button
        type="button"
        @click="addPerson"
    >+</button>
  </div>
  <div class="book__btn">
    <button>Забронировать</button>
  </div>
</div>
</template>

<script>
export default {
  name: "Book",
  data() {
    return {
      users:[
        {name:'2-х местный', comfort:'Стандарт'},
        {name:'4-х местный', comfort:'Люкс'}
      ],
      selectedHome:'',
      selectedComfort:'',
      selectedCount:1,
      minCount:1,
      maxCount: 40
    }
  },
  methods: {
    addPerson() {
      if (this.selectedCount<this.maxCount) {
        this.selectedCount++
      }
    },
    removePerson() {
      if (this.selectedCount>this.minCount) {
        this.selectedCount--
      }
    }
  }

}
</script>

<style scoped>
.book {
  padding: 20px;
}
</style>