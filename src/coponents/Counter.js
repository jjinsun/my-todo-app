import { useState } from "react";

export default function Counter () {
  // count : 상태
  // setCount : count의 값을 업데이트하는 함수
  const [count, setCount] = useState(0);

  const handleButtonClick = (option) => {
    if(option === "plus") setCount((prev) => prev+1);
    else if(option === "minus") setCount((prev) => prev-1);
    else if(option === "reset") setCount(0);
  };

  return (
  <div>
    <div>현재값: {count}</div>
    <button onClick={() => handleButtonClick("minus")}>-1 감소</button>
    <button onClick={() => handleButtonClick("reset")}>초기화</button>
    <button onClick={() => handleButtonClick("plus")}>+1 증가</button>
  </div>
  );
}

