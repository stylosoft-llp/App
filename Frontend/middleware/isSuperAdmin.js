export default function ({ $auth, redirect }) {
  // If the user is not authenticated
  if (!$auth.loggedIn) {
    return redirect("/login");
  }
  let userRole = $auth.user.role;
  let allowedRole = ["super"];
  if (!allowedRole.some((r) => userRole.includes(r))) {
    //return redirect("/login");
    return window.$nuxt.error({ statusCode: 403, message: "Forbidden" });
  }
}
