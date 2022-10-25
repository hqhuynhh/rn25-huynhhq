import React from "react";
import {Link} from 'react-router-dom'

function Navi() {
  return (
    <div className="card text-center">
      <div className="card-header">
        <ul className="nav nav-pills card-header-pills">
          <li className="nav-item">
            <Link className="nav-link" to={'/list'}>List</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/form'}>Form</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to={'/detail'}>Detail</Link>
          </li>
        </ul>
      </div>
     
    </div>
  );
}

export default Navi;
