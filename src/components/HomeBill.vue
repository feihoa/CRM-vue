<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">{{ "Funds_ForeinCurrency" | localize }}</span>

        <p v-for="cur of currencies" :key="cur" class="currency-line">
          <span>
            {{ getCurrency(cur) | currency(cur) }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["rates"],
  computed: {
    base() {
      return (
        this.$store.getters.info.bill / (this.rates["RUB"] / this.rates["EUR"])
      );
    },
  },
  data: () => ({
    currencies: ["RUB", "USD", "EUR"],
  }),
  methods: {
    getCurrency(currency) {
      return Math.floor(this.base * this.rates[currency]);
    },
  },
};
</script>
