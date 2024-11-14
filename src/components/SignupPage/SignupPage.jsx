import React from "react";
import { useState } from "react";
import { styles } from "./SignupPageStyle";
let registeredUsers = {};

let currentId = 1;

const createUser = (name, email, password) => {
  const newUser = {
    id: currentId++,
    name,
    email,
    password,
  };
  registeredUsers.push(newUser);
  console.log("new user created:" + newUser);
};

function SignupPage({ isModalOpen, closeModal }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className={`${styles.signupBody} ${isModalOpen}`}>
      <form
        className={styles.formBody}
        onSubmit={() => createUser(name, email, password)}
      >
        {" "}
        <div className={styles.closeButtonElement}>
          <button onClick={() => closeModal()} className={styles.closeButton}>
            x
          </button>
        </div>
        <h1>Singup</h1>
        <input
          className={styles.input}
          value={name}
          type="text"
          placeholder="name"
          onChange={(e) => e.target.value}
        ></input>
        <input
          className={styles.input}
          value={email}
          type="text"
          placeholder="email"
          onChange={(e) => e.target.value}
        ></input>
        <input
          className={styles.input}
          value={password}
          type="text"
          placeholder="password"
          onChange={(e) => e.target.value}
        ></input>
        <button className={styles.signupButton} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
