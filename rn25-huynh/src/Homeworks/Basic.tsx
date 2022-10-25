
import React from "react";
import ts from "typescript";
import imgBasic from "./IMG/1.jpg"
type Props = {

};
function Basic01({}:Props){
    return(
        <main>
            <div className="m-3 basic1">
            <img src="./IMG/1.jpg" alt="" />  
            <p>
            <h1> Clothing & Apparel </h1>
            <ul className={"mt-5"}>
                <li className={"mb-3"}>Accessory</li>
                <li className={"mb-3"}>Bags</li>
                <li className={"mb-3"}>Kid's fashion</li>
                <li className={"mb-3"}>Men's</li>
            </ul>
            </p>
            </div>
        </main>
    );
}
export default Basic01;
