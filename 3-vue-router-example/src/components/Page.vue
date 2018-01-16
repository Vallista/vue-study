<template>
  <div class="flex-container flex-center-sort">
    <p>Page {{$route.params.post}}</p>
  </div>
</template>

<script>
  import Data from '@/components/data';

  export default {
    name: 'Page',
    components: {

    },
    data() {
      return {
        list: Data,
      }
    },
    created() {
      console.log(this.list);
    },
  };
</script>

<style scoped>
  p {
    color: white;
    font-size: 100px;
  }
</style>
