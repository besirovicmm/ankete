import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { uzmiPitanja } from '../REdux/Slices/FetchData'

const Anketascreen = () => {
  const params = useParams()
  const { id } = params
  const [formData, setFormData] = useState({ id, odgovor: {} })
  const dispatch = useDispatch()
  const anketeZasebno = useSelector((stanje) => stanje.anketa.anketeZasebno)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      odgovor: { ...prevState.odgovor, [e.target.name]: e.target.value },
    }))
    console.log(formData)
  }

  useEffect(() => {
    dispatch(uzmiPitanja(id))
    console.log(anketeZasebno)
  }, [])
  return (
    <div>
      <h1>
        {/* mozda da u tabeli odgovora dodamo tekstualni odgovor ? */}
        {anketeZasebno &&
          anketeZasebno.map((el) => {
            return (
              <form>
                <label>{el.pitanje}</label>
                {el.odgovori.map((item) => (
                  <div>
                    <label>{item}</label>
                    <input
                      onChange={onChange}
                      type="radio"
                      name={el.pitanje}
                      value={item}
                      placeholder={item}
                    />
                  </div>
                ))}
              </form>
            )
          })}
      </h1>
    </div>
  )
}

export default Anketascreen
