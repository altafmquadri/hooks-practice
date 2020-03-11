import React, { useState, useEffect } from 'react';


const Clicker = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} time`
    })
    return (
        <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
    );
}

export default Clicker;