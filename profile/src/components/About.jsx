import React from 'react';
import './About.css'; // Ensure this path is correct

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-container">
                <h1>About Us</h1>
                <p>Welcome to our platform! We are dedicated to helping individuals find their perfect pets.</p>

                <h2>Our Mission</h2>
                <p>Our mission is to connect loving families with animals in need of homes. We believe that every pet deserves a loving environment.</p>

                <h2>Our Values</h2>
                <ul>
                    <li>Compassion: We care deeply for all animals.</li>
                    <li>Integrity: We operate with honesty and transparency.</li>
                    <li>Community: We believe in the power of community support and collaboration.</li>
                </ul>

                <h2>Meet Our Team</h2>
                <p>Our dedicated team of volunteers and professionals work tirelessly to ensure every pet is cared for and placed in a loving home.</p>
                <ul>
                    <li><strong>Jane Doe</strong> - Founder & Director</li>
                    <li><strong>John Smith</strong> - Operations Manager</li>
                    <li><strong>Emily Johnson</strong> - Volunteer Coordinator</li>
                </ul>

                <h2>Our Story</h2>
                <p>Founded in 2020, our organization started with a simple idea: to provide a platform for shelter animals to find their forever homes. Since then, we have successfully placed thousands of pets with loving families.</p>

                <h2>Contact Us</h2>
                <p>If you have any questions or would like to get involved, please feel free to reach out!</p>
                <p>Email: <a href="mailto:supportpet@gmail.com">info@yourplatform.com</a></p>
            </div>
        </div>
    );
};

export default AboutUs;
