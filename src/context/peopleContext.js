import { createContext } from "react";

const PeopleContext = createContext({
  people: [],
  addPerson: person => {}
});

export default PeopleContext;
