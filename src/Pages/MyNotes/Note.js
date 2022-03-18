import React, { useEffect, useState } from 'react';

import './NoteCart.css';
import NoteCart from './NoteCart';

const Note = () => {

     const [data, setData] = useState([]);
     useEffect(() => {
          fetch('/Note.json')
               .then(res => res.json())
               .then(data => setData(data.slice(1, 4)))
     }, [])


     return (
          <div className="container text-black mt-5 mb-5" >
               <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Desire Notes</h1></div>
               <div className="row row-cols-1 row-cols-md-3 g-4">

                    {data?.map((data) => (

                         <NoteCart
                              key={data.id}
                              data={data}
                         ></NoteCart>
                    ))}

               </div>

          </div>
     );
};

export default Note;