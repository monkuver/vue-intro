<template>
  <div class="login-form">
    <form @submit.prevent="submit">
      <div :class="{ 'error-input': $v.login.$error }">
        <label for="login">Email:</label>
        <input type="text" id="logn" v-model.trim="login" />
      </div>
      <div class="error" v-if="!$v.login.required">Email is required</div>
      <div class="error" v-if="!$v.login.email">Email incorrect</div>
      <div :class="{ 'error-input': $v.password.$error }">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <div class="error" v-if="!$v.password.required">Password is required</div>
      <div class="error" v-if="!$v.password.minLenngth">Minimum password length 8 chars</div>
      <input type="submit" value="Login" />
    </form>
  </div>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      login: "",
      password: ""
    };
  },
  validations: {
    login: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          email: this.login,
          password: this.password
        };
        this.$store
          .dispatch("SIGN_IN", user)
          .then(() => {
            this.$router.push("/reddit");
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>
<style scoped>
.error {
  display: none;
  color: #f75940;
}
.error-input input {
  border-color: #f75940;
}
.error-input + .error {
  display: inline-block;
}

.login-form {
  display: flex;
  align-content: center;
  justify-content: center;
}
form {
  margin-top: 20px;
  width: 400px;
}
input[type="text"],
input[type="password"] {
  font-size: 14px;
  font-weight: 300;
  border: 1px solid #f0f0f0;
  background: #fff;
  color: #333333;
  margin-bottom: 2px;
  border-radius: 30px;
  display: block;
  height: 42px;
  padding: 10px 20px;
  line-height: 1.42857;
  width: 100%;
}
input[type="submit"] {
  display: block;
  color: #fff;
  background-color: #f75940;
  border: 1px solid;
  border-radius: 30px;
  display: block;
  height: 42px;
  padding: 10px 20px;
  line-height: 1.42857;
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 20px;
}
</style>
