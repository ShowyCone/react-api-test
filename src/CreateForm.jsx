import { useState } from 'react'
import axios from 'axios'

const CreateForm = ({ addNewItem }) => {
  // Estado inicial para el formulario
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
  })

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('https://api-rest-test-1.onrender.com/api/items', formData)
      .then((response) => {
        // Llamar a la función para agregar el nuevo ítem al estado global
        // addNewItem(response.data)
        console.log('Ítem creado con éxito:', response.data)
        // Restablecer el formulario
        setFormData({
          name: '',
          description: '',
          image: '',
          price: '',
        })
      })
      .catch((error) => {
        console.error('Error al crear el ítem:', error)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Nombre del producto'
        required
      />
      <textarea
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Descripción del producto'
        required
      />
      <input
        type='text'
        name='image'
        value={formData.image}
        onChange={handleChange}
        placeholder='URL de la imagen'
        required
      />
      <input
        type='number'
        name='price'
        value={formData.price}
        onChange={handleChange}
        placeholder='Precio'
        required
      />
      <button type='submit'>Crear Ítem</button>
    </form>
  )
}

export default CreateForm
