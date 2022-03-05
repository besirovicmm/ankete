import React, { useEffect } from "react";
import "./karticaAnkete.css";
import { useNavigate } from "react-router-dom";

const KarticaAnkete = ({ id, ime, onClick }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/anketa/${id}`)} className="karticaAnkete">
      <h1>{ime}</h1>
    </div>
  );
};

export default KarticaAnkete;
