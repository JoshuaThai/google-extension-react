import { useState } from 'react';
import './css/habit-creation.css'

import { X, Flame, Activity, Volleyball, HouseHeart, GraduationCap, Plus} from 'lucide-react'

function showPopup(show) {
    const popup = document.getElementById("popup");
    popup.style.display = show ? "block" : "none";
}

function HabitOption({name}) {
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <div className="habit-options">
                    <div id="testing">
                        <p style={{fontSize: "36px"}}>{name}</p>
                        <button style={{borderRadius: "50%"}} className="habit-plus"><Plus color="#000000"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function HabitWindow(props) {
    // document.getElementById("habitCategory").textContent = viewing ? viewing : "Habit Window";
    const descriptions = {
        "Popular": "Most Popular Habits",
        "Health": "Your Medical & Wellness Goals",
        "Exercise": "Fitness & Activity",
        "Financial": "Money Management",
        "Learning": "Educational & Skill Development",
        "Custom": "Create Your Own Habit"
    };
    var categorySelected = props.viewing;
    return (
    <div>
        <div id="habit-window">
            <h1 id ="habitCategory">{categorySelected}</h1>
            <p id="category-description">{descriptions[categorySelected]}
            </p>
            <div hidden={categorySelected !== "Popular"} id="custom-habit-form">
                <HabitOption name="🚶 Walk"/>
                <br />
                <HabitOption name="🚶 Walk"/>
                <br />
                <HabitOption name="🚶 Walk"/>
                <br />
            </div>
        </div>
    </div>
    );
}



function HabitCreate() {
    const [clicked, setClicked] = useState(false);
    const [category, setCategory] = useState("Popular");

    const handleClick = () => {
        setClicked(!clicked);
        showPopup(!clicked);
    };

    return (
        <div>
            <div id="popup">
                <div id="close-button" onClick={handleClick}><X size={36}/></div>
                <h2 id="habit-title" style={{fontSize: "36px"}}>Select a Habit to Track:</h2>
                <div id="habit-layout">
                    <div id="habit-types">
                        <button className='habit-type' title="Popular" onClick={() => setCategory("Popular")}>
                            <Flame color="#FF9500"/>
                        </button>
                        <button className='habit-type' title="Health" onClick={() => setCategory("Health")}>
                            <Activity color="#FF0000"/>
                            </button>
                        <button className='habit-type' title="Exercise" onClick={() => setCategory("Exercise")}>
                            <Volleyball color="#FF8400"/>
                            </button>
                        <button className='habit-type' title="Financial" onClick={() => setCategory("Financial")}>
                            <HouseHeart color="#078319"/>
                            </button>
                        <button className='habit-type' title="Learning" onClick={() => setCategory("Learning")}>
                            <GraduationCap color="#000000"/>
                            </button>
                        <button className='habit-type' title="Custom" onClick={() => setCategory("Custom")}>
                            <Plus color="#FF0000"/>
                            </button>
                    </div>
                    <HabitWindow viewing={category} />
                </div>
            </div>
            <button onClick={handleClick}>Create Habit</button>
        </div>
    );
}

export default HabitCreate;