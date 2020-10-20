import React from "react";
import john from './Images/john.jpg';
import mika from './Images/mika.jpg';
import ryan from './Images/ryan.jpg';
import steve from './Images/steve.jpg';
import sven from './Images/sven.jpg';
import './styles/Index.css';

const Home = () => {
return (
<div id="marketing-dark">
<section id="top">
    <img id="steve-halama" src={steve} alt="Sunset photo by Steve Halama"/>
        <div id="container">
            <div id="top-text-left">
                <h2>
                    These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing. 
                    <br/>
                    <br/>
                    While you could use several mobile apps to accomplish this, AnywhereFitness is the all-in-one solution to meet your “on-location” fitness className needs. AnywhereFitness makes it painless for Instructors and Clients alike to hold and attend Fitness classes wherever they might be held. 
                    <br/>
                </h2>
            </div>
            <div id="mission-statement">
                <h1>"We sweat the details so you don't have to!"</h1>
            </div>
        </div>  
    </section>
    <div id="spacer"></div>
    <div id="mid-text">
        <h3> Life can be busy, sometimes there's just not enough time to search for the ideal workout, let us put our tools to work for you!</h3>
    </div>
    <section id="mid-container">
        <div className="descriptor">
            
            <p> Rate your instructor on a scale of 1 to 5 stars.  Instructors with higher user ratings will display higher on the search list. </p>
                <img id="jonathan-borba" src={john} alt="Rate Your Instructor"/>
        </div>
        <div className="descriptor">
            <p> Find an instructor and workout in your area that match your fitness needs. </p>
                <img id="ryan-de-hamer" src={ryan} alt="Find A Workout"/>
        </div>
        <div className="descriptor">
            <p> Save a list of your favorite instructors.  Get notifications when they set up their next workout so you never miss out. </p>
                <img id="mika" src={mika} alt="Save Your Favorite Instructors"/>
        </div>
    </section>
    <div id="bottom-text">
       <h3> Choose your instructor, choose your regiment and that's it, let us do the rest!  Who says finding a workout needs to be work?</h3>
    </div>
    <div id="bottom">
        <img id="sven-mieke" src={sven} alt="Picture by Sven Mieke"/>
    </div>   
</div>
)
}

export default Home;