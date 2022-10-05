import React from 'react';
import logo from './logo.svg';
import "./App.css";


function App(): JSX.Element {
  return (
    <>
    <h1 className="App"> The Pulpit Rock</h1>
    <br />
    <div className="container text-center">
      <div className="row align-items-start">
        <div className="col">
          Dong 1
        </div>
        <div className="col">
          One of three columns
        </div>
        <div className="col">
          WHAT?
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          One of three columns
        </div>
        <div className="col">
          One of three columns
        </div>
        <div className="col">
          WHERE?
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col">
          One of three columns
        </div>
        <div className="col">
          One of three columns
        </div>
        <div className="col">
          WHEN?
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
