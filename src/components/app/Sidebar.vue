<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a href="#" class="waves-effect waves-orange pointer">{{ link.title }}</a>
    </router-link>
  </ul>
</template>

<script>
import localizeFilter from "@/filters/localize.filter";
export default {
  props: ["value"],
  data: () => ({
    links: [
      { title: localizeFilter("Bill"), url: "/", exact: true },
      { title: localizeFilter("History"), url: "/history" },
      { title: localizeFilter("Menu_Planning"), url: "/planning" },
      { title: localizeFilter("NewRecord"), url: "/record" },
      { title: localizeFilter("Categories"), url: "/categories" },
    ],
  }),
};
</script>
