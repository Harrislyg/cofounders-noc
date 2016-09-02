var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')
var imgUrl

class Signup extends React.Component {

  onsignUp (e) {
    e.preventDefault()
    var signUpform = document.querySelector('#signUpForm')
    var signUpData = serialize(signUpForm)
    console.log(signUpData)
    cofoundersApi.signUp(signUpData)
  }

  uploadFile (file, signedRequest, url) {
    const xhr = new XMLHttpRequest ()
    xhr.open('PUT', signedRequest)
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          this.refs.preview.src = url
          this.refs.avatarUrl.value = url
        }
        else{
          alert('Could not upload file.')
        }
      }
    }
    xhr.send(file)
  }
  /*
    Function to get the temporary signed request from the app.
    If request successful, continue to upload the file using this signed
    request.
  */
  getSignedRequest(file){
    const xhr = new XMLHttpRequest()
    xhr.open('GET', `http://localhost:3000/sign-s3?file-name=${file.name}&file-type=${file.type}`)
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4) {
        if(xhr.status === 200) {
          console.log('IMG URL: ', xhr.responseText)
          const response = JSON.parse(xhr.responseText)
          this.uploadFile(file, response.signedRequest, response.url)
        } else {
          alert('Could not get signed URL.')
        }
      }
    };
    xhr.send();
  }

  // getSignedRequest(file){
  //   $.get(`/sign-s3?file-name=${file.name}&file-type=${file.type}`)
  //   .done(function (data) {
  //     console.log('COCO: ', data)
  //
  //   })
  // }
  /*
   Function called when file input updated. If there is a file selected, then
   start upload procedure by asking for a signed request from the app.
  */
  initUpload () {
    console.log('init')
    const files = this.refs.fileInput.files
    console.log('File', files)
    const file = files[0]
    console.log(file)
    if(file == null) {
      return alert('No file selected.')
    }
    this.getSignedRequest(file)
  }
  /*
   Bind listeners when the page loads.
  */

  render () {
    var formStyle = {
      texTransform: 'lower'
    }



    return (
      <div>

        <p><br/></p>
        <div className="mui-container">
            <div className="mui-panel">

              <legend>Sign Up</legend>

          <label>Profile Picture</label>
          <input onChange={this.initUpload.bind(this)} type="file" ref="fileInput"/>
          <p><br/></p>
          <img id="preview" ref="preview" src="/images/default.png"/>
          <p><br/></p>



        <form id="signUpForm" style={formStyle} onSubmit={this.onsignUp.bind(this)}>

          <input type="hidden" ref="avatarUrl" name="profileImg" value="/images/default.png"/>

          <div className="mui-textfield">
            <input id="name" type="text" name="name" required/>
            <label>Name</label>
          </div>
        <div className="mui-textfield">
          <input id="user-email" type="text" name="email" required/>
          <label>Email</label>
        </div>
        <div className="mui-textfield">
          <input type="password" name="password" required/>
          <label>Password</label>
        </div>
        <button type="submit" className="mui-btn mui-btn--raised mui-btn--primary">Sign Up</button>
      </form>


      </div>
          </div>
      </div>

    )
  }
}

module.exports = Signup
