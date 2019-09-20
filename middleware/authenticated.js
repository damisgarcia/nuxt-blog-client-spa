export default ({ store, redirect, route }) => {
  const { profile } = store.state
  const { currentUser } = profile
  if (!currentUser.authenticated && route.name !== 'users-signin') {
    return redirect('/users/signin')
  }

  if (currentUser.authenticated && route.name === 'users-signin') {
    return redirect('/')
  }
}
