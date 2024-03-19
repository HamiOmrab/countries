const AllCountries = {
    setup: async () => {
        // const apiUrl = 'https://restcountries.com/v3.1/independent';
        const apiUrl = './assets/json/allCountries.json';
        let countriesArray = [];
        try {
            const response = await fetch(apiUrl);
            const data     = await response.json();

            data.forEach((country) => {
                let countNameObj = {
                                    common:   country.name.common, 
                                    official: country.name.official
                };
                countriesArray.push(countNameObj);
            });
            return countriesArray;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Throw the error to handle it in the calling code
        }
    }
}

export default AllCountries;