import { useState } from "react";

const Total = ({qty}) => {
    return (
        <div>
            <p>total price: ${...qty}</p>
            <p>tax (15%): ${...qty*0.15}</p>
            <p>total inc tax: $</p>

        </div>
    );
}
 
export default Total;