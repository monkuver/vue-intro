<template>
  <div class="services">
    <h1>Github</h1>
    <div class="events">
      <div v-for="(item, index) of githubs" :key="index" class="event">
        <img :src="item.actor.avatar_url || item.actor.gravatar_id" alt />
        <div class="desc">
          <p class="tag">{{ item.type }}</p>
          <a :href="item.actor.url" class="actor">{{ item.actor.login }}</a>
          <p v-if="item.type === 'IssueCommentEvent'">{{item.payload.comment.body}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "github",
  computed: {
    githubs() {
      return this.$store.getters.getGithubs;
    }
  },
  created() {
    this.$store.dispatch("GET_GITHUBS");
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
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 3px;
}
.tag {
  font-size: 12px;
}
img {
  float: left;
  width: 60px;
  height: 60px;
}
</style>
