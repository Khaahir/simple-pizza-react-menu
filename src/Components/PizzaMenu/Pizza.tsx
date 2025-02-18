import{ ReactNode} from 'react'
import React from 'react';

interface Pizza {
    name?: string;
    ingredients?: string;
    price?: ReactNode;
    photoName?: string;
    soldOut?: boolean;
}
function Pizza({name, ingredients,price,photoName,soldOut}: Pizza) {
   
  console.log({soldOut})
  return (
        <li className={`pizza-list ${soldOut? "sold-out" : ""}` } >
            <img className='pizza-img' src={photoName} />
            <h2 className='pizza-name'>{name}</h2>
            <p className='ingredients'>{ingredients}</p>
            <p className='price'>{price}</p>
            <p className='sold-out'>{soldOut}</p>

        </li>
  )
}


export default Pizza