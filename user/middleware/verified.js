export default function ({ $auth, redirect }) {
    if (!$auth.user.has_verified_email) {
        redirect({ name: "verify" })
    }
}
