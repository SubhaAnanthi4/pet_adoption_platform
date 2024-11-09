import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Animal.css';

const otherProfiles = [
    { id: 1, name: "Bunny", age: 1, breed: "Holland Lop", image: "http://surl.li/jdjufq" },
    { id: 2, name: "Tweety", age: 2, breed: "Parakeet", image: "http://surl.li/zerziv" },
    { id: 3, name: "Goldie", age: 1, breed: "Goldfish", image: "http://surl.li/xybzdl" },
    // Add more profiles as needed...
];

const Others = () => {
    const [selectedPet, setSelectedPet] = useState(null);
    const navigate = useNavigate(); // Hook to handle navigation

    const handleSeeMoreDetails = (pet) => {
        setSelectedPet(pet); // Set the selected pet to show details
    };

    const handleCloseModal = () => {
        setSelectedPet(null); // Close the details modal
    };

    const handleAdoptClick = () => {
        // Navigate to the adoption form page and pass the selected pet as state
        navigate(`/adopt/${selectedPet.id}`, { state: { pet: selectedPet } });
    };

    return (
        <div className="animal-container">
            <h1 className="page-title">Other Pets for Adoption</h1>
            <div className="animal-grid">
                {otherProfiles.map((pet) => (
                    <div className="animal-card" key={pet.id}>
                        <img src={pet.image} alt={pet.name} className="animal-image" />
                        <div className="animal-info">
                            <h2>{pet.name}</h2>
                            <p>Age: {pet.age}</p>
                            <p>Breed: {pet.breed}</p>
                        </div>
                        <div className="card-actions">
                            <button
                                className="details-button"
                                onClick={() => handleSeeMoreDetails(pet)}
                            >
                                See More Details
                            </button>
                            <span
                                className="favorite-icon"
                                onClick={() => alert(`${pet.name} added to favorites!`)}
                            >
                                ⭐
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for showing selected pet details */}
            {selectedPet && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <img src={selectedPet.image} alt={selectedPet.name} className="modal-image" />
                        <h2>{selectedPet.name}</h2>
                        <p>Age: {selectedPet.age}</p>
                        <p>Breed: {selectedPet.breed}</p>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...</p>
                        <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Others;
