import React, { useState, useEffect } from 'react';

function JokeComponent() {
    // State to store the joke
    const [joke, setJoke] = useState('');
    const [dadJoke, setDadJoke] = useState('');

    function getJoke() {
        fetch('https://api.chucknorris.io/jokes/random')
            .then(response => response.json())
            .then(data => setJoke(data.value))
            .catch(error => console.error('Error fetching joke:', error));
    }

    function getDadJoke() {
        fetch('https://icanhazdadjoke.com/', { headers: {
            'Accept': 'application/json'
        }})
            .then(response => response.json())
            .then(data => setDadJoke(data.joke))
            .catch(error => console.error('Error fetching dad joke:', error));
    }

    // useEffect to fetch the joke
    useEffect(() => {
        getJoke();
        const theInterval = setInterval(getDadJoke, 100000);
        return () => clearInterval(theInterval)
    }, []); // Empty dependency array means this runs once on mount

    // Render the joke
    return (
        <div>
            <b>This is a Chuck Norris joke generator</b>
            <p>{joke}</p>
            <button onClick={getJoke}>Get ChuckNorris</button><br />
            <b>Here is a new dad joke every 10 sec</b>
            <p>{dadJoke}</p>
        </div>
    );
}

export default JokeComponent;
