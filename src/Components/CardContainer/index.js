import React from 'react'; 
import Card from '../Card';

const CardContainer = ({houses})=> {
return <>
{
    houses.length && houses.map((house)=> <Card house={house} />)
}

</>

}

export default CardContainer