import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import { CONTACT_INFO, GENERAL_INFO } from './../urls.js';
console.log(GENERAL_INFO);

function Register() {

  const [formData1, setFormData1] = useState({
    title: '',
    firstName: '',
    lastName: '',
    position: '',
    company: '',
    businessArena: '',
    employees: ''
  });

  const [formData2, setFormData2] = useState({
    street: '',
    additionalInfo: '',
    zipCode: '',
    place: '',
    country: '',
    phoneCode: '',
    phoneNumber: '',
    email: '',
    terms: false
  });

  const [response1, setResponse1] = useState(null);
  const [response2, setResponse2] = useState(null);

  const handleChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange2 = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData2({
      ...formData2,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(GENERAL_INFO, formData1);
      setResponse1(response.data.message);
      alert(response.data.message);
    } catch (error) {
      setResponse1('Failed to submit form');
      alert('Failed to submit form');
    }
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(CONTACT_INFO, formData2);
      setResponse2(response.data.message);
      alert(response.data.message);
    } catch (error) {
      setResponse2('Failed to submit form');
    }
  };

  const handleReset = () => {
    setFormData1({
      title: '',
      firstName: '',
      lastName: '',
      position: '',
      company: '',
      businessArena: '',
      employees: ''
    });
    setFormData2({
      street: '',
      additionalInfo: '',
      zipCode: '',
      place: '',
      country: '',
      phoneCode: '',
      phoneNumber: '',
      email: '',
      terms: false
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubmit1();
    handleSubmit2();
  };

  return (
    <div className="outer-container">
              <h3 style={{ marginTop:"50px",position:"relative", left:"5cm" }}>Help Us to register basic company Information</h3>
      <div className="container">
        <form className="general-info">
          <div>
            <h2>General Information</h2>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              value={formData1.title}
              onChange={handleChange1}
              maxLength="50"
              minLength="5"
              required
              autoFocus
            />
            <div style={{ display: 'flex' }}>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                value={formData1.firstName}
                onChange={handleChange1}
                maxLength="50"
                minLength="1"
                required
              /> &nbsp;&nbsp;&nbsp;&nbsp;
              <div style={{ width: '10px' }}></div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                value={formData1.lastName}
                onChange={handleChange1}
                maxLength="50"
                minLength="1"
                required
              />
            </div>
            <input
              type="text"
              id="position"
              name="position"
              placeholder="Position"
              value={formData1.position}
              onChange={handleChange1}
              maxLength="50"
              minLength="1"
              required
            />
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Company"
              value={formData1.company}
              onChange={handleChange1}
              maxLength="30"
              minLength="1"
              required
            />
            <input
              type="text"
              id="businessArena"
              name="businessArena"
              placeholder="Business Arena"
              value={formData1.businessArena}
              onChange={handleChange1}
              maxLength="30"
              minLength="1"
              required
            />
            <input
              type="number"
              id="employees"
              name="employees"
              placeholder="Employees"
              value={formData1.employees}
              onChange={handleChange1}
              max="999999"
              min="1"
              required
            />
            <br />
            <br />
          </div>
        </form>

        <form className='contact-info'>
          <div>
            <h2>Contact Information</h2>
            <input type="text"
              id="street"
              name="street"
              placeholder="Street + Nr"
              value={formData2.street}
              onChange={handleChange2}
              maxLength="20"
              minLength="1"
              required
            />
            <input type="text"
              id="additional-info"
              name="additionalInfo"
              placeholder="Additional Information"
              value={formData2.additionalInfo}
              onChange={handleChange2}
              maxLength="100"
              minLength="1"
              required
            />
            <div style={{ display: 'flex' }}>
              <input type="number"
                id="zip-code"
                name="zipCode"
                placeholder="Zip Code"
                value={formData2.zipCode}
                onChange={handleChange2}
                max="9999999999"
                min="1"
                required
              />
              <div style={{ width: '10px' }}></div>&nbsp;&nbsp;&nbsp;&nbsp;
              <input type="text"
                id="place"
                name="place"
                placeholder="Place"
                value={formData2.place}
                onChange={handleChange2}
                maxLength="50"
                minLength="1"
                required
              />
            </div>
            <input type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={formData2.country}
              onChange={handleChange2}
              maxLength="50"
              minLength="1"
              required
            />
            <input type="text"
              id="phone-code"
              name="phoneCode"
              placeholder="Code +"
              value={formData2.phoneCode}
              onChange={handleChange2}
              maxLength="6"
              minLength="1"
              required
            />
            <input type="text"
              id="phone-number"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData2.phoneNumber}
              onChange={handleChange2}
              maxLength="10"
              minLength="1"
              required
            />
            <input type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              value={formData2.email}
              onChange={handleChange2}
              maxLength="50"
              minLength="1"
              required
            />
            <br />
            <br />
            <div className="terms">
              <input type="checkbox"
                id="terms"
                name="terms"
                checked={formData2.terms}
                onChange={handleChange2}
                style={{ width: '20px', height: '20px' }}
                required
              />
              <label htmlFor="terms">
                I do accept the <a href="#">terms and conditions</a> of your site.
              </label>
            </div>
            <span>
               <button type="submit" onClick={handleSubmit}>Submit All</button>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <button type="reset" onClick={handleReset}>Clear All</button>
             </span>
          </div>
        </form>
        <br />
        {response1 && <p>{response1}</p>}
        {response2 && <p>{response2}</p>}
      </div>
    </div>
  );
};

export default Register;