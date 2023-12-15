export default function ({ $auth, redirect }) {
  // If the user is not authenticated
  if (!$auth.loggedIn) {
    return redirect("/login");
  }
  if ($auth.user.role.includes("super")) {
    //return redirect("/superadmin");
		return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
  } else {
    if (!$auth.user.company) {
      if (!$auth.user.license) {
        return redirect("/packages");
      }
      return redirect("/onboarding");
    }
  }
}
