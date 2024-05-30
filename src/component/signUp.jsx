import React from 'react';
import './signUp.css';

function SignUp() {
  return (
    <section class="vh-100 gradient-custom">
      <div class="card-body p-4 p-md-5 register-form-container">
        <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
        <form>
          <div class="row register-form-row">
            <div class="col-md-6 mb-4">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="firstName">
                  First Name
                </label>
                <input type="text" id="firstName" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="lastName">
                  Last Name
                </label>
                <input type="text" id="lastName" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 d-flex align-items-center">
              <div data-mdb-input-init class="form-outline datepicker w-100 register-form-input-section">
                <label for="birthdayDate" class="form-label">
                  Birthday
                </label>
                <input type="text" class="form-control form-control-sm register-form-input" id="birthdayDate" />
              </div>
            </div>
            <div class="col-md-6 mb-4">
              <h6 class="mb-2 pb-1 register-form-checkbox-header">Gender: </h6>

              <div class="form-check form-check-inline">
                <label class="form-check-label register-form-gender-input-checkbox" for="femaleGender">
                  Female
                </label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender" value="option1" />
              </div>

              <div class="form-check form-check-inline">
                <label class="form-check-label register-form-gender-input-checkbox" for="maleGender">
                  Male
                </label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender" value="option2" />
              </div>

              <div class="form-check form-check-inline">
                <label class="form-check-label  register-form-gender-input-checkbox" for="otherGender">
                  Other
                </label>
                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender" value="option3" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="emailAddress">
                  Email
                </label>
                <input type="email" id="emailAddress" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="phoneNumber">
                  Phone Number
                </label>
                <input type="tel" id="phoneNumber" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="FPassword">
                  Password
                </label>
                <input type="password" id="FPassword" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
            <div class="col-md-6 mb-4 pb-2">
              <div data-mdb-input-init class="form-outline register-form-input-section">
                <label class="form-label" for="SPassword">
                  Confirm Password
                </label>
                <input type="password" id="SPassword" class="form-control form-control-sm register-form-input" />
              </div>
            </div>
          </div>

          <div class="mt-4 pt-2">
            <input data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-lg signIn-form-button" type="submit" value="SignUp" />
          </div>
        </form>
      </div>
    </section>
  );
}
export default SignUp;
