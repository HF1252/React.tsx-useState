import React, { useState } from 'react';

const InputForm: React.VFC = () => {
    //ひとつのHookで複数の入力フォームの状態管理
    const [name, setName] = useState({ first: '', last: '' });
    return (
        <div>
            <input
                value={name.first}
                onChange={(e) =>
                    setName((prevName) => ({
                        //毎回書くのがめんどくさい場合prevを使用(...prev)
                        ...prevName,
                        first: e.target.value,
                        // last: prevName.last,
                    }))
                }
            />
            <input
                value={name.last}
                onChange={(e) =>
                    setName((prevName) => ({
                        ...prevName,
                        last: e.target.value,
                    }))
                }
            />
            <p>
                {name.first}
                {name.last}
            </p>
        </div>
    );
};

export default InputForm;
