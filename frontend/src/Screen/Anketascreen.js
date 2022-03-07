import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { uzmiPitanja, posaljiOdgovore } from "../REdux/Slices/FetchData";
import "./Anketascreen.css";
import axios from "axios";
const Anketascreen = () => {
  const params = useParams();
  const { id } = params;
  const [formData, setFormData] = useState({ id, odgovor: {} });

  const dispatch = useDispatch();
  const anketeZasebno = useSelector((stanje) => stanje.anketa.anketeZasebno);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      odgovor: { ...prevState.odgovor, [e.target.name]: e.target.value },
    }));
    console.log(formData);
  };
  const posaljiOdgovore = async (formData) => {
    try {
      const { data } = await axios.post("/api/ankete", { formData });
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const odgovori = () => {
    posaljiOdgovore(formData);
  };

  useEffect(() => {
    dispatch(uzmiPitanja(id));
    console.log(anketeZasebno);
  }, []);
  return (
    <div className="anketa">
      <h1>
        <div className="A">
          {/* mozda da u tabeli odgovora dodamo tekstualni odgovor ? */}
          {anketeZasebno &&
            anketeZasebno.map((el) => {
              return (
                <div className="PiO">
                  <form>
                    <label>{el.pitanje}</label> <br /> <br />
                    {el.odgovori.map((item) => (
                      <div className="">
                        {item}
                        <input
                          type="radio"
                          value={item}
                          name={el.pitanje}
                          onChange={onChange}
                        />
                      </div>
                    ))}
                  </form>
                </div>
              );
            })}
        </div>
      </h1>
      <button onClick={odgovori}>odgovori</button>
    </div>
  );
};

export default Anketascreen;
