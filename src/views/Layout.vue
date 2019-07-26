<template>
  <div class="page-wrapper">
    это лаяут
    <aside>
      <nav role="navigation">
        <ul>
          <li>
            <router-link to="/reddit">Reddit</router-link>
          </li>
          <li>
            <router-link to="/github">Github</router-link>
          </li>
          <li>
            <router-link to="/so">Stack Overflow</router-link>
          </li>
          <li>
            <router-link to="/settings">Settings</router-link>
          </li>
        </ul>
      </nav>
    </aside>
    <main>
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
aside {
  padding-top: 3em;
  padding-bottom: 40px;
  padding-left: 3em;
  padding-right: 3em;
  width: 20%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  background: #fff;
  ul {
    text-align: right;
    margin: 0;
    padding: 0;
    li {
      margin: 0 0 10px 0;
      padding: 0;
      list-style: none;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 1px;
      a {
        color: rgba(0, 0, 0, 0.4);
        text-decoration: none;
        position: relative;
        padding: 10px 0;
        font-family: "Montserrat", Arial, sans-serif;
        &::after {
          content: "";
          position: absolute;
          height: 1px;
          bottom: 7px;
          left: 0;
          right: 0;
          background-color: #000;
          visibility: hidden;
          transform: scaleX(0);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        &.router-link-active {
          color: #000;
          &::after {
            visibility: visible;
            transform: scaleX(1);
          }
        }
      }
    }
  }
}
main {
  width: 80%;
  float: right;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
.content-wrapper {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
