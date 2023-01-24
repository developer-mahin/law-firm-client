import React from "react";

const DisplayComment = ({ comment }) => {
  const { message, name, email } = comment;


  return (
    <div className="border shadow-sm rounded-lg p-6">
        <div className="border-b-2 py-1 mb-4">
            <h2 className="text-lg font-semibold">{name}</h2>
            <p>{email}</p>
        </div>
        <div>
            {message}
        </div>
    </div>
  );
};

export default DisplayComment;
