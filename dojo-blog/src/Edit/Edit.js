import React from 'react';
import './Edit.css';

const Gen = ({ userData, onClose }) =>{
    return(
        <>
        <section className='form1-sec'>
            <h2>General Information</h2>
            <form className='form1'>
              <div className="form-group">
                <label>Title</label>
                <input type="text" defaultValue={userData.title} />
              </div>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" defaultValue={userData.firstName} />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" defaultValue={userData.lastName} />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input type="text" defaultValue={userData.position} />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" defaultValue={userData.company} />
              </div>
              <div className="form-group">
                <label>Business Arena</label>
                <input type="text" defaultValue={userData.businessArena} />
              </div>
              <div className="form-group">
                <label>Employees</label>
                <input type="number" defaultValue={userData.employees} />
              </div>
              <button type="submit" className="save-button">Save</button>
            </form>
        </section>
        </>
    );
}

const Cont = ({ userData }) => {
    return (
      <>
        <section className='form2-sec'>
            <h2>Contact Information</h2>
            <form className='form2'>
              <div className="form-group">
                <label>Street + Nr</label>
                <input type="text" defaultValue={userData.street} />
              </div>
              <div className="form-group">
                <label>Additional Info</label>
                <input type="text" defaultValue={userData.additionalInfo} />
              </div>
              <div className="form-group">
                <label>Zip Code</label>
                <input type="text" defaultValue={userData.zipCode} />
              </div>
              <div className="form-group">
                <label>Place</label>
                <input type="text" defaultValue={userData.place} />
              </div>
              <div className="form-group">
                <label>Country</label>
                <input type="text" defaultValue={userData.country} />
              </div>
              <div className="form-group">
                <label>Code +</label>
                <input type="text" defaultValue={userData.code} />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" defaultValue={userData.phoneNumber} />
              </div>
              <div className="form-group">
                <label>Your Email</label>
                <input type="email" defaultValue={userData.email} />
              </div>
              <button type="submit" className="save-button">Save</button>
            </form>
        </section>
      </>
    );
  };

const Edit = ({ userData, onClose }) => {
  return (
    <div className="edit-overlay">
      <div className="edit-container">
        <button className="close-button" onClick={onClose}>X</button>
        <div className="form-div">
            <Cont userData/>
        </div>
      </div>
    </div>
  );
};

export default Edit;