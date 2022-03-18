import React, { useEffect, useState } from 'react';
import SyllabusCart from './SyllabusCart';

const AllSyllabus = () => {

    const [syllabus, setSyllabus] = useState([]);
    useEffect(() => {
        fetch('https://blooming-sierra-74368.herokuapp.com/allSyllabus')
            .then(res => res.json())
            .then(data => setSyllabus(data))
    }, [])
    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Syllabus Collection</h1></div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {syllabus?.map((syllabuss) => (

                    <SyllabusCart
                        key={syllabuss.id}
                        data={syllabuss}>

                    </SyllabusCart>

                ))}
            </div>

        </div>
    );
};

export default AllSyllabus;