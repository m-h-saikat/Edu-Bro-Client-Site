import { questionsSlice } from "./slice";
const { actions: slice } = questionsSlice;

export const getDataAction = () => (dispatch) => {
  // dispatch()
  fetch('https://blooming-sierra-74368.herokuapp.com/allQuestions')
    .then(response => response.json())
    .then((josn) => dispatch(slice.setData(josn)))
}