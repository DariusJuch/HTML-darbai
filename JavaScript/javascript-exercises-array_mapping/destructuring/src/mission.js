
let printMissionDetails = () => {
    const mission = {
        name: "Voyager 1",
        planet: "Jupiter",
        year: 1979,
        missionType: "Flyby",
      };

      const { planet, year} = mission;
      const arr = [planet, year]
      return arr;
      
}
printMissionDetails()
console.log(printMissionDetails());


