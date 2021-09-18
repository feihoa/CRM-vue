<template>
  <form class="card auth-card" @submit.prevent="submitHandler">
    <div class="card-content">
      <span class="card-title">{{ "Home_Book" | localize }}</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email),
          }"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.email.$dirty && !$v.email.required"
          >{{ "EmailEmpty_Err" | localize }}
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.email.$dirty && !$v.email.email"
          >{{ "NotEmail_Err" | localize }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <label for="password">{{ "Password" | localize }}</label>
        <small
          class="helper-text invalid"
          v-if="$v.password.$dirty && !$v.password.required"
          >{{ "Enter_Password" | localize }}
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >{{ "PasswordLength_Err" | localize }}
          {{ $v.password.$params.minLength.min }} {{ "Symbols.Now" | localize }}
          {{ password.length }}
        </small>
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{
            invalid:
              ($v.name.$dirty && !$v.name.required) ||
              ($v.name.$dirty && !$v.name.minLength),
          }"
        />
        <label for="name">{{ "Name" | localize }}</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
          >{{ "Message_EnterName" | localize }}
        </small>
        <small
          class="helper-text invalid"
          v-else-if="$v.name.$dirty && !$v.name.minLength"
          >{{ "NotEnoughSymbols" | localize }} ({{
            $v.name.$params.minLength.min
          }}
          {{ "From" | localize }} {{ name.length }})
        </small>
      </div>
      <p>
        <label>
          <input type="checkbox" v-model="agree" />
          <span>{{ "Agreed_Rules" | localize }}</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          {{ "Register" | localize }}
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        {{ "Have_Account" | localize }}
        <router-link to="/login">{{ "Enter" | localize }}!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";

export default {
  name: "register",
  metaInfo() {
    return {
      title: this.$title("Register"),
    };
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
      try {
        await this.$store.dispatch("register", formData);
        await this.$router.push({ path: "/" });
      } catch (error) {}
    },
  },
  data: () => ({
    email: "",
    password: "",
    name: "",
    agree: false,
  }),
  validations: {
    email: {
      email,
      required,
    },
    password: {
      required,
      minLength: minLength(6),
    },
    name: {
      required,
      minLength: minLength(2),
    },
    agree: { checked: (v) => v },
  },
};
</script>
