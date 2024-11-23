import React, {Component} from 'react'
import './index.css'

class AppItem extends Component {
  state = {isEditing: true, text: ''}

  handleInputChange = event => {
    this.setState({text: event.target.value})
  }

  toggleEditMode = () => {
    this.setState(prevState => ({isEditing: !prevState.isEditing}))
  }

  render() {
    const {isEditing, text} = this.state

    return (
      <div className="main-con">
        <div className="c-con">
          <h1 className="header">Editable Text Input</h1>
          <div className="inp-con">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={text}
                  className="inp"
                  onChange={this.handleInputChange}
                />
                <button
                  className="but"
                  type="button"
                  onClick={this.toggleEditMode}
                >
                  Save
                </button>
              </>
            ) : (
              <div className="p-con">
                <p className="p">{text}</p>
                <button
                  className="but"
                  type="button"
                  onClick={this.toggleEditMode}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default AppItem
