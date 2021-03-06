import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import firebase from "firebase";
import {Link} from 'react-router-dom'
import {
  StyledContainer,
  StyledTitle,
  StyledRow,
  StyledCard,
  StyledButton,
  StyledCardImg,
  StyledCardBody,
  StyledCardText,
} from "./styles";

function Main(props) {
  
const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
     const db = firebase.firestore();
     db.collection('movies')
     .get()
     .then((querySnapshot)=>{
         const arrmovies = []
         querySnapshot.forEach((doc)=>{
             console.log(doc.data())
             arrmovies.push(doc.data())
         })
         setMovies(arrmovies)
     })
    }
    loadMovies()
  },
    []);

const goListEpisodes = (id,name) =>{
     props.history.push('/list-episodes',{id,name})
}
    


  return (
    <>
      <Header />
      <StyledContainer>
        <StyledTitle>Movie Now</StyledTitle>
        <StyledRow>
            {movies.map((movie) => (
          <StyledCard key={movie?.id}>
            
            <StyledCardImg
              variant="top"
              src={movie?.url_picture}
              onClick={()=>goListEpisodes(movie?.id, movie?.name)}
            />
            
            <StyledCardBody>
              <StyledCard.Title>{movie?.name}</StyledCard.Title>
              <StyledCardText>
                {movie?.description}
              </StyledCardText>
              <StyledButton variant="outline-dark" 
              onClick={()=>goListEpisodes(movie?.id, movie?.name)}>Assista Agora
              </StyledButton>
            </StyledCardBody>
          </StyledCard>
            ))}
        </StyledRow>
      </StyledContainer>
    </>
  );
};

export default Main;
