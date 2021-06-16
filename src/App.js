import './App.css';
import { useState } from 'react';
import states from "./states.json";
import stateGrantees from "./state-grantees.json";
import SelectComponent from "./SelectComponent.js";
import Results from "./Results.js";

function App() {
  const [ selectedState, setSelectedState ] = useState( '' );
  return (
    <div className="App">
      <label htmlFor="state-select">Filter by state</label>
      <SelectComponent items={ states } 
                       selectedValue={ selectedState }
                       defaultText="select a state"
                       id="state-select"
                       handler={ setSelectedState }/>
      <Results selectedState={ selectedState } data={ stateGrantees }/>
    </div>
  );
}

export default App;
