import React, { useState } from 'react'
import { Planet } from '../components/Planet'


export const PlanetsSec = () => {

    const planets = [
        { name: 'Mars', isGasPlanet: false },
        { name: 'Mercury', isGasPlanet: false },
        { name: 'Earth', isGasPlanet: false },
        { name: 'Jupiter', isGasPlanet: true },
        { name: 'Venus', isGasPlanet: false },
        { name: 'Neptune', isGasPlanet: true },
        { name: 'Uranus', isGasPlanet: true }
    ]

    const [showGasPlanets, setshowGasPlanets] = useState(true);
    const [Clicked, setClicked] = useState(false)
    const showOtherPlanets = () => {
        setshowGasPlanets(!showGasPlanets);
        setClicked(!Clicked)
    }


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <div className="allPlanets">
                    printing All planets
                    {planets.map((planet) => {
                        return (<h4>{planet.name}</h4>)
                    })}
                </div>

                <div className="output" style={{ border: '1px solid black', padding: '35px' }}>

                    {Clicked ? "Printing Non Gas planets only" : "Printing Gas planets only"}
                    {planets.map((planet, key) => {
                        if (showGasPlanets) {
                            return <Planet key={key} name={planet.name} isGasPlanet={planet.isGasPlanet} />
                        }
                        return <Planet key={key} name={planet.name} isGasPlanet={!planet.isGasPlanet} />

                    })}
                </div>
                <div style={{ marginbottom: 'auto' }}>
                    <button onClick={showOtherPlanets}>{Clicked ? "Show Gas planets" : "Show Non Gaseous Planets"}</button>
                </div>
            </div>
        </>
    )
}