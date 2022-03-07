import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginKorisnika } from "../REdux/Slices/Sign";

const Login = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const promena = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const posalji = () => {
    dispatch(loginKorisnika(input));
  };
  return (
    <div className="registracija">
      <div className="reg">
        <h1>Log in</h1>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={promena}
        ></input>
        <br />
        <label>password</label>
        <input
          type="text"
          name="password"
          value={input.password}
          onChange={promena}
        ></input>
        <br />
        <button onClick={posalji}>uloguj se</button>
      </div>
    </div>
  );
};
export default Login;
