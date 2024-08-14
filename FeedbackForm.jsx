import React, { useState } from 'react';
import '../Assets/css/FeedbackForm.css';
const FeedbackForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        rating: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleRatingChange = (rating) => {
        setForm(prevForm => ({
            ...prevForm,
            rating: rating
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Logic to handle form submission
    };

    return (
        <div className="feedback-container">
            <h2>Feedback Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        value={form.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        value={form.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Subject:</label>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        value={form.subject}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Rating:</label>
                    <div className="star-rating">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={star <= form.rating ? "star filled" : "star"}
                                onClick={() => handleRatingChange(star)}
                            >
                                &#9733;
                            </span>
                        ))}
                    </div>
                </div>
                <button type="submit">Submit →</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
