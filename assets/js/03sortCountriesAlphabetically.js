const sortCountriesAlphabetically = {
    setup: (countries) => {
        try {
            return countries.sort((a, b) => {
                const nameA = a.common.toUpperCase();
                const nameB = b.common.toUpperCase();
                if (nameA < nameB) return -1;
                if (nameA > nameB) return 1;
                return 0;
            });
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error; 
        }
    }
}

  export default sortCountriesAlphabetically;