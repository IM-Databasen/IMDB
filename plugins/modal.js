export default ({ app, store }, inject) => {
    inject("modal", {
      showModal({ content = "" }) {
        store.commit("modal/showModal", { content });
      },
    });
  };
  