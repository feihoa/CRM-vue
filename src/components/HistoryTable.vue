<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>{{ "Sum" | localize }}</th>
        <th>{{ "Date" | localize }}</th>
        <th>{{ "Category" | localize }}</th>
        <th>{{ "Type" | localize }}</th>
        <th>{{ "Open" | localize }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(rec, idx) of records" :key="rec.id">
        <td>{{ idx + 1 }}</td>
        <td>{{ rec.amount | currency }}</td>
        <td>{{ rec.date | date("datetime") }}</td>
        <td>{{ rec.categoryName }}</td>
        <td>
          <span class="white-text badge" :class="rec.typeClass">{{
            rec.typeText
          }}</span>
        </td>
        <td>
          <button
            class="btn-small btn"
            v-toolTip="details"
            data-position="top"
            @click="$router.push('/detail/' + rec.id)"
          >
            <i class="material-icons">open_in_new</i>
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";

export default {
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    details: localizeFilter("Details"),
  }),
};
</script>
