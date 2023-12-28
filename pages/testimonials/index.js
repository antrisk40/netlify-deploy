// Testimonials.js
import React, { useState } from "react";

const Testimonials = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (name.trim() !== "" && newComment.trim() !== "") {
      const newTestimonial = `${name}: ${newComment}`;
      setComments([...comments, newTestimonial]);
      setNewComment("");
      setName("");
    }
  };

  return (
    <div className="max-w-screen-md mx-auto pt-28 pl-5 pr-5">
      <h1 className="text-3xl font-bold mb-4">Testimonials</h1>
      <div>
        <ul>
          {comments.map((testimonial, index) => (
            <li key={index} className="mb-2">
              {testimonial}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleCommentSubmit}>
        <label className="block mb-2">Your Name:</label>
        <input
          type="text"
          className="w-full border p-2 mb-2"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          style={{ color: "red" }}
        />
        <label className="block mb-2">Leave a Comment:</label>
        <textarea
          rows="4"
          className="w-full border p-2 mb-2"
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Type your comment here..."
          style={{ color: "red" }}
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-full"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default Testimonials;
