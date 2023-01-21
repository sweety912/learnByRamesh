import React,{useState} from "react";

const App=() =>
{

    const name =useState("Aarvi");
    const userNamw = name[0];

return(

    <div>
        <h2> hye : (userNamw)</h2>
    </div>
    )
}
export default App