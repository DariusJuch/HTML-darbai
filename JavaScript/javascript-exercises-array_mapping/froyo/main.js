let requestFlavor = () =>{
    let flavor = prompt( "Season's greetings! What flavors of froyo would you like to enjoy today? write with space");
    const newArr = flavor.split(",");
    resultSet(newArr);

}
let resultSet = (flavors) => {
    const setFlavorArr = new Set(flavors);
    console.log("Froyo Flavor Totals:");
    setFlavorArr.forEach ( flav => {
        let sum = 0;
        flavors.forEach(item =>{
            if (flav === item){
                sum ++;
            }
        })
        console.log(`${flav}:  ${sum} servings`);
        
    })
}


requestFlavor();
