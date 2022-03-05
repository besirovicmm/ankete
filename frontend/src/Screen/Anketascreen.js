import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uzmiPitanja } from '../REdux/Slices/FetchData'

const Anketascreen = () => {
  const params = useParams()
  const { id } = params
  const dispatch = useDispatch()
  const anketeZasebno = useSelector((stanje) => stanje.anketa.anketeZasebno)

  useEffect(() => {
    dispatch(uzmiPitanja(id))
    console.log(anketeZasebno)
  }, [])
  return (
    <div>
      <h1>
        {anketeZasebno &&
          anketeZasebno.map((el) => {
            return (
              <div>
                <h3>{el.pitanje}</h3>
                {el.odgovori.map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            )
          })}
      </h1>
    </div>
  )
}

export default Anketascreen
