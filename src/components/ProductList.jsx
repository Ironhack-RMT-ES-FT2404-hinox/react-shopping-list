import ProductCard from "./ProductCard";

function ProductList(props) {
  // console.log(props)

  return (
    <div className="product-list container">
      
      <h2>Product List</h2>

      {props.products
      .filter((eachProduct) => {
        //* antes de pintarlo en la pantalla con el map, lo filtramos para solo muestre lo que empieza por lo escrito en la barra de busqueda
        return eachProduct.name.startsWith(props.searchValue)
      })
      .map((eachProduct, index) => {
        return <ProductCard 
          eachProduct={eachProduct} 
          key={index} 
          index={index} 
          setAllProducts={props.setAllProducts}
          />
      })}

    </div>
  )
}

export default ProductList