export default function ({ $auth, redirect }) {
    if ($auth.user.type == "player") {
        redirect({ name: "player-profile" })
    }
}
