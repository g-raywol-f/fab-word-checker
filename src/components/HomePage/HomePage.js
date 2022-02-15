import React, { useState } from 'react';
import './HomePage.css';

function HomePage() {
    const [Text, setText] = useState("");
    const filter = [
        "게이", "고자", "니미", "도리", "박고", "벗어", "비하", 
        "빠구리", "시볼", "시파", "쉬블", "아갈", "아다", "야해", 
        "이반", "음부", "자지", "자해", "젖", "족까",
    ];
    const [FilteredText, setFilteredText] = useState(<p></p>);

    // fetch(url)
    //     .then(function(response) {
    //         response.text().then(function(text) {
    //         storedText = text;
    //         done();
    //         });
    //     });

    // function done() {
    //     document.getElementById('log').textContent = "Here's what I got! \n" + storedText;
    // }
    
    const onChange = (event) => {
        setText(event.target.value);
        if (event.target.value === "") setFilteredText(<p></p>);
    };

    const findIndex = (filter) => {
        let text = Text;
        let start = text.indexOf(filter[0]);
        let end = 0;
        let flag = false;
        const filterLength = filter.length;

        if (filter.length === 1) {
            return [start, start + 1];
        }

        if (text.indexOf(filter[0]) < 0) return [];

        let index = [];
        
        console.log("$$===============");
        while (!flag) {
            // 텍스트가 있고 필터가 있다
            // 필터의 첫 글자를 텍스트에서 찾는다
            // shortenText를 해서 다음 글자들이 이어지는지 확인한다
            // 아니면 첫 글자를 이후 텍스트에서 찾는다 
            if (start > text.length) {
                return index;
            }

            const short = shortenText(text.slice(start, text.length)); // 특수문자 지우기

            console.log("//====");
            console.log(`Short: ${short}`);
            console.log(short.slice(1, filter.length));
            console.log(filter.slice(1));
            console.log(short.slice(1, filter.length) === filter.slice(1));
            console.log("====//");

            if (short.slice(1, filter.length) === filter.slice(1)) {
                console.log([start, start + Text.slice(start).indexOf(filter[filterLength - 1]) + 1]);
                index.push([start, start + Text.slice(start).indexOf(filter[filterLength - 1]) + 1]);
            }

            const match = text.slice(start + 1, text.length).indexOf(filter[0]);

            if (match < 0) return index;

            start = start + match + 1; // 다음 매칭 글자 찾기
        }
        console.log("===============$$");
        return index;
    };

    const shortenText = (text) => {
        return text.replace(/[\s+&\/\\#,+()$~%.'":*!?<>{}]/g, '');
    }

    const onCheck = () => {
        const text = shortenText(Text);
        console.log(text);
        filter.find(word => {
            if (text.includes(word)) {
                let index = findIndex(word);
                console.log(index);
                setFilteredText(
                    <p>
                        {Text.slice(0, index[0][0])}
                        <span className="filtered">{Text.slice(index[0][0], index[0][1])}</span>
                        {Text.slice(index[0][1])}
                    </p>
                );
                console.log(Text.slice(index[0][0], index[0][1]));
                return;
                // for (let i = 0; i < index.length; i++) {
                //     let text = Text;
                //     console.log(text.slice(index[i][0], index[1] + 1));
                //     setFilteredText(
                //         <p>
                //             {text.slice(0, index[i][0])}
                //             <span className="filtered">
                //                 {text.slice(index[i][0], index[i][1] + 1)}
                //             </span>
                //             {text.slice(index[i][1] + 1)}
                //         </p>
                //     );
                // }
            }
        });
        setFilteredText(<p>{Text}</p>);
    };

    return (
        <div className="home">
            <h1>임시 금칙어 검사기</h1> 
            <textarea value={Text} onChange={onChange} />
            <button onClick={onCheck}>검사</button>
            <p>결과:</p>
            <div className="filter">{FilteredText}</div>
        </div>
    );
}

export default HomePage;