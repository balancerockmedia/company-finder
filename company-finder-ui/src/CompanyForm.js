import React, { useState } from "react";
import axios from "axios";

export default function CompanyForm(props) {
  const [query, setQuery] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    const results = await axios.get(
      `http://company-finder-api:3001/lookup?q=${query}`
    );
    props.onSubmit(results.data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="q">Enter a full or partial company name:</label>
        <input
          type="text"
          id="q"
          className="form-control"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
