var React = require('react')
var Profiles = require('Profiles')
var Banner = require('Banner')
var Rolenav = require('Rolenav')

var cofoundersApi = require('cofoundersApi')

class Biz extends React.Component {
  constructor () {
    super()
    this.state = {
      profiles: []
    }
  }

  getBiz () {
    cofoundersApi.getAllBiz((err, data) => {
      if (err) {
        console.log(err)
      }
      console.log('callback', data)
      this.setState({
        profiles: data.usersArray
      })
    })
  }

  componentWillMount () {
    this.getBiz()
  }

  render () {
    // console.log('Hey', this.state.profiles)
    // var person = this.state.profiles
    // console.log('Person', person[0])
    // var person = this.state.profiles
    // console.log('Person', person)
    return (
      <div>
        <Banner />
        <Rolenav person={this.state.profiles} />
        <div>
          {this.state.profiles.map((profile, i) => (<Profiles profile={profile} index={i} key={i}/>))}
        </div>
      </div>

    )
  }
}

module.exports = Biz
