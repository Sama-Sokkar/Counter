import { useEffect, useState } from "react";
import styled from "styled-components";
import { RiResetLeftLine } from "react-icons/ri";

function Counter() {
  const [count, setCount] = useState(() => {
    const num = localStorage.getItem("Count");
    return num ? Number(num) : 0;
  });

  useEffect(() => {
    localStorage.setItem("Count", count);
  }, [count]);

  useEffect(() => {
    const time = setInterval(() => {
      setCount((count) => count + 1);
    }, 10000);
    return () => clearInterval(time);
  }, []);

  return (
    <Container>
      <Reset onClick={() => setCount(0)}>
        <RiResetLeftLine />
      </Reset>
      <Row>
        <Button onClick={() => setCount((count) => count - 1)}>-</Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount((count) => count + 1)}>+</Button>
      </Row>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #116f6f;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  width: 5rem;
  height: 5rem;
  font-size: 3.5rem;
  border: #f5f5dc 2px solid;
  background-color: transparent;
  color: #f5f5dc;
  border-radius: 50%;
  cursor: pointer;
`;

const Reset = styled.button`
  border: none;
  background-color: transparent;
  color: #f5f5dc;
  font-size: 3rem;
  cursor: pointer;
`;

const Text = styled.div`
  font-size: 25rem;
  font-weight: bold;
  color: #f5f5dc;
  width: 6ch;
  text-align: center;
`;
