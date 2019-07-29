import React, { useState } from "react";
import CompanyForm from "./CompanyForm";
import "./App.css";

function App() {
  const [results, setResults] = useState("");

  const listItems = results
    ? results.map(result => (
        <li key={result.name}>
          {result.name} - {result.domain}
        </li>
      ))
    : null;

  return (
    <div className="container">
      <h2>Company Finder</h2>
      <div className="row">
        <div className="col-sm">
          <CompanyForm onSubmit={setResults} />
        </div>

        <div className="col-sm">
          <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
