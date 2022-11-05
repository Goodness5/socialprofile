import React, {Component} from 'react';

export const FormErrors = ({formErrors}) =>

  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{fieldName} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

class val extends Component{ 
    constructor (props) {
      super(props);
      this.state = {
        email: '',
        message: '',
        formErrors: {email: '', message: ''},
        emailValid: false,
        messageValid: false,
        formValid: false
      }
    }
handleUserInput (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                  () => { this.validateField(name, value) });
  }
  
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let textValid = this.state.textValid;
    let messageValid = this.state.messageValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'text':
        textValid = value.length >= 6;
        fieldValidationErrors.password = textValid ? '': ' is too short';
        break;
        case 'message':
            messageValid = value.length > 0;
            fieldValidationErrors.message = messageValid ? '': 'please type a message'
            break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    messageValid: messageValid
                  }, this.validateForm);
  }
  
  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.messageValid});
  }
}
export default val