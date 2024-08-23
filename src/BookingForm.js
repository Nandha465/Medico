import React, { useState } from "react";
import './BookingForm.css';
import { Link } from "react-router-dom";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    sex: "",
    service: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    console.log(formData);
    // Perform form submission tasks here
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      age: "",
      sex: "",
      service: ""
    });
  };

  return (
    <div className="booking-form-wrapper">
      <h2>Book Your Appointment</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>
        <div className="form-group">
          <label>Sex:</label>
          <div className="radio-group">
            <input
              type="radio"
              id="male"
              name="sex"
              value="Male"
              checked={formData.sex === "Male"}
              onChange={handleChange}
              required
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="sex"
              value="Female"
              checked={formData.sex === "Female"}
              onChange={handleChange}
              required
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Services:</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Doctor Consultation">Doctor Consultation</option>
            <option value="Medical Care">Medical Care</option>
            <option value="Vaccination">Vaccination</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Mother & Baby Care">Mother & Baby Care</option>
            <option value="Yoga & Wellness">Yoga & Wellness</option>
            <option value="Medical Dressing">Medical Dressing</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit" className="submit-btn">Submit</button>
          <Link to="/"><button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button></Link>
        </div>
      </form>
    </div>
  );
}
