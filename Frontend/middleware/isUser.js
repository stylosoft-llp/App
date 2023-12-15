export default function ({ $auth, redirect }) {
  // If the user is not authenticated
  if (!$auth.loggedIn) {
    return redirect("/login");
  }
	if ($auth.user.role.includes("super")) {
		return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
		//return redirect("/superadmin");
  } else {
    let compRole = $auth.user.company?.pivot?.role;
    if (compRole == "Admin" || compRole == "Subadmin") {
      return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
      //return redirect('/app');
    }
    //Onboarding
    if (!$auth.user.company) {
      if (!$auth.user.license) {
        return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
      }
    }
  }
}
