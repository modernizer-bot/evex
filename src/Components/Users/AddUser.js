import React, { useState, useCallback } from "react";
import { connect } from "react-redux";
import { saveUser } from "../../Redux/actions/userActions.js";
import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUpPage = (props) => {
  const [user, setUser] = useState({
    name: "",
    lastName: "",
  });

  const handleChange = (event) => {
    event.stopPropagation();
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  //   const handleNameChange = useCallback((event) => {
  //     setUser({ ...user, name: event.target.value });
  //   });

  //   const handleLastNameChange = useCallback((event) => {
  //     setUser({ ...user, lastName: event.target.value });
  //   });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.saveUser(user);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up!</h3>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        value={user.lastName}
      />
      <button type="submit">Submit</button>
    </form>
  );
};
SignUpPage.propTypes = {
  saveUser: PropTypes.func.isRequired,
};
export default connect(null, { saveUser })(SignUpPage);
