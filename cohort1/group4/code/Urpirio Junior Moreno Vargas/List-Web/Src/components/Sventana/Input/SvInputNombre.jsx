import { useState } from "react";


export let SvLetter;
export default function SvInputNombre(){

    const [numLetter, setNumLetter] = useState()

    const HandleChange = (e) =>{
        setNumLetter(e.target.value);
       SvLetter = numLetter;
    };

    return(
        <input onChange={HandleChange} type="text" name='Nombre' value={numLetter} id='Nombre' maxLength={120}/>
    )
};