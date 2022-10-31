export const state = () => ({
    content: "",
  });
  
  export const mutations = {
    showModal(state, payload) {
      state.content = payload.content;
    },
  };
  