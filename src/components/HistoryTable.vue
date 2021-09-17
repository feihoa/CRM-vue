<template>
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Сумма</th>
        <th>Дата</th>
        <th>Категория</th>
        <th>Тип</th>
        <th>Открыть</th>
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
            v-toolTip="'Детали'"
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
export default {
  props: {
    records: {
      type: Array,
      required: true,
    },
  },
};
</script>
