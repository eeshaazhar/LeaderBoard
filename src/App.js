import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'
import gold from './gold.png'
import silver from './silver.png'
import bronze from './bronze.png'
function App() {
  var i=0;
  const [infos, setinfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/getinfo')
      .then(infos => setinfo(infos.data))
      .catch(error => console.log(error));
  }, []);
  

  return (
    <div>
      

      <table>
          <thead>
              <tr>
                  <th>Sr.</th>
                  <th>Team Name</th>
                  <th>Games Played</th>
                  <th>Score</th>
              </tr>
          </thead>
          <tbody>
                {infos && infos.map(info => {
                  ++i
                  return(
                  <tr>
                    
                    {i === 1 && <td><img src={gold}  className="imag"/></td>}
                    {i === 2 && <td><img src={silver}  className="imag"/></td>}
                    {i === 3 && <td><img src={bronze} className="imag" /></td>}
                    {i > 3 && <td className="text">{i}</td>}
                    <td><img src={info.Picture} className="image" />{info.Team}</td>
                    <td>{info.Games}</td>
                    <td>+{info.Score}</td>
                  </tr>
                  )
})}
              
              
          </tbody>
      </table>
    </div>
  );
}

export default App;