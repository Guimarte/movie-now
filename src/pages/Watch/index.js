import React from 'react';
import { Player,BigPlayButton } from 'video-react';
import {StyledContainer} from './styles'
import Header from '../../components/Header'
import {StyledTitle} from './styles'


function Watch(props){
    const{id,name,url} = props.history.location.state;
    console.log(props)
return(
    <>
    <Header />
    
    <StyledContainer>

        <StyledTitle>{name}</StyledTitle>

<Player autoPlay src={url}>
<BigPlayButton position="center" />
</Player>)
</StyledContainer>
</>
)
}

export default Watch