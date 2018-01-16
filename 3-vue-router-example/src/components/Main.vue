<template>
  <div class="main-wrapper flex-container flex-center-sort">
    Main Page
    <router-link :to="{path: this.path}">랜덤 이동</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Main',
    methods: {
      randomLocation(min, max) {
        return (Math.floor(Math.random() * (max - min + 1)) + min).toString();
      }
    },
    data() {
      return {
        path: this.randomLocation(0, 1),
      };
    },
  };
</script>

<style scoped>
  .main-wrapper {
    background-color: black;
    width: 100%;
    height: 100%;
  }
</style>
