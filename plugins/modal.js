export default ({ app, store }, inject) => {
    inject("modal", {
      showModal({ content = "", header = "", image = "" }) {
        store.commit("modal/showModal", { header, content, image });
      },
    });
  };
  