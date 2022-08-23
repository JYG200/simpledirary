
import { useState } from 'react';

const Diaryitem = ({onRemove,author, content, emotion, created_date,id}) => {

const [isEdit,setIsEdit] = useState(false);
const toggleIsEdit = () => setIsEdit(!isEdit);

const [localContent,setLocalContent] = useState(content);

const handelRemove = () => {
    if(window.confirm(`${id}번쨰 일기를 정말 삭제하시겠습니까?`)){
        onRemove(id);
    }
}

const handelQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
}
    return (
        <div className='Diaryitem'>
            <div className="info">
                <span>작성자: {author} | 감정 : {emotion}</span>
                <br/>
                <span className="date">{new Date(created_date).toLocaleString()}</span>
            </div>
            <div className="content">
                {isEdit ? (
                    <>
                        <textarea 
                        value={localContent} 
                        onChange ={(e) => 
                            setLocalContent(e.target.value)}
                        />
                    </>
                ):(
                    <>{content}</>
                )}
            </div>
            {isEdit ? (
                <>
                    <button onClick={handelQuitEdit}>수정 취소</button>
                    <button>수정 완료</button>
                </>
            ):(
                <>
                    <button onClick={handelRemove}>삭제하기</button>
                    <button onClick={toggleIsEdit}>수정하기</button>
                </>
            )}
            
        </div>
    );
};

export default Diaryitem;