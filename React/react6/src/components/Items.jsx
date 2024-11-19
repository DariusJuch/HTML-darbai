import { useState } from "react";

function Items () {
    const [items, setItems] = useState([]);

    const addItem = () => {
        const newItem = `Item ${items.length + 1}`;
        setItems([...items, newItem]);
    };

    const removeItem = (itemIndex) => {
        const filtredArray = items.filter((_item, index) => index  !== itemIndex);
        setItems(filtredArray);
    }

    return (
        <>
        
            {items.map((item, index) => (
                <div key={index}>
                {item}
                <button onClick={()=>removeItem(index)}>unboxing</button>
                </div>
            ))}
            <button onClick={addItem}>push</button>
            {/* <button onClick={removeItem}>unboxing</button> */}
        </>
    )

}export default Items;