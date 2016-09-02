var React = require('react')
var cofoundersApi = require('cofoundersApi')
var serialize = require('form-serialize')

class Edituser extends React.Component {

    onsignUp(e) {
        e.preventDefault()
        var editForm = document.querySelector('#editForm')
        var editData = serialize(editForm)
        console.log(editData)
        cofoundersApi.editMyStats(editData)
    }
    render() {
        var formStyle = {
            texTransform: 'lower'
        }
        return (
            <div>
                <p><br/></p>
                  <p><br/></p>


                <div className="mui-container">
                    <div className="mui-panel">
                        <form id="editForm" onSubmit={this.onsignUp.bind(this)}>
                            <legend>Edit Profile</legend>
                            <div className="mui-select">
                                <select name="expertise">
                                    <option></option>
                                    <option>Hustler</option>
                                    <option>Developer</option>
                                    <option>Engineer</option>
                                    <option>Designer</option>
                                </select>
                                <label>Expertise</label>
                            </div>
                            <div className="mui-textfield">
                                <textarea name="workexp" required></textarea>
                                <label>Work Experience</label>
                            </div>
                            <div className="mui-select">
                                <select name="skills">
                                  <option></option>
                                  <option>Web Development</option>
                                  <option>App Development</option>
                                  <option>UI/UX</option>
                                  <option>Graphic Design</option>
                                  <option>Hardware</option>
                                  <option>Marketing</option>
                                  <option>Product Management</option>
                                  <option>Sales</option>
                                </select>
                                <label>Skills</label>
                            </div>
                            <div className="mui-textfield">
                                <input type="text" name="education" required/>
                                <label>Education</label>
                            </div>
                            <div className="mui-select">
                                <select name="age">
                                    <option></option>
                                    <option>Below 20</option>
                                    <option>20-30</option>
                                    <option>31-50</option>
                                    <option>Above 50</option>
                                </select>
                                <label>Age Group</label>
                            </div>
                            <div className="mui-textfield">
                                <input type="text" name="location" required/>
                                <label>Location</label>
                            </div>

                            <div className="mui-select">
                                <select name="partnerexpertise">
                                    <option></option>
                                    <option>Hustler</option>
                                    <option>Developer</option>
                                    <option>Engineer</option>
                                    <option>Designer</option>
                                </select>
                                <label>Partner Expertise</label>
                            </div>
                            <div className="mui-textfield">
                                <textarea name="partnerworkexp" required></textarea>
                                <label>Partner Experience</label>
                            </div>

                            <div className="mui-select">
                                <select name="partnerskills">
                                    <option></option>
                                    <option>Web Development</option>
                                    <option>App Development</option>
                                    <option>UI/UX</option>
                                    <option>Graphic Design</option>
                                    <option>Hardware</option>
                                    <option>Marketing</option>
                                    <option>Product Management</option>
                                    <option>Sales</option>
                                </select>
                                <label>Partner Skills</label>
                            </div>
                            <button type="submit" name="commit" value="Update" className="mui-btn mui-btn--raised mui-btn--primary">Update</button>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

module.exports = Edituser
