<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{'Edit' | localize}}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <select ref="select" v-model="current">
            <option v-for="c of categories" :key="c.id" :value="c.id">
              {{ c.title }}
            </option>
          </select>
          <label>{{'Choose_Category' | localize}}</label>
        </div>

        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{ invalid: $v.title.$dirty && !$v.title.required }"
          />
          <label for="name">{{'Title' | localize}}</label>
          <span
            class="helper-text invalid"
            v-if="$v.title.$dirty && !$v.title.required"
            >{{'Enter_CategoryName' | localize}}
          </span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{ invalid: $v.limit.$dirty && !$v.limit.minValue }"
          />
          <label for="limit">{{"Limit"| localize}}</label>
          <span
            v-if="$v.limit.$dirty && !$v.limit.minValue"
            class="helper-text invalid"
            >{{'Min_Value' | localize}} {{ $v.limit.$params.minValue.min }}
          </span>
        </div>

        <button class="btn waves-effect waves-light" type="submit">
          {{'Update'| localize}}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, minValue } from "vuelidate/lib/validators";
import localizeFilter from '@/filters/localize.filter'
 
export default {
  data: () => ({
    select: null,
    title: "",
    limit: 100,
    current: null,
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(100) },
  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select);
    M.updateTextFields();
  },
  watch: {
    current(catId) {
      const { title, limit } = this.categories.find((c) => c.id == catId);
      this.title = title;
      this.limit = limit;
    },
  },
  computed: {
    categoryFromState() {
      return this.$store.getters.currentCategoryId;
    },
  },
  created() {
    let index = this.categories.findIndex(
      (category) => category.id === this.categoryFromState
    );
    index = index >= 0 ? index : 0;
    const { id, title, limit } = this.categories[index];
    this.current = id;
    this.title = title;
    this.limit = limit;
  },
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  beforeDestroy() {
    if (this.select && this.select.destroy) {
      this.select.destroy;
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        const categoryData = {
          id: this.current,
          title: this.title,
          limit: this.limit,
        };
        await this.$store.dispatch("updateCategory", categoryData);
        this.$message(localizeFilter('Updated_Successfully'));
        this.$emit("updated", categoryData);
      } catch (error) {}
    },
  },
};
</script>
