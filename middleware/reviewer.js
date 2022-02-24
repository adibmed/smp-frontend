export default function ({ $auth , redirect}) {
    if ($auth.user.role_id != 2) {
      return redirect('/login')
    }
  }
  