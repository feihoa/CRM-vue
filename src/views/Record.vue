<template>
  <div>
    <div class="page-title">
      <h3>{{ "NewRecord" | localize }}</h3>
    </div>
    <Loader v-if="loading" />

    <p v-else-if="!categories.length" class="center">
      {{ "No_Categories" | localize }}
      <router-link to="/categories">{{
        "Add_NewRecord" | localize
      }}</router-link>
    </p>

    <form class="form" v-else @submit.prevent="submitHandler">
      <div class="input-field">
        <select ref="select" v-model="category">
          <option v-for="c of categories" :key="c.id" :value="c.id">
            {{ c.title }}
          </option>
        </select>
        <label>{{ "Choose_Category" | localize }}</label>
      </div>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="income"
            v-model="type"
          />
          <span>{{ "Income" | localize }}</span>
        </label>
      </p>

      <p>
        <label>
          <input
            class="with-gap"
            name="type"
            type="radio"
            value="outcome"
            v-model="type"
          />
          <span>{{ "Outcome" | localize }}</span>
        </label>
      </p>

      <div class="input-field">
        <input
          id="amount"
          type="number"
          v-model.number="amount"
          :class="{ invalid: $v.amount.$dirty && !$v.amount.minValue }"
        />
        <label for="amount">{{ "Sum" | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.amount.$dirty && !$v.amount.minValue"
          >{{ "Min_Value" | localize }}
          {{ $v.amount.$params.minValue.min }}</span
        >
      </div>

      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="description"
          :class="{
            invalid: $v.description.$dirty && !$v.description.required,
          }"
        />
        <label for="description">{{ "Description" | localize }}</label>
        <span
          class="helper-text invalid"
          v-if="$v.description.$dirty && !$v.description.required"
          >{{ "Enter_Description" | localize }}</span
        >
      </div>

      <button class="btn waves-effect waves-light" type="submit">
        {{ "Create" | localize }}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { minValue, required } from "vuelidate/lib/validators";
import { mapGetters } from "vuex";
import localizeFilter from "@/filters/localize.filter";

export default {
  name: "record",
  metaInfo() {
    return {
      title: this.$title("NewRecord"),
    };
  },
  data: () => ({
    loading: true,
    select: null,
    categories: [],
    category: null,
    type: "outcome",
    amount: 1,
    description: "",
  }),
  validations: {
    amount: {
      required,
      minValue: minValue(1),
    },
    description: {
      required,
    },
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      if (this.canCreateRecord) {
        try {
          await this.$store.dispatch("createRecord", {
            categoryId: this.category,
            amount: this.amount,
            description: this.description,
            type: this.type,
            date: new Date().toJSON(),
          });
          const bill =
            this.type === "income"
              ? this.info.bill + this.amount
              : this.info.bill - this.amount;

          await this.$store.dispatch("updateInfo", { bill });
          this.$message(localizeFilter("Record_Created"));
          this.$v.$reset();
          this.amount = 1;
          this.description = "";
        } catch (e) {}
      } else {
        this.$message(
          `${localizeFilter("Insufficient_Funds")} (${
            this.amount - this.info.bill
          })`
        );
      }
    },
  },
  computed: {
    ...mapGetters(["info"]),
    canCreateRecord() {
      if (this.type === "income") {
        return true;
      } else {
        return this.info.bill >= this.amount;
      }
    },
  },
  async mounted() {
    this.categories = await this.$store.dispatch("fetchCategories");
    this.loading = false;

    if (this.categories.length) {
      this.category = this.categories[0].id;
    }

    setTimeout(() => {
      this.select = M.FormSelect.init(this.$refs.select);
      M.updateTextFields();
    }, 0);
  },
  beforeDestroy() {
    if (this.select && this.select.destroy) {
      this.select.destroy;
    }
  },
};
</script>
