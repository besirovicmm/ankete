<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  uzmiSveAnketeKorisnika,
  uzmiSveAnketeKorisnikaBezIdAnkete,
} from '../REdux/Slices/FetchData'
import { uzmiKorisnike } from '../REdux/Slices/Sign'

const AnketeKorisnika = () => {
  const dispatch = useDispatch()
  const [id_ank, setId_ank] = useState(null)
  const [id_kor, setId_kor] = useState(null)

  const { anketeKorisnika } = useSelector((state) => state.anketa)
  const { sveAnketeKorisnika } = useSelector((state) => state.anketa)
  const { korisnici } = useSelector((state) => state.sign)

  useEffect(() => {
    //dispatch(uzmiSveAnketeKorisnika({ id_kor, id_ank }))
    dispatch(uzmiKorisnike())
  }, [])
=======
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uzmiSveAnketeKorisnika } from "../REdux/Slices/FetchData";

const AnketeKorisnika = () => {
  const dispatch = useDispatch();
  const { anketeKorisnika } = useSelector((state) => state.anketa);

  useEffect(() => {
    dispatch(uzmiSveAnketeKorisnika(2, 12));
    console.log(anketeKorisnika);
  }, []);
>>>>>>> 3ff6adb4c1c9bd5876e582cdc4221f0789898693

  useEffect(() => {}, [id_ank, id_kor])
  return (
    <div>
      <select
        onChange={(e) => {
          setId_kor(e.target.value)
          console.log(id_kor, 'idKorisnika')
          dispatch(uzmiSveAnketeKorisnikaBezIdAnkete(id_kor))
          console.log(sveAnketeKorisnika, 'sve')
        }}
      >
        <option disabled selected value>
          -- select an option --
        </option>
        {korisnici &&
          korisnici.map((el) => {
            return <option value={el.id_korisnika}>{el.ime_korisnika}</option>
          })}
      </select>
      {sveAnketeKorisnika && (
        <select
          onChange={(e) => {
            console.log(id_ank, 'idAnk')
            setId_ank(e.target.value)
          }}
        >
          <option selected value>
            -- select an option --
          </option>
          {sveAnketeKorisnika &&
            sveAnketeKorisnika.map((el) => {
              return <option value={el.idAnkete}>{el.ime_ankete}</option>
            })}
        </select>
      )}
      <button
        onClick={() => {
          dispatch(uzmiSveAnketeKorisnika({ id_kor, id_ank }))
        }}
      >
        Uzmi ankete
      </button>
      {anketeKorisnika &&
        anketeKorisnika.map((el) => {
          return (
            <div>
              <p>{el.pitanje}</p>
              <p>{el.odgovor}</p>
            </div>
          );
        })}
    </div>
  );
};

export default AnketeKorisnika;
