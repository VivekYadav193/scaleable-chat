"use client";
import { useState } from "react";
import { useSocket } from "../context/SocketProvider";
import classes from "./page.module.css";

export default function Page() {
  const { sendMessage, messages } = useSocket();
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div
      className={
        darkMode
          ? `${classes["chat-container"]} ${classes["dark"]}`
          : classes["chat-container"]
      }
    >
      <div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          className={classes["chat-input"]}
          placeholder="Message..."
        />
        {/* Wrap buttons in a div */}

        <div className={classes["button-container"]}>
          <button
            onClick={(e) => sendMessage(message)}
            className={classes["button"]}
          >
            Send
          </button>
          <button onClick={toggleDarkMode} className={classes["button"]}>
            Dark Mode
          </button>
        </div>
        <br />
      </div>

      <ul className={classes["message-list"]}>
        {messages.map((e, index) => (
          <li key={index} className={classes["message-item"]}>
            {e}
          </li>
        ))}
      </ul>
    
    </div>
  );
}
