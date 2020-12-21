<template>
  <div class="body">
    <div class="container center">
      <img class="money" src="/assets/img/markeplace.png" />
      <div>
        <img class="market" src="/assets/img/THE MARKETHUB.png" />
      </div>
      <div class="bus">
        <h5>Welcome !</h5>
        <form class="d-flex form" @submit.prevent="performSignUp">
          <div style="width : fit-content">
            <label for="email" class="w-100 text-left">Email</label><br />
            <input
              class="Email"
              type="email"
              id="email"
              name="email"
              v-model="email"
            /><br />
            <label class="pass w-100 text-left" for="password">Password</label
            ><br />
            <input
              class="Email"
              type="password"
              :disabled="isSubmitting"
              id="password"
              v-model="password"
              name="password"
            /><br />
            <input class="make" type="submit" value="Login" />
            <p>Forgot Password ?</p>
          </div>
        </form>
      </div>
      <div class="logo">
        <img src="/assets/img/smedan_logo 1.png" />
        <img src="/assets/img/fav300x300 1.png" />
      </div>
    </div>
  </div>
</template>
<script>
import { auth } from "../firebase";
export default {
  data() {
    return {
      email: "",
      password: "",
      isSubmitting: false,
    };
  },
  methods: {
    async performSignUp() {
      try {
        this.Nprogress.start();
        this.isSubmitting = true;
        await auth.signInWithEmailAndPassword(this.email, this.password);
        this.Nprogress.done();
        this.isSubmitting = false;
        this.$router.push("/account/dashboard");
      } catch (error) {
        this.showErrorNotification(error.message);
        this.isSubmitting = false;
        this.Nprogress.done();
      }
    },
  },
};
</script>
<style scoped>
.center {
  background-color: #33bdff;
  height: auto;
  border-radius: 48px;
  text-align: center;
}
.body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.money {
  background: white;
  border-radius: 20em;
  height: 3em;
  margin-top: 2em;
}
.market {
  margin-top: 2em;
  width: 7em;
}
.bus {
  color: white;
  margin-top: 2em;
  font-weight: lighter;
}
.form {
  justify-content: center;
  align-items: center;
}
.Email {
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  width: 20em;
}
.pass {
  padding-top: 1em;
}
.make {
  padding-right: 5em;
  padding-left: 5em;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 2em;
  margin-left: 3em;
  color: #33bdff;
  border-radius: 5px;
  border: none;
}
p {
  font-size: x-small;
}
.logo {
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  text-align: right;
}
</style>
