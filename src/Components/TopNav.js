import React from "react";
import burger from "../burger.png";

export default function TopNav() {
  return (
    <div class="app-bar">
      <div className="branding">
        <img src={burger} width={45} height={45} />
        <h4>Aamkhana</h4>
      </div>
    </div>
  );
}
