<template>
  <div class="login-view">
    <login-form />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import LoginForm from "@/components/login/LoginForm.vue";

@Component({
  components: { LoginForm },
})
export default class Login extends Vue {}
</script>

<style lang="scss" scoped>
.login-container {
  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }
}
</style>






