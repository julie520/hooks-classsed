import React, { useContext } from "react";
import PeopleContext from "../context/peopleContext";

const PeopleCount = () => {
  const context = useContext(PeopleContext);
  const peopleCount = context.people.length;
  return <h2 className="text-center mt-4">{peopleCount}</h2>;
};

export default PeopleCount;
