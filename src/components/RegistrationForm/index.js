// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({showFirstNameError: true})
    } else {
      this.setState({showFirstNameError: false})
    }
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({showLastNameError: true})
    } else {
      this.setState({showLastNameError: false})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const isValidateFirstName = firstName !== ''
    const isValidateLastName = lastName !== ''
    if (isValidateFirstName && isValidateLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidateFirstName,
        showLastNameError: !isValidateLastName,
        isFormSubmitted: false,
      })
    }
  }

  onClickAnotherResponse = () => {
    this.setState(prevState => ({
      firstName: '',
      lastName: '',
      showFirstNameError: false,
      showLastNameError: false,
      isFormSubmitted: !prevState.isFormSubmitted,
    }))
  }

  render() {
    const {
      firstName,
      lastName,
      showFirstNameError,
      showLastNameError,
      isFormSubmitted,
    } = this.state

    const firstNameInputClassName = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    const lastNameInputClassName = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        <div className="card-container">
          {isFormSubmitted ? (
            <div className="success-submit-container">
              <img
                className="success-image"
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
                alt="success"
              />
              <p className="success-message">Submitted Successfully</p>
              <button
                type="submit"
                className="submit-another-response-btn"
                onClick={this.onClickAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          ) : (
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <label className="input-label" htmlFor="firstName">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  className={firstNameInputClassName}
                  id="firstName"
                  placeholder="First Name"
                  value={firstName}
                  onChange={this.onChangeFirstName}
                  onBlur={this.onBlurFirstName}
                />
                {showFirstNameError && (
                  <p className="error-message">Required</p>
                )}
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="lastName">
                  LAST NAME
                </label>
                <input
                  type="text"
                  className={lastNameInputClassName}
                  placeholder="Last Name"
                  id="lastName"
                  value={lastName}
                  onChange={this.onChangeLastName}
                  onBlur={this.onBlurLastName}
                />
                {showLastNameError && <p className="error-message">Required</p>}
              </div>
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
