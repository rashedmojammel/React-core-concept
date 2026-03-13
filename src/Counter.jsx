import { useState } from "react"

export default function Counter(){

    const [count, setCount] = useState(0);
    const [count6, setCount6] = useState(0);

    function CountHandler() {
        const newCount = count + 1 ;
        setCount(newCount);

    }
    function Count4() {
        const newCount = count + 4;
        setCount(newCount);
    }
    function Count6() {
        const newCount = count + 6;
        const CountSixes = count6 + 1;
        setCount(newCount);
        setCount6(CountSixes);
    }
    const design = {
        border : '2px solid red'
    }
    return(

    
        <div style={design}>
            <h1>Sixes : {count6}</h1>

            {
                count > 50 && <p>Half Century</p>
            }

            <h1 >Count run: {count} </h1>
            <button onClick={CountHandler}>add</button>
            <button onClick={Count4}>add</button>
            <button onClick={Count6}>add</button>
        </div>
    )

}