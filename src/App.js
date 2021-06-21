import './App.css';
import { useState } from 'react';
import states from "./states.json";
import granteeStates from "./grantees-states.json";
import granteeTribes from "./grantees-tribes.json";
import granteeTerritories from "./grantees-territories.json";
import SelectComponent from "./SelectComponent.js";
import Results from "./Results.js";

const data = [...granteeStates, ...granteeTribes, ...granteeTerritories];

function App() {
  const [ selectedState, setSelectedState ] = useState( '' );

  return (
    <div className="App">
      <label htmlFor="state-select">Filter by state or territory</label>
      <SelectComponent items={ states } 
                       selectedValue={ selectedState }
                       defaultText="select a state or territory"
                       id="state-select"
                       handler={ setSelectedState }/>
      <Results selectedState={ selectedState } data={ data }/>
    </div>
  );
}

export default App;
