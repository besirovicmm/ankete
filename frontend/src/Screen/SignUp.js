import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { prijaviKorisnika } from "../REdux/Slices/Sign";
import "./SignUp.css";

const SignUp = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    ime: "",
    prezime: "",
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const registruj = () => {
    dispatch(prijaviKorisnika(input));
  };
  return (
    <div className="registracija">
      <div className="reg">
        <h1>Sign Up</h1>
        <label>Ime</label>
        <input type="text" name="ime" onChange={onChange} value={input.ime} />
        <br />
        <label>Prezime</label>
        <input
          type="text"
          name="prezime"
          onChange={onChange}
          value={input.prezime}
        />
        <br />
        <label>Email</label>
        <input
          type="email"
          name="email"
          onChange={onChange}
          value={input.email}
        />
        <br />
        <label>Password</label>
        <input
          type="text"
          name="password"
          onChange={onChange}
          value={input.password}
        />
        <br />
        <button onClick={registruj}>prijavi se</button>
      </div>
    </div>
  );
};

export default SignUp;
