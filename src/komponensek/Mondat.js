function Mondat(props)
{
    return (
        <div>
            <div>
                {props.aktMondat.teljesMondat[0]}
                <select>{
                    props.aktMondat.kevertValasztas.map((elem, index) => (
                        <option key={index}>{elem}</option>
                    ))
                }</select>
                {props.aktMondat.teljesMondat[1]}
            </div>
            <button onClick={props.kovetkezoOnClick}>Következő</button>
        </div>
    );
}

export default Mondat;