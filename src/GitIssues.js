import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";

const GitIssues = () => {
  return (
    <div className="gitIssues">
      <h3>Git Issues</h3>
      <div className="gitIssuesBody">
        <div className="bodyItem">Cannot connect to server</div>
        <div className="bodyItem">Image does not fit in container</div>
        <div className="bodyItem">
          Microsoft edge does not work for the aplication
        </div>
        <div className="bodyItem">Weather.js does not work correctly</div>
        <div className="bodyItem">Error 404 when changing pages</div>
      </div>
    </div>
  );
};
/* */
export default GitIssues;
