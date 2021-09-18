import localizeFilter from "@/filters/localize.filter";

export default {
  install(Vue) {
    Vue.prototype.$message = function (html) {
      M.toast({ html: localizeFilter(html) });
    };
    Vue.prototype.$error = function (html) {
      M.toast({ html: `[${localizeFilter("Error")}] ${localizeFilter(html)}` });
    };
  },
};
