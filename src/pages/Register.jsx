import React, { useState } from "react";
import "./style.css";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    fname: "",
    lname: "",
    mobile: "",
    email: "",
    gender: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await fetch("http://127.0.0.4:4000/user/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status == 201) {
        alert("Registered succesfully👍");
      } else {
        alert("Registeration failed! try again");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="fname"
          placeholder="first name"
          value={formData.fname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lname"
          placeholder="last name"
          value={formData.lname}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        <input
          type="number"
          name="mobile"
          placeholder="moblie No."
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <div className="gender-radio">
          Gender:
          <div className="gender male">
            <label htmlFor="male">Male</label>
            <input
              id="male"
              className="gender-gender"
              type="radio"
              name="gender"
              placeholder="Username"
              value="male"
              onChange={handleChange}
              required
            />
          </div>
          <div className="gender female">
            <label htmlFor="female">Female</label>
            <input
              id="female"
              className="gender-gender"
              type="radio"
              name="gender"
              placeholder="Username"
              value="female"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
