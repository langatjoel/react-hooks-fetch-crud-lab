// QuestionItem.js
import React from "react";

function QuestionItem({ question }) {
  const { id, prompt, answers, correctIndex } = question;

  function handleDelete() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        // Update state or perform any necessary action
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  }

  function handleUpdate(event) {
    const newCorrectIndex = event.target.value;
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: newCorrectIndex }),
    })
      .then(() => {
        // Update state or perform any necessary action
      })
      .catch((error) => {
        console.error("Error updating question:", error);
      });
  }

  function renderQuestionDetails() {
    // JSX for displaying question details and dropdown for correct answer
  }

  return (
    <li>
      <h4>Question {id}</h4>
      {renderQuestionDetails()}
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
