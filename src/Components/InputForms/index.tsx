import React, { useState } from 'react';

//複数のState Hook で複数の入力フォームの状態を管理
const InputForm: React.VFC = () => {
    // const [name, setName] = useState({ first: '', last: '' });
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <div>
            <input
                // value={name.first}
                // onChange={(e) =>
                //     setName((prevName) => ({
                //         ...prevName,
                //         first: e.target.value,
                //     }))
                // }
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                // value={name.last}
                // onChange={(e) =>
                //     setName((prevName) => ({
                //         ...prevName,
                //         last: e.target.value,
                //     }))
                // }
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <p>
                {/* {name.first}
                {name.last} */}
                {firstName}
                {lastName}
            </p>
        </div>
    );
};

export default InputForm;
