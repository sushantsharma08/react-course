import React, { useEffect } from 'react'
import { Planet } from './Planet'


export const PlanetsSec = () => {

    const planets = [
        { name: 'Mars', isGasPlanet: false },
        { name: 'Earth', isGasPlanet: false },
        { name: 'Jupiter', isGasPlanet: true },
        { name: 'Venus', isGasPlanet: false },
        { name: 'Neptune', isGasPlanet: true },
        { name: 'Uranus', isGasPlanet: true }
    ]

    const showOtherPlanets = () => {
        planets.map((p) => {
            p.isGasPlanet = !p.isGasPlanet
            console.log(p.name, p.isGasPlanet);
        }
        )
    }

    useEffect(() => {
        return () => {

        }
    }, [planets])

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
                    printing Gas planets only
                    {planets.map((planet, key) => {
                        return <Planet key={key} name={planet.name} isGasPlanet={planet.isGasPlanet} />
                    })}
                </div>

                <div style={{ marginTop: 'auto' }}>
                    <button onClick={showOtherPlanets}>Gas planets</button>
                </div>
            </div>
        </>
    )
}