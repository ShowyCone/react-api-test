import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ItemList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    axios
      .get('https://api-rest-test-1.onrender.com/api/items')
      .then((response) => {
        console.log(response.data)
        setItems(response.data)
      })
      .catch((error) => {
        console.error('Hubo un error al obtener los datos:', error)
      })
  }, [])

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - {item.price} - {item.description}
        </li>
      ))}
    </ul>
  )
}

export default ItemList
