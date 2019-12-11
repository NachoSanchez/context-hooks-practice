import React,{ createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const[ books ] = useState([
        {title:'IT', id: 1},
        {title:'Doctor Sleep', id: 2},
        {title:'Pet Semantary', id: 3},
        {title:'The Dark Tower', id: 4}
    ])
    return ( 
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;