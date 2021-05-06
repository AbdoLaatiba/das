import React, { useState } from "react";
import "./client.css";

export default function Modal({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button onClick={() => setOpen(true)}>{text}</button>
      <div id="myModal" className={open ? "modal active" : "modal"}>
        <div class="modal-content">
          <span class="close" onClick={() => setOpen(false)}>
            &times;
          </span>
          <div className="add-admin">
            <form action="">
              <input type="text" value={text} readOnly />
              <input type="date" />
              <input type="submit" />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
