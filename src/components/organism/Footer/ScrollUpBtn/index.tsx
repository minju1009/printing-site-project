import { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

export default function ScrollUpBtn() {
  const [position, setPosition] = useState(0);

  const handleScrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handlePosition = () => {
      setPosition(window.scrollY);
    };

    window.addEventListener('scroll', handlePosition);
    return () => {
      window.removeEventListener('scroll', handlePosition);
    };
  }, []);

  return (
    <UpBtn position={position} onClick={handleScrollUp}>
      <img alt="scroll up arrow icon" src="/images/ic-scroll-up.svg" />
    </UpBtn>
  );
}

const slideIn = keyframes`
    from{
        right: -40px;
    }
    to{
        right: 0
    }
`;

const slideOut = keyframes`
    from{
        right: 0px;
    }
    to{
        right: -40px;
    }
`;

const UpBtn = styled.button<{ position: number }>`
  position: fixed;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  bottom: 10px;
  right: -50px;
  animation: ${slideOut} 0.2s ease-in-out;

  ${({ position }) =>
    position > 40 &&
    css`
      right: 10px;
      animation: ${slideIn} 0.2s ease-in;
    `}
`;
