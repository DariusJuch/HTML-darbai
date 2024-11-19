import { useState } from "react";


function ObjectArr() {
    const [items, setItems] = useState({x: 10, y: 20})
    const addItems = ( ) => {
        // const newItem = {
        //     x: 100,
        //     y: 110,
        // };
            // setItems(newItem);
            setItems({
                ...items,
                y: 30,
            });
    };

    return(
        <>
            <button onClick={addItems}>Add Items</button>
        </>
    )
}

export default ObjectArr;