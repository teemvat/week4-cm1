import React from "react";
import { useState } from "react";
import { styles } from "./SignupPageStyle";

let registeredUsers = [
  { id: 1, name: "ville", email: "ville", password: "ville" },
];
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
  const [showEmailField, setShowEmailField] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [pwFieldVariable, setPwFieldVariable] = useState("Give password");


  const handleSubmit = (e) => {
    e.preventDefault();
    const wrongPassword = registeredUsers.some(
      (user) => user.name === name && user.password !== password
    );

    const accesGranted = registeredUsers.some(
      (user) => user.name === name && user.password === password
    );

    switch (true) {
       //if user enters wrong password message is shown in text field
      case !userLoggedIn && wrongPassword:
        setPwFieldVariable("Wrong password!");
        setPassword("");
        break;
    //after user pressed logout button, next time modal is log in
      case userLoggedIn:
        setPwFieldVariable("Give password");
        setShowEmailField(false);
        setEmail("");
        setLoginVariable("Login");
        setUserLoggedIn(false);
        loginName("Login");
        closeModal();
        break;
    
 //after registration
      case !userLoggedIn && showEmailField:
        createUser(name, email, password);
        closeModal();
        loginName(name);
        setUserLoggedIn(true);
        setShowEmailField(false);
        setLoginVariable("Log Out");
        break;
    //if user not found, show email input-field for registration
      case !userLoggedIn && !accesGranted:
        setLoginVariable("Sign In");
        setShowEmailField(true);
        break;
    

      //if user is not logged in and login accesGranted next time modal is for logout
      case !userLoggedIn:
        closeModal();
        loginName(name);
        setUserLoggedIn(true);
        setLoginVariable("Log Out");
        break;
    

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

        {showEmailField && (
          <input
            className={styles.input}
            value={email}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        {!userLoggedIn && (
          <>
            <input
              className={styles.input}
              value={name}
              type="text"
              placeholder="User Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={styles.input}
              value={password}
              type="text"
              placeholder={pwFieldVariable}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className={styles.loginButton} type="submit">
              {loginVariable}
            </button>
          </>
        )}
        {userLoggedIn && (
          <button className={styles.logoutButton} type="submit">
            {loginVariable}
          </button>
        )}
      </form>
    </div>
  );
}

export default SignupPage;
