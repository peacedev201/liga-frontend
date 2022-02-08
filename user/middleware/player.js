export default function ({ $auth, redirect }) {
    if ($auth.user.type == "club") {
        redirect({ name: "club-profile" })
    }
}
