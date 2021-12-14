<template>
  <input type="text" v-model="value" disabled id="txt" />
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
  },
};
</script>
<style>
#txt {
  text-align: center;
}
</style>