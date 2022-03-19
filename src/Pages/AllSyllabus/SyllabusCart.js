import React from 'react';

const SyllabusCart = ({ data }) => {


    const { year, syllabusName, driveLink } = data

    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "330px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h5 className="card-title"><b>Department</b> {syllabusName}</h5>
                    <h5 className="card-title"><b>Year</b> {year}</h5>

                    <div className="d-flex justify-content-between pt-3" >
                        <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                        <button className="btn-style download-btn " ><a href={viewUrl} className="">See Syllabus</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyllabusCart;