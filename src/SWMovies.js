import React, { useState, useEffect } from 'react';

const SWMovies = () => {
    const [num, setNum] = useState(1)
    const [movie, setMovie] = useState('')
    useEffect(() => {
        fetchData()
    }, [num])

    const fetchData = async () => {
        const res = await fetch(`https://swapi.co/api/films/${num}/`)
        res.json().then(data => setMovie(data))
    }

    return (
        <div>
            <h1>Pick a movie</h1>
            <h4>{movie.title}</h4>
            <p>{movie.opening_crawl}</p>
            <select value={num} onChange={e => setNum(e.target.value)}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
            </select>
        </div>
    );
}

export default SWMovies;