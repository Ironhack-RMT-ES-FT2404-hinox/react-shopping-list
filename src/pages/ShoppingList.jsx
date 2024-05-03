import { useState } from "react";

import ProductList from "../components/ProductList";
import AddForm from "../components/AddForm";
import SearchBar from "../components/SearchBar";

// this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingList() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
 
  const [ searchValue, setSearchValue ] = useState("")
  //* el estado valor del search lo creamos acá para facilitarlos filtrar los productos

  const [ isFormShowing, setIsFormShowing ] = useState(false)
  const handleShowForm = () => setIsFormShowing(!isFormShowing)

  return (
    <>

      <h1>Shopping List</h1>

      <button onClick={handleShowForm}>Show Add Form</button>

      { isFormShowing === true && <AddForm 
        // allProducts={allProducts} 
        setAllProducts={setAllProducts}
      />}

      <SearchBar 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <ProductList 
        products={allProducts}
        searchValue={searchValue}
        setAllProducts={setAllProducts}
      />

    </>
  )
}

export default ShoppingList

