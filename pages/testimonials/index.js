import React, { useState } from "react";

const Testimonials = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validate(formData); // Validate form data
    setValidationErrors(errors); // Set validation errors

    if (Object.keys(errors).length === 0) {
      const formElement = event.target; // Get the form element
      const data = new FormData(formElement); // Create FormData object from the form element

      fetch(
        "https://script.google.com/macros/s/AKfycbxI3PKb5FRx-VRPdorASYexijtZGbobuLRKNAUGwCvVC9EPCuFYpHH5oSX7v612ABxR/exec",
        {
          method: "POST",
          body: data,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setShowThankYou(true); // Show the thank you message
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          }); // Reset form data
          setValidationErrors({}); // Clear validation errors
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  const validate = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = "Please enter your name";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Please enter a valid email address";
    }
    // You can add phone validation (e.g., format) if desired
    if (!data.message) {
      errors.message = "Please enter your message";
    }
    return errors;
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center max-w-md mx-auto p-8 rounded-lg shadow-lg w-full"
        style={{ maxWidth: "100%" }}
      >
        <div className="mb-4 w-full max-w-md">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white-800 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full p-2 border ${
              validationErrors.name ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-purple-800`}
          />
          {validationErrors.name && (
            <p className="mt-1 text-xs text-red-500">{validationErrors.name}</p>
          )}
        </div>
        <div className="mb-4 w-full max-w-md">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white-800 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full p-2 border ${
              validationErrors.email ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-purple-800`}
          />
          {validationErrors.email && (
            <p className="mt-1 text-xs text-red-500">
              {validationErrors.email}
            </p>
          )}
        </div>
        <div className="mb-4 w-full max-w-md">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-white-800 mb-1"
          >
            Phone (Optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-purple-800"
          />
        </div>
        <div className="mb-4 w-full max-w-md">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white-800 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            className={`w-full p-2 border ${
              validationErrors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:border-blue-500 transition duration-300 ease-in-out text-purple-800`}
            rows={4}
          />
          {validationErrors.message && (
            <p className="mt-1 text-xs text-red-500">
              {validationErrors.message}
            </p>
          )}
        </div>
        <div className="text-center w-full max-w-md">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </div>
      </form>
      {showThankYou && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-gray-800 bg-opacity-75 inset-0 fixed"></div>
          <div className="z-50 bg-white dark:bg-purple-900 p-6 rounded-lg shadow-lg relative">
            <p className="text-lg font-semibold text-purple-500 dark:text-white">
              Thank you for your response!
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonials;