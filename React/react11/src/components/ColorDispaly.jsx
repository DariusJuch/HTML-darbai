import { useState } from "react";
import { useEffect } from "react";
import HexaColor from "./HexaColor";

const ColorDisplay = () => {
    const [colors, setColors] = useState([]);

    useEffect (() => {
        const newColors = Array.from({length:5}, ()=> HexaColor())
    setColors(newColors);
    }, []);
    
    return (
        <>
        <div className=" flex flex-col justify-center items-center ">
        <div className=" text-center p-5">
            <h1>Random Hexademical Color</h1>
        
            <div className=" flex flex-col w-96 h-80 m-0">
                {colors.map((color, index)=> (
                    <div 
                    key={index}
                    style={{
                        backgroundColor: color,
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        width: "100%",
                        height: "5rem",
                    }}>
                        {color}
                    </div>
                ))}

            </div>
        </div>
        </div>
        </>
    )
}

export default ColorDisplay;