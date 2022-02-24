export default function ({ $auth, redirect }) {
    if ($auth.user.role_id != 1) {
      return redirect('/login')
    }
  }
  