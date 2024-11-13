let printCharacterDetails = () => {
    const character = {
        name: "Luke Skywalker",
        species: "Human",
        occupation: "Jedi Knight",
        homePlanet: "Tatooine",
      };

      const {species, occupation} = character;
      console.log(species, occupation);
      
}
printCharacterDetails();
