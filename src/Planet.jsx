export const Planet = (props) => {
    return (
        <div style={{ display: props.isGasPlanet ? 'block' : 'none' }}>
            <h1 >{props.name}</h1>
        </div>
    )
}
