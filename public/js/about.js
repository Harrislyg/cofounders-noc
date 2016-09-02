/* globals $ currentUser */
function userAuthSuccess () {
  $('#title').text('About ' + currentUser.name)
}

function userAuthFailed () {
  // if login fails then we want to redirect as this page is secret
  window.location.href = 'login.html'
}
