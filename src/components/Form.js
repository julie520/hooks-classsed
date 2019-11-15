import React, { useState, useContext, useMemo, useRef } from "react";
import PeopContext from "../context/peopleContext";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: ""
  });

  const context = useContext(PeopContext);

  const firstNameInput = useRef(null);

  const { firstName, lastName } = person;

  const onChange = event => {
    setPerson({ ...person, [event.target.name]: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    if (person.firstName.trim() === "" || person.lastName.trim() === "") return;
    context.addPerson(person);
    setPerson({
      firstName: "",
      lastName: ""
    });
    firstNameInput.current.focus();
  };

  const printNumberOfPeople = () =>
    console.log(`Number of people: ${context.people.length}`);

  useMemo(() => printNumberOfPeople(), [printNumberOfPeople]);

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
            ref={firstNameInput}
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
