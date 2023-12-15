export default function ({app, $axios, $toast, redirect }) {
  $axios.onError((error) => {
    if (error.response.status === 500) {

    }
    if (error.response.status === 400) {
			let errData = error.response.data;
			Object.keys(errData).forEach((i) => {
				app.$toast.error(errData[i][0]);
      });
    }
  });
}