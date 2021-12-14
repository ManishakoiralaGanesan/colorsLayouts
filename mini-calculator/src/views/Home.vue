<template>
  <div class="home">
    <calculator />
  </div>
</template>

<script>
// @ is an alias to /src
import calculator from "./../components/calculator.vue";
export default {
  name: "Home",
  components: {
    calculator,
  },
};
</script>
