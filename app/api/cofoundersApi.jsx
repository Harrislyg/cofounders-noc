var {browserHistory} = require('react-router')

module.exports = {

  signin (loginData) {
    $.ajax({
      type: 'POST',
      url: serverURL + 'signin',
      data: loginData,
      success: function (response) {
        console.log('login: ', response)
        // success save the repsonse
        window.localStorage.name = response.name
        window.localStorage.email = $('#user-email').val()
        window.localStorage.auth_token = response.auth_token
        window.localStorage.profileImg = response.profileImg
        // then redirect
        browserHistory.push('/')
      },
      error: function (xhr, ajaxOptions, thrownError) {
        // else output error
        console.log(xhr.status)
        console.log(thrownError)
        window.localStorage.removeItem('email')
        window.localStorage.removeItem('auth_token')
        window.localStorage.removeItem('name')
        window.alert('Login Failed')
      }
    })
  },

  signUp (formData) {
  $.ajax({
    type: 'POST',
    url: serverURL + 'signup',
    data: formData,
    success: function (response) {
      // then redirect
      browserHistory.push('/login')
    },
    error: function (xhr, ajaxOptions, thrownError) {
      // else output error
      console.log(xhr.status)
      console.log(thrownError)
      window.alert('Signup Failed')
    }
  })
},

  getAllBiz (callBack) {
    $.get(serverURL + 'users/expertise/Hustler')
      .done(function (data) {
        callBack(null, data)
        console.log(data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },
  getAllDev (callBack) {
    $.get(serverURL + 'users/expertise/Developer')
      .done(function (data) {
        callBack(null, data)
        console.log(data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },
  getAllEngineer (callBack) {
    $.get(serverURL + 'users/expertise/Engineer')
      .done(function (data) {
        callBack(null, data)
        console.log(data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },
  getAllDesigner (callBack) {
    $.get(serverURL + 'users/expertise/Designer')
      .done(function (data) {
        callBack(null, data)
        console.log(data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },

  getUserProfile (userId) {
    $.get(serverURL + 'users/' + userId)
      .done(function (data) {
        window.localStorage.username = data.user._id
        console.log(data.user._id)
        browserHistory.push('/profile')
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },

  getUserStats (userId, callBack) {
    $.get(serverURL + 'users/' + userId)
      .done(function (data) {
        callBack(null, data)
      }).fail(function (jqXHR, textStatus, errorThrown) {
        console.log('error', errorThrown)
      })
  },

  getMyStats (callBack) {
    $.ajax({
      type: 'GET',
      url: serverURL + 'user/profile',
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Auth-Token', window.localStorage['auth_token'])
        xhr.setRequestHeader('User-Email', window.localStorage['email'])

      },
      success: function (result) {
        console.log('result', result)
        callBack(null, result)
      }
    })
  },

  editMyStats (formData) {
    $.ajax({
      type: 'PUT',
      url: serverURL + 'user/profile',
      data: formData,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('Auth-Token', window.localStorage['auth_token'])
        xhr.setRequestHeader('User-Email', window.localStorage['email'])
      },
      success: function (result) {
        console.log('result', result)
        window.localStorage.name = result.name
        window.localStorage.email = result.email
        window.localStorage.auth_token = result.auth_token
        browserHistory.push('/User')
      },
      error: function (xhr, ajaxOptions, thrownError) {
       // else output error
       console.log(xhr.status)
       console.log(thrownError)
       window.alert('Profile failed to edit')
     }
    })
  }

}
