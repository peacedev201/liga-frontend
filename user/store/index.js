export const state = () => ({
    loading: false,
    errorsBag: false,
    verifyEmailSent: false,
  })

  export const getters = {
    getLoading: state => state.loading,

    getErrorsBag: state => state.errorsBag,

    getVerifyEmailSent: state => state.verifyEmailSent,
  }

  export const mutations = {
    setLoading: state => state.loading = !state.loading,

    setErrorsBag: state => state.errorsBag = true,

    setVerifyEmailSent: state => state.verifyEmailSent = !state.verifyEmailSent,
  }

  export const actions = {
    dataErrorToast(context, app) {
      app.$root.$bvToast.toast("Einige Angaben sind ungültig!", {
        title: "Fehler",
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
