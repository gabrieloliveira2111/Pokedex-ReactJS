import React from 'react'

const SearchBar = ({search, setSearch}) => {
  return (
    <div>
        <input
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
    </div>
  )
}

export default SearchBar