export default {
    $_veeValidate: {
        validator: "new",
    },

    computed: {
        errorsBag() {
            return this.$store.getters['getErrorsBag'];
        }
    },

    created() {
        if (!this.errorsBag) {
            this.$axios.onResponse(({ data }) => {
                if (!data.status.success) {
                    if (data.status.code == 422) {
                        this.$store.dispatch("dataErrorToast", this);
                    }
                    if (data.status.code == 100) {
                        this.$store.dispatch("errorToast", { app: this, message: data.status.message });
                    }
                }
            });
            this.$store.commit('setErrorsBag', true);
        }

        this.$axios.onResponse(({ data }) => {
            if (!data.status.success && data.status.code == 422) {
                var errors = data.errors;
                for (var error in errors) {
                    this.$validator.errors.add({
                        field: error,
                        msg: errors[error][0],
                    });
                }
            }
        });
    },

    methods: {
        formSubmit() {
            this.$validator.validate().then(async (result) => {
                if (result) {
                    this.validated();
                } else {
                    this.$store.dispatch("dataErrorToast", this);
                }
            });
        },
    },
}