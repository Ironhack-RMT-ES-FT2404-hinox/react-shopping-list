
function ProductCard(props) {

  const handlePurchased = () => {
    
    //1. identificar cual es el producto que estamos tratando de modificar
    console.log("intentando marcar producto como comprado", props.index)

    //2. acceder al estado, buscar el elemento de ese valor y actualizarlo.
    //* le pasamos la funcion de callback a setAllProducts para tener acceso al valor actual del estado
    props.setAllProducts( (currentState) => {

      //* cuando modificamos data interna/anidada del estado se recomienda hacer un clone profundo (JSON parse y JSON stringify)
      const clone = JSON.parse( JSON.stringify( currentState ) )
      clone[props.index].isPurchased = !clone[props.index].isPurchased

      // debemos retornar el valor nuevo del estado (todos los productos anteriores, el producto con la modificacio)
      return clone // el estado nuevo será el clone modificado

    } )

  }

  return (
    <div className="product-card" >
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handlePurchased}>
        {props.eachProduct.isPurchased ? "Purchased" : "Not Purchased"}
      </button>
    </div>
  )
}

export default ProductCard