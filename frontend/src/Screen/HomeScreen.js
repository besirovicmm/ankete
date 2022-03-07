import React, { useEffect } from "react";
import "./homescreen.css";
import { useDispatch, useSelector } from "react-redux";
import KarticaAnkete from "../Komponente/KarticaAnkete";
import { getAnkete } from "../REdux/Slices/FetchData";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const { ankete } = useSelector((state) => state.anketa);
  const proba = [{ ime: "a" }, { ime: "b" }, { ime: "c" }];
  useEffect(() => {
    dispatch(getAnkete());
    console.log(ankete, "hello");
  }, []);
  return (
    <div className="glavni">
      <h1>
        <br /> Molimo Vas izaberite jednu od anketa
      </h1>

      <div className="mapirajAnkete">
        {ankete.map((el) => {
          return (
            <KarticaAnkete id={el.idAnkete} ime={el.ime_ankete}></KarticaAnkete>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
