import React, { useState, useEffect } from 'react';
import './List.css';

const List = () => {
  // Mock data to simulate fetching from a database
  const [userData, setUserData] = useState({
    title: 'Mr.',
    firstName: 'John',
    lastName: 'Doe',
    position: 'Software Engineer',
    company: 'Tech Corp',
    businessArena: 'IT',
    employees: 100,
    street: '123 Main St',
    additionalInfo: 'Apt 4B',
    zipCode: '12345',
    place: 'Springfield',
    country: 'USA',
    code: '+1',
    phoneNumber: '555-555-5555',
    email: 'john.doe@example.com'
  });

  return (
    <div className="list-container">
      <div className="header">
        <input type="text" placeholder="Search..." className="search-bar" />
        <h2>User 1</h2>
        <a href="#" className="see-all-list">See all List ➡️</a>
      </div>
      <div className="content">
        <div className="section">
          <h3>General Information</h3>
          <div className="info">
            <p><strong>Title:</strong> {userData.title}</p>
            <p><strong>First Name:</strong> {userData.firstName}</p>
            <p><strong>Last Name:</strong> {userData.lastName}</p>
            <p><strong>Position:</strong> {userData.position}</p>
            <p><strong>Company:</strong> {userData.company}</p>
            <p><strong>Business Arena:</strong> {userData.businessArena}</p>
            <p><strong>Employees:</strong> {userData.employees}</p>
          </div>
        </div>
        <div className="section">
          <h3>Contact Information</h3>
          <div className="info">
            <p><strong>Street + Nr:</strong> {userData.street}</p>
            <p><strong>Additional Info:</strong> {userData.additionalInfo}</p>
            <p><strong>Zip Code:</strong> {userData.zipCode}</p>
            <p><strong>Place:</strong> {userData.place}</p>
            <p><strong>Country:</strong> {userData.country}</p>
            <p><strong>Code +:</strong> {userData.code}</p>
            <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
            <p><strong>Your Email:</strong> {userData.email}</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
}

export default List;