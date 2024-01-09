import { useState } from "react";
import Mondat from "../komponensek/Mondat";

function Valaszto(props)
{
    const [aktMondat, setAktMondat] = useState(props.model.aktMondat);
    return (
        <div>
            <h2>Választó</h2>
            <p>{props.model.cim}</p>
            <Mondat aktMondat={aktMondat} kovetkezoOnClick={() => {
                setAktMondat(props.model.aktMondat);
            }} />
        </div>
    );
}

export default Valaszto;