import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";

const People = () => {
  const context = useContext(PeopleContext);
  const people = context.people;
  return (
    <div className="col">
      <h2>People:</h2>
      <hr />
      {people.map((person, index) => (
        <div key={index}>
          <p>
            {person.firstName} {person.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
