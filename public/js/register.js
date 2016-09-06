/* global $ */
var serverURL = 'https://teamo-backend.herokuapp.com/'

$(function () {
  // listen for the form login
  $('#register-form').on('submit', function (event) {
    event.preventDefault()
    var formData = $(this).serialize()
    console.log(formData)
    signin(formData)
  })
})

function signin (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signup',
    data: formData,
    success: function (response) {
      // then redirect
      window.location.href = 'login.html'
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Singup Failed')
    }
  })
}
