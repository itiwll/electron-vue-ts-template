<!--
 * @Author: eson
 * @Description: 
--> 

<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    :rules="loginRules"
    class="login-form"
    autocomplete="on"
    label-position="left"
  >
    <div class="title-container">
      <h3 class="title">{{ $t('login.title') }}</h3>
    </div>

    <el-form-item prop="username">
      <el-input
        ref="username"
        v-model="loginForm.username"
        :placeholder="$t('login.username')"
        name="username"
        type="text"
        tabindex="1"
        autocomplete="on"
      />
    </el-form-item>

    <el-tooltip v-model="capsTooltip" :content="$t('login.capsLock')" placement="right" manual>
      <el-form-item prop="password">
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          :placeholder="$t('login.password')"
          name="password"
          tabindex="2"
          autocomplete="on"
          @keyup.native="checkCapslock"
          @blur="capsTooltip = false"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
    </el-tooltip>

    <el-button
      :loading="loading"
      type="primary"
      style="width:100%; margin-bottom:30px;"
      @click.native.prevent="handleLogin"
    >{{ $t('login.logIn') }}</el-button>
  </el-form>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Route } from "vue-router";
import { Dictionary } from "vue-router/types/router.d";
import { Form as ElForm, Input as ElInput } from "element-ui";
import { UserModule } from "@/store/user";
import { isValidMobilePhone } from "@/utils/validate";

@Component({
  name: "Login"
})
export default class Login extends Vue {
  private validateUsername = (rule: any, value: string, callback: Function) => {
    if (!isValidMobilePhone(value)) {
      callback(new Error("Please enter the correct user name"));
    } else {
      callback();
    }
  };

  private validatePassword = (
    rule: RegExp,
    value: string,
    callback: Function
  ) => {
    if (value.length < 6) {
      callback(new Error("The password can not be less than 6 digits"));
    } else {
      callback();
    }
  };

  private loginForm = {
    username: "",
    password: ""
  };

  private get loginRules() {
    return {
      username: [
        {
          validator: this.validateUsername,
          trigger: "blur",
          message: this.$t("login.usernameError")
        }
      ],
      password: [
        {
          validator: this.validatePassword,
          trigger: "blur",
          message: this.$t("login.passwordError")
        }
      ]
    };
  }

  private passwordType = "password";

  private loading = false;

  private showDialog = false;

  private capsTooltip = false;

  private redirect?: string;

  private otherQuery: Dictionary<string> = {};

  @Watch("$route", { immediate: true })
  private onRouteChange(route: Route) {
    // TODO: remove the "as Dictionary<string>" hack after v4 release for vue-router
    // See https://github.com/vuejs/vue-router/pull/2050 for details
    const query = route.query as Dictionary<string>;
    if (query) {
      this.redirect = query.redirect;
      this.otherQuery = Login.getOtherQuery(query);
    }
  }

  mounted() {
    if (this.loginForm.username === "") {
      (this.$refs.username as ElInput).focus();
    } else if (this.loginForm.password === "") {
      (this.$refs.password as ElInput).focus();
    }
  }

  private checkCapslock(e: KeyboardEvent) {
    const { key } = e;
    this.capsTooltip =
      key !== null && key.length === 1 && key >= "A" && key <= "Z";
  }

  private showPwd() {
    if (this.passwordType === "password") {
      this.passwordType = "";
    } else {
      this.passwordType = "password";
    }
    this.$nextTick(() => {
      (this.$refs.password as ElInput).focus();
    });
  }

  private handleLogin() {
    (this.$refs.loginForm as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.loading = true;
        await UserModule.Login(this.loginForm);
        this.$router.push({
          path: this.redirect || "/",
          query: this.otherQuery
        });
        // Just to simulate the time of the request
        setTimeout(() => {
          this.loading = false;
        }, 0.5 * 1000);
        return true;
      }
      return false;
    });
  }

  static getOtherQuery(query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== "redirect") {
        acc[cur] = query[cur];
      }
      return acc;
    }, {} as Dictionary<string>);
  }
}
</script>