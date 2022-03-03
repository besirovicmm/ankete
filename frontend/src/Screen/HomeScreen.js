import React, { useEffect } from "react";
import "./homescreen.css";
import { useDispatch, useSelector } from "react-redux";
import KarticaAnkete from "../Komponente/KarticaAnkete";
import { getAnkete } from "../REdux/Slices/FetchData";
const HomeScreen = () => {
  const dispatch = useDispatch();
  const ankete = useSelector((state) => state.anketa.ankete);
  useEffect(() => {
    dispatch(getAnkete());
  }, []);
  return (
    <div>
      <h1>Dobrodosli! Molimo Vas izaberite jednu od anketa</h1>
      <div className="mapirajAnkete">
        {ankete.map((el) => {
          return <KarticaAnkete id={el.id}></KarticaAnkete>;
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
