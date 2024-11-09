import { useState } from "react";
import "./Sellpets.css";
const SellPetForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [location, setLocation] = useState("");
  const [about, setAbout] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !age || !breed || !location || !about || !email || !phone || !fileName) {
      setError("Please fill out all fields.");
      return;
    }

    setError(""); // Reset error if form is valid

    // Add your form submission logic here
    console.log("Form submitted successfully");
    // Clear form after submission
    setName("");
    setAge("");
    setBreed("");
    setLocation("");
    setAbout("");
    setEmail("");
    setPhone("");
    setFileName("");
  };

  return (
    <div className="sell-pet-container">
      <form className="sell-pet-form" onSubmit={handleSubmit}>
        <h2 className="sell-pet-title">Donate a Pet</h2>

        <div className="input-box">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Age:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Breed:</label>
          <input
            type="text"
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>About the Pet:</label>
          <textarea
            rows="4"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Phone No:</label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="input-box">
          <label>Upload Pet Picture:</label>
          <label className="file-input-label">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
              required
            />
            <span className="file-input-text">{fileName || "Choose a Picture"}</span>
          </label>
        </div>

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <div className="sell-pet-footer">
        <p>Need help? <a href="">Contact us</a></p>
      </div>
    </div>
  );
};

export default SellPetForm;
