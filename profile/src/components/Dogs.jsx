import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Animal.css';
import AdoptionForm from './AdoptionForm'; // Correct import of the form

const dogProfiles = [
    { id: 1, name: "Buddy", age: 3, breed: "Golden Retriever", image: "https://shorturl.at/RkrYx" },
    { id: 2, name: "Max", age: 4, breed: "Bulldog", image: "https://shorturl.at/3WsIX" },
    { id: 3, name: "Bella", age: 2, breed: "Goldendoodle", image: "https://shorturl.at/5YVGn" },
    { id: 4, name: "Bolt", age: 2, breed: "Cockapoo", image: "https://shorturl.at/R15jA" },
    { id: 5, name: "Milo", age: 4, breed: "Maltipoo", image: "https://tinyurl.com/53558h78" },
    { id: 6, name: "Echo", age: 3, breed: "Chiweenie", image: "https://tinyurl.com/yppxx67m" },
    { id: 7, name: "Juno", age: 1, breed: "pug", image: "https://tinyurl.com/y9wywxuw" },
    { id: 8, name: "Ziggy", age: 2, breed: "Goldador", image: "https://tinyurl.com/362xen8m" },
    { id: 9, name: "Pip", age: 3, breed: "Shih-Poo", image: "https://tinyurl.com/35e3ad4j" },
    { id: 10, name: "Marley", age: 1, breed: "Siberian Husky", image: "https://tinyurl.com/52xuk2uy" },
    { id: 11, name: "Clover", age: 4, breed: "Cavapoo", image: "https://tinyurl.com/ywr6kuaf" },
    { id: 12, name: "Scout", age: 2, breed: "Cavachon", image: "https://tinyurl.com/4ajjyjv3" },
    { id: 13, name: "Moose", age: 4, breed: "Beagle", image: "https://tinyurl.com/5aw4bxeb" },
    { id: 14, name: "Pax", age: 1, breed: "Pomsky", image: "https://tinyurl.com/yrfbewxy" },
    { id: 15, name: "Jazz", age: 3, breed: "Puggle", image: "https://tinyurl.com/5n8ayus9" },
    { id: 16, name: "Raven", age: 4, breed: "Morkie", image: "https://tinyurl.com/5er7txna" },
    { id: 17, name: "Finn", age: 2, breed: "Chihuahua", image: "https://tinyurl.com/48zhpfke" },
    { id: 18, name: "Jimmy", age: 3, breed: "EngAm Bulldog", image: "https://tinyurl.com/bddmu38b" }
];

const Dogs = () => {
    const [selectedDog, setSelectedDog] = useState(null);
    const navigate = useNavigate(); // Hook to handle navigation

    const handleSeeMoreDetails = (dog) => {
        setSelectedDog(dog); // Set the selected dog to show details
    };

    const handleCloseModal = () => {
        setSelectedDog(null); // Close the details modal
    };

    const handleAdoptClick = () => {
        // Navigate to the adoption form page and pass the selected dog as state
        navigate(`/adopt/${selectedDog.id}`, { state: { dog: selectedDog } });
    };

    return (
        <div className="animal-container">
            <h1 className="page-title">Dogs for Adoption</h1>
            <div className="animal-grid">
                {dogProfiles.map((dog) => (
                    <div className="animal-card" key={dog.id}>
                        <img src={dog.image} alt={dog.name} className="animal-image" />
                        <div className="animal-info">
                            <h2>{dog.name}</h2>
                            <p>Age: {dog.age}</p>
                            <p>Breed: {dog.breed}</p>
                        </div>
                        <div className="card-actions">
                            <button
                                className="details-button"
                                onClick={() => handleSeeMoreDetails(dog)}
                            >
                                See More Details
                            </button>
                            <span
                                className="favorite-icon"
                                onClick={() => alert(`${dog.name} added to favorites!`)}
                            >
                                ⭐
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for showing selected dog details */}
            {selectedDog && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <img src={selectedDog.image} alt={selectedDog.name} className="modal-image" />
                        <h2>{selectedDog.name}</h2>
                        <p>Age: {selectedDog.age}</p>
                        <p>Breed: {selectedDog.breed}</p>
                        <p>Description: Lorem ipsum dolor sit amet...</p>
                        <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dogs;
