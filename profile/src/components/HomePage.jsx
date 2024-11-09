import React from "react";
import "./HomePage.css";

const petData = [
  { name: "Bella", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp2mCeVFcaIqVXBhhPdMmO6VEQ7czEsUs4Q&s" },
  { name: "Max", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-mEHFMC9tZwTUp0VMMBFdVbkYeJ-psbqUlw&s" },
  { name: "Lucy", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRieHg91inpStbODEoeJB6ZNd3__nYy6bOPig&s" },
  { name: "Charlie", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsaI6eSKMkY_rrIv4eaTHkHrkGjlUV2SrsoA&s" },
  { name: "Daisy", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2gneRvGK7O0sMvN0JI46yrlpuTuiYTRB3g&s" },
  { name: "Diana", imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNI_mzHas4gtrC5xJraZEoE46qn0jk92Tn4g&s" },
];

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Find Your New Best Friend</h1>
        <p>Adopt a pet and give them a forever home</p>
        <p>Pet of the week</p>
        <button className="explore-btn">Explore More</button>
      </div>
      <div className="image-gallery">
        {petData.map((pet, index) => (
          <div key={index} className="pet-card">
            <img src={pet.imgSrc} alt={pet.name} className="pet-image" />
            <p className="pet-name">{pet.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
