<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a href="#" @click.stop="$emit('click')">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ date | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdown"
          >
            {{ name }}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul id="dropdown" class="dropdown-content">
            <li>
              <router-link to="/profile" class="black-text">
                <i class="material-icons">account_circle</i
                >{{ "Profile" | localize }}
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#" class="black-text" v-on:click="logout">
                <i class="material-icons">assignment_return</i
                >{{ "Log_Out" | localize }}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    date: new Date(),
    interval: null,
    dropdown: null,
  }),
  mounted() {
    this.interval = setInterval(() => {
      this.date = new Date();
    }, 1000);
    try {
      this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
        constrainWidth: false,
      });
    } catch (e) {}
  },
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  },
  computed: {
    name() {
      return this.$store.getters.info.name;
    },
  },
  methods: {
    async logout() {
      const rem = this.$store.getters.info.locale;
      await this.$store.dispatch("logout");
      this.$router.push("/login?message=logout");
      this.$store.getters.info.locale = rem;
    },
  },
};
</script>
