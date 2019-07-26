<template>
  <div class="services">
    <h1>stackoverflow</h1>
    <div class="events">
      <div v-for="(item, index) of stacks.items" :key="index" class="event">
        <img :src="item.owner.profile_image" alt />
        <div class="desc">
          <a :href="item.owner.link" class="actor">{{ item.owner.display_name }}</a>
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "so",
  computed: {
    stacks() {
      return this.$store.getters.getSO;
    }
  },
  created() {
    this.$store.dispatch("GET_SO");
  }
};
</script>
<style scoped>
.events {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.event {
  margin-bottom: 30px;
  border: 1px solid #e6e6e6;
  padding: 2em 2em 2.8em 2em;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  -ms-border-radius: 4px;
  border-radius: 4px;
  max-width: 400px;
}
.event:after {
  content: "";
  display: block;
  overflow: hidden;
  height: 0;
  clear: both;
}
.desc {
  margin-left: 75px;
}
.actor {
  margin-bottom: 10px;
  font-size: 12px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
  display: block;
}
.actor + a {
  color: #4d4d4d;
}
.actor:hover,
.actor + a:hover {
  text-decoration: none;
}
img {
  float: left;
  width: 60px;
  height: 60px;
}
</style>
