import { useState } from "react";
function FormCheckBox () {
    const [chekedItems, setChekedItems] =  useState([]);
    
    const handleChange = (event) =>{
        const bob = event.target

        if (bob.checked){
            setChekedItems([...chekedItems, bob.value])
        } else {
            setChekedItems(chekedItems.filter((item) => 
                item!==bob.value
            ))
        }
    };
    
    return(
    <>
        <form>
        <p>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" onChange={handleChange}/>
            <label htmlFor="vehicle1"> I have a bike</label>
        </p>
        <p>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" onChange={handleChange}/>
            <label htmlFor="vehicle2"> I have a car</label>
        </p>
        <p>
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" onChange={handleChange}/>
            <label htmlFor="vehicle3"> I have a boat</label>
        </p>
        </form>
        <div>
            {chekedItems.map((item, index) =>
                <p className="border bg-stone-400 p-2" key={index}>{item}</p>
            )}
        </div>
    </>
    )
}
export default FormCheckBox;