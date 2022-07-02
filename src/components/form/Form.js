import React from "react";
import "./Form.css";

function Form() {
  //function to send email//

  return (
    <div className='form-container' id='contact'>
      <div className='header'>
        
        <h2>CONTACT</h2>
        <hr></hr>
      </div>

      <div className='form-wrapper'>
        <div className='form-text'>
          <p>
            We will be able to evaluate your project or repair needs, discuss a
            solution , and provide a quote to help meet your budget.
          </p>
          <br></br>
          <p>
            To request a Free Estimate, please complete the following form and
            we will get back to you promptly.
          </p>
        </div>
        <form className='form-elements'>
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='First Name'
          />
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='Last Name'
          />
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='Company Name'
          />
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='Job Site Address'
          />
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='City'
          />
          <input
            type='text'
            name='user_name'
            className='form-input'
            placeholder='Zip Code'
          />
          <input
            type='email'
            name='user_name'
            className='form-input'
            placeholder='Email Name'
          />

          <textarea
            name='message'
            className='form-input'
            rows={4}
            placeholder='Message'
          />
          <input type='submit' name='message' className='form-submit' />
        </form>
      </div>
    </div>
  );
}

export default Form;
