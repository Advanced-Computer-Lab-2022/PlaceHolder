import { React, useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'

function CountrySelector() {
  const [value,setValue] = useState('test')
  const options = useMemo(() => countryList().getData(), [])

  function changeHandler (e) {
    setValue(e)
  }

  return <Select options={options} value={value} onChange={changeHandler} />
}

export default CountrySelector

