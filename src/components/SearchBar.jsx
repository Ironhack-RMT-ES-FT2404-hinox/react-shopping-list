import { useState } from "react"

function SearchBar(props) {

  const handleSearch = (event) => {
    props.setSearchValue(event.target.value)

    // props.setAllProducts( (currentState) => {
    //   // retorna el nuevo valor
    //   return currentState.filter((eachProduct) => {
    //     return eachProduct.name.startsWith(event.target.value)
    //   })
    // } )
    //* lo de arriba funcionaria si tuvieramos DOS estados.
    //* 1. unos para todos los productos
    //* 2. uno para los productos filtrados
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input type="text" value={props.searchValue} onChange={handleSearch}/>

    </div>
  )
}

export default SearchBar