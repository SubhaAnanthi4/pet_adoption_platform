import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Animal.css';

const catProfiles = [
    { id: 1, name: "Whiskers", age: 2, breed: "Siamese", image: "http://surl.li/sjhbnq" },
    { id: 2, name: "Luna", age: 1, breed: "Persian", image: "http://surl.li/tscgte" },
    { id: 3, name: "Oliver", age: 5, breed: "British Shorthair", image: "http://surl.li/dopsbo" },
    { id: 4, name: "Mittens", age: 3, breed: "Maine Coon", image: "http://surl.li/bhzlhm" },
    { id: 5, name: "Furball", age: 2, breed: "Ragdoll", image: "http://surl.li/brhaur" },
    { id: 6, name: "Mochi", age: 4, breed: "Burmese", image: "http://surl.li/bmjktz" },
    { id: 7, name: "Ziggy", age: 3, breed: "Abyssinian", image: "http://surl.li/oxsapg" },
    { id: 8, name: "Fluffernutter", age: 1, breed: "Birman", image: "http://surl.li/zjnfyd" },
    { id: 9, name: "Muffin", age: 3, breed: "Scottish Fold", image: "http://surl.li/dragmf" },
    { id: 10, name: "Onyx", age: 2, breed: "Bombay cat", image: "http://surl.li/oommie" },
    { id: 11, name: "Mishka ", age: 1, breed: "Siberian", image: "http://surl.li/jftrgq" },
    { id: 12, name: "Smokey", age: 3, breed: "Russian Blue", image: "http://surl.li/mtjwez" },
    { id: 13, name: "Stubby", age: 5, breed: "Munchkin", image: "http://surl.li/ttltrh" },
    { id: 14, name: "Curly", age: 2, breed: "American Curl", image: "http://surl.li/sodomi" },
    { id: 15, name: "Bobby", age: 4, breed: "Bobtail", image: "http://surl.li/dbuqyh" },
    { id: 16, name: "Slate", age: 1, breed: "Chartreux", image: "http://surl.li/ujprdg" },
    { id: 17, name: "Fluff", age: 3, breed: "Turkish Angora", image: "http://surl.li/blufre" },
    { id: 18, name: "Stumpy", age: 5, breed: "Manx", image: "http://surl.li/thrvrh" },
    { id: 19, name: "Emerald", age: 2, breed: "Korat", image: "http://surl.li/wxmnau" },
];

const Cats = () => {
    const [selectedCat, setSelectedCat] = useState(null);
    const navigate = useNavigate(); // Hook to handle navigation

    const handleSeeMoreDetails = (cat) => {
        setSelectedCat(cat); // Set the selected cat to show details
    };

    const handleCloseModal = () => {
        setSelectedCat(null); // Close the details modal
    };

    const handleAdoptClick = () => {
        // Navigate to the adoption form page and pass the selected cat as state
        navigate(`/adopt/${selectedCat.id}`, { state: { cat: selectedCat } });
    };

    return (
        <div className="animal-container">
            <h1 className="page-title">Cats for Adoption</h1>
            <div className="animal-grid">
                {catProfiles.map((cat) => (
                    <div className="animal-card" key={cat.id}>
                        <img src={cat.image} alt={cat.name} className="animal-image" />
                        <div className="animal-info">
                            <h2>{cat.name}</h2>
                            <p>Age: {cat.age}</p>
                            <p>Breed: {cat.breed}</p>
                        </div>
                        <div className="card-actions">
                            <button
                                className="details-button"
                                onClick={() => handleSeeMoreDetails(cat)}
                            >
                                See More Details
                            </button>
                            <span
                                className="favorite-icon"
                                onClick={() => alert(`${cat.name} added to favorites!`)}
                            >
                                ⭐
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for showing selected cat details */}
            {selectedCat && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={handleCloseModal}>×</button>
                        <img src={selectedCat.image} alt={selectedCat.name} className="modal-image" />
                        <h2>{selectedCat.name}</h2>
                        <p>Age: {selectedCat.age}</p>
                        <p>Breed: {selectedCat.breed}</p>
                        <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet...</p>
                        <button className="adopt-button" onClick={handleAdoptClick}>Adopt</button>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cats;
