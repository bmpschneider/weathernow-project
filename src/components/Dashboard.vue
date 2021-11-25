<template>
  <section class="dashboard"></section>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dashboard {
  background-color: #f1f1f1;
  min-height: 900px;
  min-width: 1000px;
}
</style>
