export const state = () => ({
  loading: false,
  errorsBag: false,
})

export const getters = {
  getLoading(state) {
    return state.loading
  },

  getErrorsBag: state => state.errorsBag,
}

export const mutations = {
  setLoading(state) {
    state.loading = !state.loading
  },

  setErrorsBag(state) {
    state.errorsBag = true
  },

  setUserAvatar(state, value) {
    state.auth.user.avatar_count = 1;
    state.auth.user.avatar = value;
  }
}

export const actions = {
  dataErrorToast(context, app) {
    app.$root.$bvToast.toast("Provided data is not valid.", {
      title: "Data Error",
      variant: "danger",
      solid: true,
    })
  },

  errorToast(context, {app, message}) {
    app.$root.$bvToast.toast(message, {
      title: "Opps!",
      variant: "danger",
      solid: true,
    })
  },

  async deteteConfirm(context, app) {
    let confirm = await app.$swal({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
    return confirm.value
  },
}
