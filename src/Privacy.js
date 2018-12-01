import React, { Component } from "react";

import Header from "./Header.js";

class Privacy extends Component {
  render() {
    return (
      <div>
        <Header
          title="Privacy"
          user="Nicholas Spain"
          auth
          email="nicholas.spain96@gmail.com"
        />
        <div style={{ paddingTop: 50, paddingLeft: 100 }}>
          <h5>What information do we collect?</h5>
          <p>
            The only data collect is the cub's name, cub's signature, parent's
            signature (for sign in and sign out) and the sign in and out times.
            This is securely stored in a Google sheet only accessible by the Cub
            Leaders.
          </p>
          <h5>How do we use your information?</h5>
          <p>
            This information is used to ensure that we know who is picking up
            the cubs and to keep track of attendance.
          </p>
          <h5>What information do you share?</h5>
          <p>None of the information collected is shared.</p>
        </div>
      </div>
    );
  }
}

export default Privacy;
