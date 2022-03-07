import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uzmiSveAnketeKorisnika } from '../REdux/Slices/FetchData'

const AnketeKorisnika = () => {
  const dispatch = useDispatch()
  const { anketeKorisnika } = useSelector((state) => state.anketa)

  useEffect(() => {
    dispatch(uzmiSveAnketeKorisnika(2, 12))
    console.log(anketeKorisnika)
  }, [])

  return (
    <div>
      {anketeKorisnika &&
        anketeKorisnika.map((el) => {
          return (
            <div>
              <p>{el.pitanje}</p>
              <p>{el.odgovor}</p>
            </div>
          )
        })}
    </div>
  )
}

export default AnketeKorisnika
