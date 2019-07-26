<template>
  <div class="services">
    <h1>Reddit</h1>
    <div class="posts">
      <div v-if="reddits.length !== 0">
        <p v-for="(item, index) of reddits.data.children" :key="index">
          <a target="_blank" :href="item.data.url">{{ item.data.title }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reddits",
  computed: {
    reddits() {
      return this.$store.getters.getReddits;
    }
  },
  created() {
    this.$store.dispatch("GET_REDDITS");
  }
};
</script>
<style lang="scss">
a {
  font-weight: 300;
  font-size: 15px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    text-decoration: none;
  }
}
// .services {
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-template-rows: 2fr 100px;
//   grid-column-gap: 20px;
//   display: grid;
//   grid-row-gap: 20px;
//   justify-items: stretch;
//   align-items: stretch;
// }
// img {
//   width: 50px;
// }
</style>
