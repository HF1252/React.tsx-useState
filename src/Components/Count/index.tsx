import React, { useState } from 'react';

function initializeCount() {
    for (let i = 0; i < 10000; i++) {
        console.log(i);
    }
    return 0;
}

const Count: React.VFC = () => {
    // useStateの一般な書き方
    // const [count, setCount] = useState(0);

    //新しいStateが前のStateに基づき計算される場合
    // const [count, setCount] = useState(initializeCount());

    //二回目三回目以降の再レンダリングがなくなる
    const [count, setCount] = useState(() => {
        const initializeValue = initializeCount();
        return initializeValue;
    });
    return (
        <button
            // onClick={() => setCount(count + 1)}
            onClick={() => {
                setCount((prevCount) => prevCount + 1);
                setCount((prevCount) => prevCount + 1);
            }}
        >
            {count}
        </button>
    );
};

export default Count;
