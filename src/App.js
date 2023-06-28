import React, {useState} from 'react';

function App() {
    const [likes, setLikes] = useState(0);
    const [value, setValue] = useState('Text in input')

    function increment() {
        setLikes(likes + 1)
    }

    function decrement() {
        setLikes(likes - 1)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <input
                type="text"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <hr/>
            <h1>{likes}</h1>
            <button onClick={decrement}>Decrement -</button>
            <button onClick={increment}>Increment +</button>
        </div>
    );
}

export default App;
