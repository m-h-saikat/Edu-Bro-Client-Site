import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/UseAuth";
import "./AddToDatabase.css";

const AddToDatabase = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.status = "approved";
    axios
      .post("https://blooming-sierra-74368.herokuapp.com/blogs", data)

      .then((res) => {
        if (res.data.insertedId) {
          alert("Added to Database successfully");
          reset();
        }
      });
  };

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const addZero = (num) => `${num}`.padStart(2, "0");

  const formatted =
    year +
    "-" +
    addZero(month + 1) +
    "-" +
    addZero(day) +
    " " +
    addZero(hours) +
    ":" +
    addZero(minutes);

  return (
    <div className="add-service">
      <div className="contact1">
        <div className="container-contact1 bg-dark text-white">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="contact1-form mx-auto validate-form"
          >
            <span className="contact1-form-title text-white">Add New Question</span>

            <div
              className="wrap-input1 validate-input"
              data-validate="place is required"
            >
              <input
                className="input1"
                placeholder="Subject Name"
                {...register("subject", { required: true })}
              />
              <span className="shadow-input1"></span>
            </div>

            <div className="wrap-input1 validate-input" data-validate="url">
              <input
                className="input1"
                placeholder="Question URL"
                {...register("question")}
              />
              <span className="shadow-input1"></span>
            </div>




            <h3>Department:</h3>
            <br />

            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="cse"
            />
            <label htmlFor="">CSE</label>

            <hr />
            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="eee"
            />
            <label htmlFor="">EEE</label>

            <hr />
            <input
              {...register("transportation", { required: true })}
              type="radio"
              value="ece"
            />

            <label htmlFor="">ECE</label>

            <div className="container-contact1-form-btn">
              <button type="submit" className="contact1-form-btn">
                <span>Send Data</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToDatabase;