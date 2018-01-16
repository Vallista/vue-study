<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  background-color: black;
  width: 100vw;
  height: 100vh;
}

.flex-container {
  display: flex;
  width: 100%;
  height: 100%;
}

.flex-center-sort {
  justify-content: center;
  align-content: center;
  align-items: center;
}

a {
  background-color: white;
  text-decoration: none;
  color: red;
  border-radius: 30px;
  width: 100px;
  height: 50px;
  text-align: center;
  line-height: 50px;
}
</style>
