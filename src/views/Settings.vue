<template>
  <div class="service">
    <div>Current size: {{ size }}</div>
    <form>
      <label for="size">Query size:</label>
      <input type="text" id="size" ref="sizeInput" />
      <input type="button" @click.prevent="setQuerySize" value="Set size" />
    </form>
  </div>
</template>
<script>
export default {
  computed: {
    size() {
      return this.$store.getters.getSize;
    }
  },
  methods: {
    setQuerySize() {
      this.$store.dispatch("SET_SIZE", this.$refs.sizeInput.value);
      this.$refs.sizeInput.value = "";
    }
  }
};
</script>
<style scoped>
form {
  margin-top: 20px;
  display: flex;
  align-items: center;
}
label {
  margin-right: 10px;
}
input[type="text"] {
  font-size: 14px;
  font-weight: 300;
  border: 1px solid #f0f0f0;
  background: #fff;
  color: #333333;
  margin-bottom: 2px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  display: block;
  height: 42px;
  padding: 10px 20px;
  line-height: 1.42857;
  border-right: none;
}
input[type="button"] {
  color: #fff;
  background-color: #f75940;
  border: 1px solid;
  margin-bottom: 2px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: block;
  height: 42px;
  padding: 10px 20px;
  line-height: 1.42857;
  border-left: none;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
