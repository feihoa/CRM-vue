export default {
  bind(el, { value }) {
    M.Tooltip.init(el, { html: value });
  },
  unbind(el) {
    const toolTip = M.Tooltip.getInstance(el);

    if (toolTip && toolTip.destroy) {
      toolTip.destroy();
    }
  },
};
