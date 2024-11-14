import React from "react";
import { useState } from "react";
import { styles } from "./SignupPageStyle";

let registeredUsers = [];
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

function SignupPage({ isModalOpen, closeModal, loginName }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginVariable, setLoginVariable] = useState("Login");
  const [showNameField, setShowNameField] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userExists = registeredUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (showNameField) {
      createUser(name, email, password);
      closeModal();
      loginName(name);

    }

    if (!userExists) {
      setLoginVariable("Sign Up");
      setShowNameField(true);
    }
  };

  return (
    <div className={`${styles.loginBody} ${isModalOpen}`}>
      <form className={styles.formBody} onSubmit={handleSubmit}>
        <div className={styles.closeButtonElement}>
          <button onClick={() => closeModal()} className={styles.closeButton}>
            x
          </button>
        </div>
        <h1 className={styles.h1}>{loginVariable}</h1>

        {showNameField && (
          <input
            className={styles.input}
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          className={styles.input}
          value={email}
          type="text"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          className={styles.input}
          value={password}
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button className={styles.loginButton} type="submit">
          {loginVariable}
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
