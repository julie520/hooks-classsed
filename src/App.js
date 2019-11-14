import React,{useState} from "react";
import Form from './components/Form'
import People from "./components/People";

const App = () => {
  const [people, setPeople] = useState([
    {
      firstName: "John",
      lastName: "Doe"
    },
    {
      firstName: "Jane",
      lastName: "Doe"
    }
  ]);

  const addPerson = (person) => {
    setPeople([...people, person]);
  }
  return (
    <div className="container">
      <div className="row">
        <Form addPerson={addPerson} />
        <People people={people} />
      </div>
    </div>
  );
};

export default App;
