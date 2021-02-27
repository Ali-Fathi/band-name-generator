function bandName() {
    // get an element with Id of city
    let city = document.getElementById('city').value;
    // get an element with Id of pet
    let pet = document.getElementById('pet').value;
    // combine both pet name and the city together
    let yourBandName = city + " " + pet;
    
    // display band name with h3 heading for the users
    document.write(`<p>Your band name could be <strong>${yourBandName}</strong></p>`)
};