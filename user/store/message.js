export const state = () => ({
    message: [],
    notification: [],
  })
  
  export const mutations = {
    add (state, message) {
      state.message = message;
    },
    setNotification(state, notification) {
        state.notification = notification;
    }
  }

  export const getters = {
      sss: state => state.message
  }