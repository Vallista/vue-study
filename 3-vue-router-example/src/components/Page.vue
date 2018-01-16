<template>
  <div class="flex-container flex-center-sort flex-column">
    <p class="title">{{ this.list[$route.params.post].title }}</p>
    <hr />
    <p class="description">{{ this.list[$route.params.post].description }}</p>
  </div>
</template>

<script>
  import Data from '@/components/data';

  export default {
    name: 'Page',
    data() {
      return {
        list: Data,
      }
    },
  };
</script>

<style scoped>
  p {
    color: white;
  }

  hr {
    width: 200px;
  }

  .title {
    font-size: 30px;
  }

  .description {
    font-size: 20px;
    width: 500px;
  }
</style>
