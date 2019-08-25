import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [data, setData] = useState(null);

  const callBackendAPIRef = useRef();

  useEffect(() => {
    callBackendAPIRef.current = async () => {
      const response = await fetch('/test');
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }

      return body;
    };

    callBackendAPIRef.current().then(res => setData(res.express)).catch(err => console.log(err));
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
      </header>
    </div>
  );
}

export default App;
