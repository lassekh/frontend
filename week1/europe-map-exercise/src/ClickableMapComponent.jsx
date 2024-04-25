import { useState, useEffect } from 'react';

const getCountryData = () => {
    const [currentCountryCode, setCurrentCountryCode] = useState('');
    const [countryData, setCountryData] = useState(null);
    const prevCountryCode = null;

    const handleCountryClick = (event) => {
        if(currentCountryCode) document.getElementById(currentCountryCode).style.fill = "";
        const countryId = event.target.id;
        if (countryId) {
            setCurrentCountryCode(countryId);
            event.target.style.fill = "blue";
        }
    };

    useEffect(() => {
        if (currentCountryCode) {
            fetch(`https://restcountries.com/v3.1/alpha/${currentCountryCode}`)
                .then(response => response.json())
                .then(data => setCountryData(data[0]))
                .catch(error => {
                    console.error('Error fetching country data:', error);
                });
        }
    }, [currentCountryCode]);

    return { handleCountryClick, countryData };
};

export default getCountryData


