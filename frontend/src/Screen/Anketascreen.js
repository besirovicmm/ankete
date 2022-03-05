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
  }, [])
  return (
    <div>
      <h1>Anketa {id}</h1>
    </div>
  )
}

export default Anketascreen
