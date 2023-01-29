import { useRef, useEffect, ReactNode, MouseEvent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface IModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export default function Modal({ children, closeModal }: IModalProps) {
  const portalElRef = useRef<HTMLDivElement>(document.createElement('div'));

  const handleClickCloseBtn = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    closeModal();
  };

  useEffect(() => {
    const { body } = document;
    portalElRef.current.id = 'modal';

    const makePortal = () => {
      body.style.overflow = 'hidden';
      body.appendChild(portalElRef.current);
    };

    const removePortal = () => {
      body.style.overflow = '';
      body.removeChild(portalElRef.current);
    };

    makePortal();
    return () => {
      removePortal();
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <ModalOverlay />
      <ModalBox>
        <CloseBtn onClick={(e) => handleClickCloseBtn(e)}>
          <img alt="close icon" src="/images/ic-close.svg" />
        </CloseBtn>
        {children}
      </ModalBox>
    </>,
    portalElRef.current,
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  margin: 0 auto;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
`;
