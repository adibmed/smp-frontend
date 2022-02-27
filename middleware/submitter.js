export default function ({ $auth, redirect }) {
  if ($auth.user.role === "reviewer") {
    return redirect("/login");
  }
}
