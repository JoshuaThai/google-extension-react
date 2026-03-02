import { useState } from 'react';
import './css/habit-creation.css'

import { X, Flame, Activity, Volleyball, HouseHeart, GraduationCap, Plus, ChevronLeft} from 'lucide-react'

function showPopup(show) {
    const popup = document.getElementById("popup-container");
    popup.style.display = show ? "block" : "none";
}

function HabitOption({name}) {
    return (
        <div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <div className="habit-options">
                    <div id="habit-container">
                        <p style={{fontSize: "36px"}}>{name}</p>
                        <button style={{borderRadius: "50%"}} className="habit-plus">
                            <Plus color="#000000"/>
                        </button>
                    </div>
                </div>
            </div>
            <br />
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
            <div hidden={categorySelected !== "Popular"} className="custom-habit-form">
                <HabitOption name="🚶 Walk"/>
                <HabitOption name="🏃‍♂️ Run"/>
                <HabitOption name="💧 Drink Water"/>
                <HabitOption name="🛌 Sleep"/>
                <HabitOption name="📚 Study"/>
            </div>
            <div hidden={categorySelected !== "Health"} className="custom-habit-form">
                <HabitOption name="🍽️ Eat Snack"/>
                <HabitOption name="🪥 Brush Teeth"/>
                <HabitOption name="💧 Drink Water"/>
                <HabitOption name="🛌 Sleep"/>
                <HabitOption name="🧘 Meditate"/>
            </div>
            <div hidden={categorySelected !== "Exercise"} className="custom-habit-form">
                <HabitOption name="🚶 Walk"/>
                <HabitOption name="🏃‍♂️ Run"/>
                <HabitOption name="🚴 Bike"/>
                <HabitOption name="🏋️ Lift Weights"/>
                <HabitOption name="🤸 Stretch"/>
                <HabitOption name="🧘 Meditate"/>
            </div>
            <div hidden={categorySelected !== "Financial"} className="custom-habit-form">
                <HabitOption name="💰 Save Money"/>
                <HabitOption name="📈 Invest"/>
                <HabitOption name="📉 Spend Less"/>
                <HabitOption name="🧾 Pay Bills"/>
                <HabitOption name="📝 Apply for Jobs"/>
            </div>
            <div hidden={categorySelected !== "Learning"} className="custom-habit-form">
                <HabitOption name="📚 Study"/>
                <HabitOption name="🧑‍🏫 Attend Class"/>
                <HabitOption name="📝 Take Notes"/>
                <HabitOption name="📖 Read"/>
                <HabitOption name="🧑‍💻 Code"/>
            </div>
        </div>
    </div>
    );
}



function HabitCreate() {
    const [clicked, setClicked] = useState(false);
    const [category, setCategory] = useState("Popular");

    const handleClick = () => {
        handleSelect(category);
        setClicked(!clicked);
        showPopup(!clicked);
    };

    const handleSelect = (categoryName) => {
        // if(categoryName == "Custom"){
        //     console.log("Custom category selected");
        //     document.getElementById("habit-layout").hidden = true;
        //     console.log(document.getElementById("habit-layout").hidden);
        // }
        var availableCategories = document.getElementsByClassName("habit-type");
        for (var i = 0; i < availableCategories.length; i++) {
            if (availableCategories[i].title === categoryName) {
                availableCategories[i].style.backgroundColor = "#b9b7b7";
            } else {
                availableCategories[i].style.backgroundColor = "#ffffff";
            }
        }
    }

    return (
        <div>
            <div id = "popup-container">
                <div id="popup">
                    <div id="back-button" onClick={() => setCategory("Popular")} hidden={category !== "Custom"}>
                        <ChevronLeft size={36}/>
                        </div>
                    <div id="close-button" onClick={handleClick}><X size={36}/></div>
                    {category !== "Custom" ? (
                        <div>
                            <h2 id="habit-title" style={{fontSize: "36px"}}>Select a Habit to Track:</h2>
                            <div id="habit-layout">
                                <div id="habit-types">
                                    <button className='habit-type' title="Popular" 
                                    onClick={() => {setCategory("Popular"); handleSelect("Popular");}}>
                                        <Flame color="#FF9500"/>
                                    </button>
                                    <button className='habit-type' title="Health" onClick={() => {setCategory("Health"); handleSelect("Health");}}>
                                        <Activity color="#FF0000"/>
                                        </button>
                                    <button className='habit-type' title="Exercise" onClick={() => {setCategory("Exercise"); handleSelect("Exercise");}}>
                                        <Volleyball color="#FF8400"/>
                                        </button>
                                    <button className='habit-type' title="Financial" onClick={() => {setCategory("Financial"); handleSelect("Financial");}}>
                                        <HouseHeart color="#078319"/>
                                        </button>
                                    <button className='habit-type' title="Learning" onClick={() => {setCategory("Learning"); handleSelect("Learning");}}>
                                        <GraduationCap color="#000000"/>
                                        </button>
                                    <button className='habit-type' title="Custom" onClick={() => {setCategory("Custom"); handleSelect("Custom");}}>
                                        <Plus color="#FF0000"/>
                                        </button>
                                </div>
                                <HabitWindow viewing={category} />
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h2 id="habit-title" style={{fontSize: "36px"}}>Create Habit:</h2>
                            <div id="create-habit">
                                <p>YES!</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <button onClick={handleClick}>Create Habit</button>
        </div>
    );
}

export default HabitCreate;