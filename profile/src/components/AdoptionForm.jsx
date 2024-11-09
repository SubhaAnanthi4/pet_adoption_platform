import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom'; 
import "./AdoptionForm.css";

const AdoptionForm = () => {
  const { petId } = useParams(); // Get petId from the URL parameters
  const location = useLocation(); // Get the location object
  const [selectedPet, setSelectedPet] = useState(location.state?.pet || null); // Use passed pet or null
  const [adopterData, setAdopterData] = useState({
    petId: petId,
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [ownerData, setOwnerData] = useState({
    ownerName: '',
    ownerPhone: '',
    ownerEmail: ''
  });

  useEffect(() => {
    if (!selectedPet) {
      // Fetch pet details if not available in state
      const fetchPetInfo = async () => {
        try {
          const response = await fetch(`/api/pet/${petId}`);
          const data = await response.json();
          if (response.ok) {
            setSelectedPet(data);
          } else {
            alert("Pet not found.");
          }
        } catch (error) {
          console.error('Error fetching pet data:', error);
          alert("There was an issue fetching pet data.");
        }
      };

      fetchPetInfo();
    } else {
      // If pet is already passed in state, just set it
      setSelectedPet(location.state?.pet);
    }

    // Fetch owner info based on the pet ID
    const fetchOwnerInfo = async () => {
      try {
        const response = await fetch(`/api/pet/${petId}`);
        const data = await response.json();
        if (response.ok) {
          setOwnerData({
            ownerName: data.ownerName,
            ownerPhone: data.ownerPhone,
            ownerEmail: data.ownerEmail
          });
        }
      } catch (error) {
        console.error('Error fetching owner data:', error);
        alert("There was an issue fetching owner data.");
      }
    };

    fetchOwnerInfo();
  }, [petId, selectedPet, location.state?.pet]); // Depend on petId, selectedPet, and location state

  const handleChange = (e) => {
    setAdopterData({
      ...adopterData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/adopt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...adopterData, owner: ownerData })
    });
    response.ok ? alert("Adoption request submitted!") : alert("Submission issue.");
  };

  if (!selectedPet) {
    return <div>Loading...</div>; // Handle loading state until pet data is fetched
  }

  return (
    <div className="adoption-form-page">
      <form onSubmit={handleSubmit} className="adoption-form">
        <h2>Adopt {selectedPet.name}</h2>
        <div>
          <label>Pet ID:</label>
          <input type="text" name="petId" value={adopterData.petId} onChange={handleChange} disabled />
        </div>
        <div>
          <label>Your Name:</label>
          <input type="text" name="name" value={adopterData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={adopterData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number:</label>
          <input type="tel" name="phone" value={adopterData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <textarea name="address" value={adopterData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>Message (Optional):</label>
          <textarea name="message" value={adopterData.message} onChange={handleChange} />
        </div>

        <h3>Owner's Contact Information:</h3>
        <p>Name: {ownerData.ownerName}</p>
        <p>Phone: {ownerData.ownerPhone}</p>
        <p>Email: {ownerData.ownerEmail}</p>

        <button type="submit">Submit Adoption Request</button>
      </form>
    </div>
  );
};

export default AdoptionForm;
