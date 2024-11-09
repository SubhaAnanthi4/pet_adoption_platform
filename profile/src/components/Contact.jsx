import axios from "axios";
import { useState } from "react";

export default function Contact() {
    const [contactFormData, setContactFormData] = useState({ name: '', email: '', message: '' });
    const [response, setResponse] = useState(null); // Move this outside the handleSubmit function

    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            const apiResponse = await axios.post(
                "http://localhost:80/contact",
                contactFormData
            );
            setResponse(apiResponse.data); // Set the response after successful request
        } catch (error) {
            console.error("Error: ", error);
            setResponse(error.message); // Set error message
        }

        // Reset form data
        setContactFormData({ name: '', email: '', message: '' });
    }

    function handleChange(e) {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value }); // Remove brackets around e.target.value
    }

    return (
        <div className="container-fluid col-3">
            <div className="card">
                <h6 className="card-header bg-primary text-white text-center">Contact Me</h6>
                <div className="card-body">
                    <div className="col-12">
                        <p className="text-info text-justify">{response === null ? "" : response}</p>
                    </div>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="name" name="name" value={contactFormData.name} onChange={handleChange} required autoFocus />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" value={contactFormData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message:</label>
                            <textarea className="form-control" rows="5" id="message" name="message" value={contactFormData.message} onChange={handleChange} required />
                        </div>
                        <div className="d-flex justify-content-center">
                            <input type="submit" value="Send" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
