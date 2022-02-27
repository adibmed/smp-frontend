export default function ({ $auth, redirect }) {
  if ($auth.user.role.role === "reviewer") {
    return redirect("/login");
  }
}
