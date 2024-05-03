import { useState } from "react"

function AddForm(props) {
  console.log(props)

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  const handleNameChange = (event) => {
    // console.log("intentando cambiar el campo", event.target.value)

    setNameValue(event.target.value)

    // ejemplos de manipular lo que escribe el usuario
    // setNameValue(event.target.value.toUpperCase().replace("LOL", ""))
    // setNameValue(event.target.value + "TROL")
  }

  const handlepriceChange = (event) => {
    setPriceValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // esto detiene cualquier comportamiento predeterminado de este evento



    // console.log("Entregando el formulario")

    //1. recopilar la informacion del producto a crear
    const newProduct = {
      name: nameValue,
      price: priceValue,
      isPurchased: false
    }
    console.log(newProduct)

    //2. pasar esta informacion para añadirlo al estado
    // const clone = JSON.parse( JSON.stringify(props.allProducts) )
    // clone.push(newProduct)
    // props.setAllProducts( clone )

    //* ejemplo de usar spread con el estado para actualizar
    // props.setAllProducts( [...props.allProducts, newProduct] )

    //* en las funciones set podemos pasar tambien una funcion
    props.setAllProducts( (valorActualDelEstado) => {
      // nos pide que retornemos cual será el nuevo valor del estado
      return [ ...valorActualDelEstado, newProduct ]
    } )

    


  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={nameValue} onChange={handleNameChange}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" value={priceValue} onChange={handlepriceChange}/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm