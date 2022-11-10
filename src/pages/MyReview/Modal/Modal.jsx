import React from "react";
import "./Modal.css";

function Modal({ setOpenModal, handleUpdateReview, setUpdateReview, _id }) {

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Are You Sure to Continue Update Review?</h1>
        </div>
        <div className="body">
          <textarea
            name="review"
            onChange={(e)=>setUpdateReview(e.target.value)}
            id=""
            cols="30"
            rows="4"
            className="w-full rounded shadow"
          ></textarea>
        </div>
        <div className="footer">
          <button
            className="px-6 py-3 rounded-full"
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button
            onClick={()=>handleUpdateReview(_id)}
            className="px-6 py-3 rounded-full"
          >
            Continue Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
