var React = require('react')
var {Link, IndexLink} = require('react-router')

class Rolenav extends React.Component {
  constructor (props) {
    super(props)
  }



  render () {

    if(!this.props.person[0]) {
      var personNav = {expertise: ''}
      console.log(personNav)
    } else {
      var personNav = this.props.person[0]
      console.log('Success', personNav)
    }

    let navRoles = {
      navOne: '',
      navTwo: '',
      navThree: ''
    }

    var roles = ['Hustler', 'Developer', 'Engineer', 'Designer']

    for (var x in roles) {
      if (personNav.expertise === roles[x]) {
        roles.splice(x, 1)
        console.log(roles)
        navRoles = {
          navOne: roles[0],
          navTwo: roles[1],
          navThree: roles[2]
        }
      }


    }

    return (
      <div className="flexContainer">
        <div id="btmNavOne" className="btmNavOneStyle" ><span><Link className="btmNavOneStyle" to={"/" + personNav.expertise} >{personNav.expertise}</Link></span></div>
        <div id="btmNavTwo" className="btmNavRemainderStyle"><Link className="btmNavRemainderStyle" to={"/" + navRoles.navOne}><span>{navRoles.navOne}</span></Link></div>
        <div id="btmNavThree" className="btmNavRemainderStyle"><Link className="btmNavRemainderStyle" to={"/" + navRoles.navTwo}><span>{navRoles.navTwo}</span></Link></div>
        <div id="btmNavFour" className="btmNavRemainderStyle"><Link className="btmNavRemainderStyle" to={"/" + navRoles.navThree}><span>{navRoles.navThree}</span></Link></div>

      </div>
    )
  }
}

module.exports = Rolenav
