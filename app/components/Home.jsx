var React = require('react')
var {Link, IndexLink} = require('react-router')

class Home extends React.Component {

  render () {
    return (
      <div>
        <div id="panel-image"></div>
        <div>
          <div id="home-top" className="mui--text-dark-secondary mui--text-display1 home-header">Connect with people</div>
            <div className="mui--text-dark-secondary mui--text-subhead home-header">Build an extraordinary team</div>
        </div>
        <div className="home-div mui-container-fluid">
            <div className="mui-row">
              <Link className="home-links" to="/Hustler"  activeStyle={{fontWeight: 'bold'}}><div id="home-one" className="mui-col-md-6 mui-link mui-panel">Hustlers</div></Link>
              <Link className="home-links" to="/Developer"  activeStyle={{fontWeight: 'bold'}}><div id="home-two" className="mui-col-md-6 mui-link mui-panel">Developers</div></Link>
            </div>
            <div className="mui-row">
              <Link className="home-links" to="/Engineer"  activeStyle={{fontWeight: 'bold'}}><div id="home-three" className="mui-col-md-6 mui-link mui-panel">Engineers</div></Link>
              <Link className="home-links" to="/Designer"  activeStyle={{fontWeight: 'bold'}}><div id="home-four" className="mui-col-md-6 mui-link mui-panel">Designers</div></Link>
            </div>
        </div>
      </div>


    )
  }
}

module.exports = Home
