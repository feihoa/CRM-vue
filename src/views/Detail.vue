<template>
  <div>
    <Loader v-if="loading" />
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">{{'History'|localize}}</router-link>
        <a click.prevent class="breadcrumb">
          {{ record.type === "income" ? income : outcome }}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div
            class="card"
            :class="{
              red: record.type === 'outcome',
              green: record.type === 'income',
            }"
          >
            <div class="card-content white-text">
              <p>{{'Description'|localize}}: {{ record.description }}</p>
              <p>{{"Sum"|localize}}: {{ record.amount | currency }}</p>
              <p>{{"Category"|localize}}: {{ record.categoryName }}</p>

              <small>{{ record.date | date("datetime") }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p class="center" v-else>{{'RecordId_NotFound'|localize}} {{ $route.params.id }} </p>
  </div>
</template>

<script>
import localizeFilter from '@/filters/localize.filter'

export default {
  name: "Detail",
  data: () => ({
    record: null,
    loading: true,
    outcome: '',
    income: ''
  }),

  async mounted() {
    this.outcome = localizeFilter('Outcome')
    this.income = localizeFilter('Income')
    const id = this.$route.params.id;
    let record = await this.$store.dispatch("fetchRecordById", id);
    record = record.length > 1 ? record : null
    if(record){
    const category = await this.$store.dispatch(
      "fetchCategoryById",
      record.categoryId 
    );
    this.record = {
      ...record,
      categoryName: category.title,
    };}
    this.loading = false;
  },
};
</script>
