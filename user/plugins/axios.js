export default function ({ $axios, store }) {
    if (process.env.NODE_ENV == "production") {
        $axios.onResponse(({ data }) => {
            if (!data.status.success && data.status.code != 422) {
                throw ({ statusCode: data.status.code, message: data.status.message });
            }
        });
    }

    $axios.onRequest(({ loading }) => {
        if (loading != false) {
            store.commit("setLoading")
        }
    });

    $axios.onResponse(({ config }) => {
        if (config.loading != false) {
            store.commit("setLoading")
        }
    });
}