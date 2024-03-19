import {selectCountry} from './01variables.js';

const populateSelectOptions = {
    setup: (countries) => {
        try {
            countries.forEach(country => {
                // console.log(country);
                const option = document.createElement('option');
                option.value = country.common;
                option.textContent = (country.common === country.official) ? country.common : `${country.common} (${country.official})`;
                selectCountry.appendChild(option);
            }); 
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; 
        }
    }
}

  export default populateSelectOptions;