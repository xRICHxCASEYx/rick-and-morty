import React from 'react'
import './Search.css'
import axios from 'axios'

function Search({setCharacters}) {

    //need state to store user input
    const [query, setQuery] = React.useState('')

    //https://rickandmortyapi.com/api/character/?name=smith

    const handleSearch = (e) =>{
        //stop default form action to refresh page
        e.preventDefault();

        console.log(query)
        //make api call to get characters that match
        axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`)
        .then(res =>{
            console.log(res.data.results)
            //change what is in characters
            setCharacters(res.data.results)
        })
          .catch(err => {
            //give error message if not found//
            if (err.response.status === 404) {
              alert('There is no character Named ${query}')
            }
            else {
              console.log(err)
            }
          })
      
      //Clear Textbox//

      setQuery('')

    }

  return (
    <form className="search-container" onSubmit={handleSearch}>
        <input type="text" value={query}
               onChange={(e)=>setQuery(e.target.value)}
               placeholder="Search all characters" />

    </form>
  )
}

export default Search