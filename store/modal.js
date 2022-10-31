export const state = () => ({ 
    header: "",
    content: "",
    image: "",
    link: "",
  });
  
  export const mutations = {
    showModal(state, payload) {
      state.header = payload.header;
      state.content = payload.content;
      state.image = payload.image;
      state.link = payload.link;
    },
  };
  