export default function({ $auth, redirect }) {
  // If the user is not authenticated
  if(!$auth.loggedIn){
    return redirect("/login");
  }
	if ($auth.user.role.includes("super")) {
    return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
    //return redirect("/superadmin");
  } else {
    //Onboarding
    if (!$auth.user.company) {
      if (!$auth.user.license) {
        return redirect("/packages");
      }
      return redirect("/onboarding");
    }

      let compRole = $auth.user.company?.pivot?.role;
      console.log(compRole);
      if (compRole == "Admin" || compRole == "Subadmin") {
        //return redirect('/app');
      } else {
        return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
      }
  }
}
