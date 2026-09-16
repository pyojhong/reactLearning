import {useState, useEffect} from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === '') {
      return;
    }
    setToDo('');
    setToDos((currentArray) => [toDo, ...currentArray]);
    // ... 의 경우 array 의 값을 풀어서 쓰라는 의미이다.
    // 예시) const food = ['pizza', 'potato']
    // 예시) const newFood = ['tomato', food] => 이 경우 ['tomato', ['pizza', 'potato']] 가 된다.
    // 예시) 하지만 const newFood2 = ['tomato', ...food] => 이 경우 ['tomato', 'pizza', 'potato'] 가 된다.
  };

  return (
    <div>
      <h1>투두 리스트 ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder='할 일 입력' onChange={onChange}></input>
        <button>추가</button>
      </form>
      <hr></hr>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
