var React = require('react')
var {Link, IndexLink} = require('react-router')
var cofoundersApi = require('cofoundersApi')

class Profiles extends React.Component {

  onUserProfile () {

    console.log(this.props.profile._id)
    cofoundersApi.getUserProfile (this.props.profile._id)

  }

  render () {
    return (
      <div id="hoverCursor" onClick={this.onUserProfile.bind(this)}>
        <div id="grid-gap" className="mui-col-md-4">
          <div className="profile-grid mui-panel">
          <div id="profiles-picture"><img className="img-responsive" src={this.props.profile.profileImg} height="120" width="120"/></div>
          <div id="profiles-right">
            <p id="profiles-name">{this.props.profile.name}</p>
            <p id="profiles-expertise">{this.props.profile.expertise}</p>
            <p id="profiles-location"><span className="glyphicon glyphicon-map-marker"></span>&nbsp;{this.props.profile.location}</p>
          </div>
          <div id="profiles-bottom-left">
            <div id="profiles-bottom-inner-left">

              <p id="float-right profiles-partnerexpertise">LOOKING FOR: </p>
              <p id="profiles-partnerworkexp">EXPERIENCE: </p>
              <p id="profiles-partnerskills">SKILLS: </p>
            </div>
          </div>
          <div id="profiles-bottom-right">
            <p id="profiles-partnerexpertise">{this.props.profile.partnerexpertise}</p>
            <p id="profiles-partnerworkexp">{this.props.profile.partnerworkexp}</p>
            <p id="profiles-partnerskills">{this.props.profile.partnerskills}</p>
          </div>

          </div>
        </div>

      </div>

    )
  }
}

module.exports = Profiles
