import React from 'react';
import { useRef,useState } from 'react';

const DiaryEditor = () => {
    const authorInput = useRef();
    const contentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content:"",
        emotion:1,
    });   
    
    const handleChange = (e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit = () =>{
        if(state.author.length < 1){
            authorInput.current.focus();
            return;
        }
        else if(state.content.length < 5){
            contentInput.current.focus();
            return;
        }
        alert("저장 성공");
    };
    return (
        <div className='DiaryEditor'>
            <h2>오늘의 일기</h2>
            <div>
               <input
                ref = {authorInput}
                value={state.author}
                name="author"
                onChange = {handleChange}
                />
            </div>
            <div>
                <textarea 
                 ref={contentInput}
                 value={state.content}
                 name="content"
                 onChange = {handleChange}
                />
            </div>
            <div>
                <span>오늘의 점수 : </span>
                <select name="emotion" 
                        value={state.emotion}
                        onChange={handleChange} >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default DiaryEditor;