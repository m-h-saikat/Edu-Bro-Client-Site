import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataAction } from '../../ReduxManagement/Redux/actions';
import QuestionCart from './QuestionCart';
import YearPicker from "react-year-picker";
import ReactPaginate from 'react-paginate';




const AllQuestions = () => {





    const [questions, setQuestions] = useState([]);
    const [department, setDepartment] = useState("")
    const [semester, setSemester] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    const handlePageChange = (data) => {
        setPage(data.selected);
    }




    // checkbox er value true or false return kore


    // useEffect(() => {
    //     fetch('https://blooming-sierra-74368.herokuapp.com/allQuestions')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data))
    // }, [])



    const status = ''
    useEffect(() => {
        console.log(department, year, semester)
        fetch(`http://localhost:5000/allQuestions?page=${page}&&size=${size}&&department=${department}&&year=${year}&&status=${status}&&semester=${semester}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.allQuestions)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [department, year, semester, page]);





    // Start data store via Redux toolkit 

    // const dispatch = useDispatch()

    // const allQuestionsData = useSelector( (state)=> state.questionsData.data)

    // useEffect(()=>{
    //     dispatch(getDataAction())
    //   },[])

    // end data store via Redux toolkit 





    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Find All Questions</h1>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">

                        <form
                            onChange={(e) => setDepartment(e.target.value)}
                        >

                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    All
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="CSE" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    CSE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="ece" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    EEE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="bba" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    BBA
                                </label>
                            </div>
                        </form>
                        <form
                            onChange={(e) => setYear(e.target.value)}
                        >

                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    empty
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="2020" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    2020
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="2021" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    2021
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="2022" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    2022
                                </label>
                            </div>
                        </form>
                        <form
                            onChange={(e) => setSemester(e.target.value)}
                        >

                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    All
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="CSE" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    CSE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="ece" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    EEE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="bba" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    BBA
                                </label>
                            </div>
                        </form>



                    </div>
                </div>
                <div className="col-12 col-md-10">
                    <div className="row">
                        {questions?.map((question) => (
                            <QuestionCart
                                key={question.id}
                                data={question}>
                            </QuestionCart>
                        ))}
                    </div>
                </div>

                <div className="d-flex mt-5">
                    <div className='mx-auto'>


                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            marginPagesDisplayed={3}
                            pageRangeDisplayed={3}
                            pageCount={pageCount}
                            onPageChange={handlePageChange}
                            containerClassName='pagination'
                            pageClassName='page-item'
                            pageLinkClassName='page-link'
                            previousClassName='page-link'
                            nextClassName='page-link'
                            breakClassName='page-item'
                            breakLinkClassName='page-link'
                            activeClassName='active'
                        />

                    </div>
                </div>


            </div >

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
    );
};

export default AllQuestions;