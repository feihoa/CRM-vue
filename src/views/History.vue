<template>
  <div>
    <div class="page-title">
      <h3>{{ "Record_History" | localize }}</h3>
    </div>

    <div class="history-chart">
      <canvas ref="canvas"></canvas>
    </div>
    <Loader v-if="loading" />
    <p class="center" v-else-if="!records.length">
      {{ "No_Records" | localize }}
      <router-link to="/record">{{ "Add_NewRecord" | localize }}</router-link>
    </p>
    <section v-else>
      <HistoryTable :records="items" />
      <Paginate
        v-model="page"
        :page-count="pageCount"
        :click-handler="pageChangeHandler"
        :prev-text="'Back' | localize"
        :next-text="'Forward' | localize"
        :container-class="'pagination'"
        :page-class="'waves-effect'"
      />
    </section>
  </div>
</template>

<script>
import paginationMixin from "@/mixins/pagination.mixin.js";
import HistoryTable from "@/components/HistoryTable";
import { Pie } from "vue-chartjs";
import localizeFilter from "@/filters/localize.filter";
import ratesLocal from "../../rates.json";

export default {
  name: "history",
  metaInfo() {
    return {
      title: this.$title("History"),
    };
  },
  extends: Pie,
  mixins: [paginationMixin],
  data: () => ({
    loading: true,
    records: [],
  }),

  components: {
    HistoryTable,
  },
  async mounted() {
    this.records = await this.$store.dispatch("fetchRecords") 
    const categories = await this.$store.dispatch("fetchCategories");
    this.setup(categories);

    this.loading = false;
  },
  methods: {
    setup(categories) {
      this.setupPagination(
        this.records.map((rec) => {
          return {
            ...rec,
            categoryName: categories.find((cat) => rec.categoryId === cat.id)
              .title,
            typeClass: rec.type === "outcome" ? "red" : "green",
            typeText:
              rec.type === "outcome"
                ? localizeFilter("Outcome")
                : localizeFilter("Income"),
          };
        }),

        this.renderChart({
          labels: categories.map((c) => c.title),
          datasets: [
            {
              label: localizeFilter("Spent_ByCategory"),
              data: categories.map((c) => {
                return this.records.reduce((total, r) => {
                  if (r.categoryId === c.id && r.type == "outcome") {
                    total += +r.amount;
                  }
                  return total;
                }, 0);
              }),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
          ],
        })
      );
    },
  },
};
</script>
