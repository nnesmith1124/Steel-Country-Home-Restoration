import React, { useState } from "react";
import "./inquiryForm.css";

function InquiryForm() {
    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        zipCode: '',
        service: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("/api/inquiries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(values)
            });

            if (!response.ok) {
                throw new Error("Failed to submit inquiry");
            }

            const data = await response.json();
            setSuccess("Your inquiry has been submitted successfully!");
            setValues({
                name: "",
                email: "",
                phone: "",
                zipCode: "",
                service: "gutters",
                message: "",
                status: "submitted"
            });
        } catch (err) {
            setError(err.message || "An error occurred while submitting the form");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="form">
            <h1>Inquiry Form</h1>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter email address"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="phone">Phone</label>
                <input
                    type="text"
                    id="phone"
                    placeholder="Enter phone number"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="zipCode">Zip Code</label>
                <input
                    type="text"
                    id="zipCode"
                    placeholder="Enter service area zip code"
                    name="zipCode"
                    value={values.zipCode}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="service">Service</label>
                <select
                    name="service"
                    id="service"
                    value={values.service}
                    onChange={handleChange}
                >
                    <option value="gutters">Gutters</option>
                    <option value="painting">Painting</option>
                    <option value="roofing">Roofing</option>
                    <option value="siding">Siding</option>
                </select>

                <label htmlFor="message">Message</label>
                <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Any details you want to add"
                    value={values.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
            </form>
        </div>
    );
}

export default InquiryForm;