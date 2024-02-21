import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function App() {
  const airportList = useSelector((store) => store.airportList);
  console.log(airportList);
  const dispatch = useDispatch();
  const [plane, setPlane] = useState("");
  return (
    <div>
      <h1>Redux Airport</h1>
      <input
        placeholder="Airline Name"
        value={plane}
        onChange={(e) => setPlane(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "ADD_PLANE", payload: plane })}>
        Add Airline
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {airportList.map((item) => (
            <tr>
              <td> {item}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
