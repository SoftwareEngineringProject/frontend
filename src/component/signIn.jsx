import React from 'react';
import './signIn.css';

function SignIn() {
  return (
    <div className="signIn-container">
      <div className="signIn-form-container">
        <div className="signIn-form-header">
          <h4>Sign In</h4>
        </div>

        <div className="mb-1">
          <label for="formGroupExampleInput" className="form-label signIn-form-label">
            User Name
          </label>
          <input type="text" className="form-control signIn-form-input" placeholder="Enter the User Name" />
        </div>
        <div class="mb-1">
          <label for="formGroupExampleInput2" className="form-label signIn-form-label">
            Password
          </label>
          <input type="text" className="form-control signIn-form-input" placeholder="Enter the Password" />
        </div>
        <div className="signIn-form-button-container">
          <button type="button" className="btn btn-outline-primary signIn-form-button">
            Sign UP
          </button>
          <button type="button" className="btn btn-outline-primary signIn-form-button">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
