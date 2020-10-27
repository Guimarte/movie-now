import React,{useState, useEffect} from 'react'
import Header from '../../components/Header'
import {StyeldContainer,StyledList,StyledTitle,StyledButton} from './styles'
import firebase from 'firebase'
import StyledInformation from './styles'
function ListMovies (props){

    const{id,name} = props.history.location.state;
    const [episodes,setEpisodes] = useState([]);
    useEffect(() => {
        async function loadEpisodes() {
         const db = firebase.firestore();
         db.collection(`movies/${id}/Episodios`).orderBy('id')
         .get()
         .then((querySnapshot)=>{
             const arrEpisodes = []
             querySnapshot.forEach((doc)=>{
                       arrEpisodes.push(doc.data())
             })
             setEpisodes(arrEpisodes)
         })
        }
        loadEpisodes()
      },
        []);

        const goWatchEpisodes = (id,name,url) =>{
            props.history.push('/watch',{id,name,url})
       }
           

return (
<>
<Header />
<StyeldContainer>
<StyledTitle>{name}</StyledTitle> 
<StyledList>
    {episodes?.length >0 ? episodes.map((ep) =>(
       <li key={ep?.id}>
       <p>{ep?.name}</p> <StyledButton onClick={()=>goWatchEpisodes(ep?.id, ep?.name, ep?.url_movie)}>Watch Now</StyledButton>
        </li> 
        
     ) ):(<StyledInformation>Esse Seriado não tem episodios cadastrados</StyledInformation> )
}
</StyledList>
</StyeldContainer>

</>



)


}


export default ListMovies