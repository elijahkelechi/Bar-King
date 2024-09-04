import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    comment: "", // Include comment in the initial state
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.lastName ||
      !formData.email ||
      !formData.comment
    ) {
      toast.error("Please all fields are required!");
      return;
    }

    setIsSubmitting(true);

    const serviceID = "service_oizs5no";
    const templateID = "template_eab867l";
    const userID = "Qmw14m_qXEesFlxfY";

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Email sent successfully!");

        setTimeout(() => {
          setIsSubmitting(false);
          navigate("/");
        }, 1500);
      },
      (err) => {
        console.log("FAILED...", err);
        toast.error("Failed to send email. Please try again.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "36px" }}>
          News Letter
        </h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            placeholder="last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="comment" className="form-label">
            Comment
          </label>
          <textarea
            name="comment"
            id="comment"
            placeholder="Please leave a comment"
            value={formData.comment}
            onChange={handleChange}
            style={{
              width: "100%",
              height: "200px",
              padding: "10px",
              boxSizing: "border-box",
            }}
          />
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#000080" }}
          className="btn btn-block"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default NewsLetter;
