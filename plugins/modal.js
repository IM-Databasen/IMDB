export default ({ app, store }, inject) => {
    inject("modal", {
      showModal({ content = "", header = "", image = "", link = "" }) {
        store.commit("modal/showModal", { header, content, image, link });
      },
    });
  };
  