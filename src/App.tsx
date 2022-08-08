import React from 'react';
import Count from './Components/Count';
import InputForm from './Components/InputForm';
import InputForms from './Components/InputForms';
import './App.css';

function App() {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {/* <Count /> */}
            {/* <InputForm /> */}
            <InputForms />
        </div>
    );
}

export default App;
