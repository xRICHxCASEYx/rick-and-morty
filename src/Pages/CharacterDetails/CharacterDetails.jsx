import React from 'react'
import { useParams } from 'react-router-dom'
import './CharacterDetails.css'
import axios from 'axios'


function CharacterDetails() {
    //I need to get the id of this character
    //from the url
    const {characterId} = useParams()

    //make state to hold api data
    const [character, setCharacter] = React.useState('')

    //https://rickandmortyapi.com/api/character/3
    //I need to get api data when the page loads
    React.useEffect(
        ()=>{
            //make api call
            axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(res =>{
                console.log(res.data)
                //store in state
                setCharacter(res.data)
            })
            .catch(err => console.log(err))

        }, [] //when page loads
    )

  return (
    <div className="details-container">
        <img src={character?.image} />
        <div className="container-info">
            <p>Name: {character?.name}</p>
            <p>Gender: {character?.gender}</p>
            <p>Location: {character?.location?.name}</p>
            <p>Species: {character?.species}</p>
        </div>
        
    </div>
  )
}

export default CharacterDetails