import AllCountries                from './02fetchCountries.js'
import sortCountriesAlphabetically from './03sortCountriesAlphabetically.js'
import populateSelectOptions       from './04populateSelectOptions.js'

document.addEventListener("DOMContentLoaded", async() => {
    try {
        const countries = await AllCountries.setup();
        const sortCountries = sortCountriesAlphabetically.setup(countries)
        populateSelectOptions.setup(sortCountries);


        // console.log(countries);
    } catch (error) {
        console.error('Error in setup:', error);
    }
});

