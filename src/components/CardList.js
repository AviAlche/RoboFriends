import React from 'react';
import Card from './Card.js';

const CardList = ({robots}) => {
    

    return (
        <div>
            {
                robots.map((user,i) => {
                return (<Card    
                            key={i}
                            name={user.name} 
                            email={user.email} 
                            id={user.id}/>);
                        })
            }
        </div>
    );
}

export default CardList