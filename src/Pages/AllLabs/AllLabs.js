



import React, { useEffect, useState } from 'react';
import LabsCart from './LabsCart'

const AllLabs = () => {
    const [labs, setLabs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allLabs')
            .then(res => res.json())
            .then(data => setLabs(data))
    }, [])
    console.log(labs)


    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Labs</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {labs?.map((lab) => (

                    <LabsCart
                        key={lab.id}
                        data={lab}>

                    </LabsCart>

                ))}
            </div>

        </div>
    );
};

export default AllLabs; 
