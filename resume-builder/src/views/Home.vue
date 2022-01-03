<template>
  <div class="home">
    <PersonalDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import PersonalDetail from "./../components/PersonalDetail.vue";
export default {
  name: "Home",
  components: {
    PersonalDetail,
  },
};
</script>
