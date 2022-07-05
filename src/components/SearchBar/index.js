import React from 'react'
import { Input } from './styled'

const SearchBar = ({search, setSearch}) => {
    return (
        <>
            <Input
                type="text"
                placeholder="Pesquisar"
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
        </>
  )
}

export default SearchBar