export default function ({ store, redirect }) {
    // If the user is not authenticated
    //let parsedCookie = JSON.parse(Cookie.get('auth'));

    if (!store.state.auth && !localStorage.getItem('token')) {
      return redirect('/login')
    }
  }