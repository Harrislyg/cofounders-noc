var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class userData extends React.Component {

  constructor () {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      expertise: '',
      workexp: '',
      skills: '',
      education: '',
      age: '',
      loation: '',
      partnerexpertise: '',
      partnerworkexp: '',
      partnerskills: ''

    }
  }

  getMe () {
    cofoundersApi.getMyStats((err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        name: data.userData.name,
        profileImg: data.userData.profileImg,
        email: data.userData.email,
        expertise: data.userData.expertise,
        workexp: data.userData.workexp,
        skills: data.userData.skills,
        education: data.userData.education,
        age: data.userData.age,
        location: data.userData.location,
        partnerexpertise: data.userData.partnerexpertise,
        partnerworkexp: data.userData.partnerworkexp,
        partnerskills: data.userData.partnerskills

      })
    })
  }

  componentWillMount () {
    this.getMe()
  }

  render () {
    return (
      <div className="grid-gap2">
        <div className="mui-panel">
          <div className="profpic"><img className="img-responsive" src={this.state.profileImg} height="180" width="180"/></div>
            <div className="floaton">
            <div  id="profiles-name">{this.state.name}</div>
            <div id="profiles-expertise" className="profiles-btm">{this.state.expertise}</div>
            <div className="iconscontainer profiles-btm">
                <span id="profiles-btm" className="glyphicon glyphicon-map-marker"></span>
            <div id="location" className="profiles-btm"> {this.state.location}</div><br/>
            </div>
          <div className="iconscontainer">
            <a href="www.facebook.com"><i className="fa fa-facebook-square fa-lg" aria-hidden="true"></i></a>
            <a href="www.twitter.com"><i className="fa fa-twitter-square fa-lg" aria-hidden="true"></i></a>
            <a href="www.linkedin.com"><i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
          </div>
          </div>
        </div>

        <div className="mui-panel" id="muipanel">
          <div>
            <div className="smallpanel">
            <p id="marginlefttop" className="whitefont">BACKGROUND</p>
            </div>
        </div><br/>
            <p id="marginleft" className="strong">Work Experience</p>
            <p id="marginleft">{this.state.workexp}</p><br/>
            <p id="marginleft" className="strong">Skills</p>
            <p id="marginleft">{this.state.skills}</p><br/>
            <p id="marginleft" className="strong">Education</p>
            <p id="marginleft">{this.state.education}</p><br/>
            </div>

            <div className="mui-panel" id="muipanel">
              <div>
                <div className="smallpanel">
                <p id="marginlefttop" className="whitefont">{this.state.name.toUpperCase()} IS LOOKING FOR A FOUNDER WHO</p>
                </div><br/>
              <p id="marginleft" className="strong">Has Expertise In</p>
                <p id="marginleft">{this.state.partnerexpertise}</p><br/>
                <p id="marginleft" className="strong">Work Industry</p>
                <p id="marginleft">{this.state.partnerworkexp}</p><br/>
                <p id="marginleft" className="strong">Skills</p>
                <p id="marginleft">{this.state.partnerskills}</p>
                </div>
                <br/>
            </div>
            <div>
            <Link id="editUserLink" to="/Edituser"><button className="mui-btn mui-btn--raised mui-btn--primary">Edit</button></Link>
            </div>
      </div>
    )
  }
}

module.exports = userData
