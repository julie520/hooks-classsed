import React, { useState } from "react";

const Form = ({ addPerson }) => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: ""
  });

  const { firstName, lastName } = person;

  const onChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;
    addPerson(person);
    setPerson({
      firstName: "",
      lastName: ""
    });
  };

  return (
    <div className="col">
      <h2>Add a person</h2>
      <hr />
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add person
        </button>
      </form>
    </div>
  );
};

export default Form;
