/* eslint-disable react/jsx-one-expression-per-line */
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import Modal from 'components/atoms/Modal';
import TemplateModalLeft from './components/TemplateModalLeft';
import TemplateModalRight from './components/TemplateModalRight';

import { flex, theme } from 'styles';

interface ITemplateModalProps {
  closeModal: () => void;
}

export default function TemplateModal({ closeModal }: ITemplateModalProps) {
  const [wantedDesignList, setWantedDesignList] = useState<string[]>([]);

  const handleCheckBoxClick = (e: ChangeEvent<HTMLInputElement>) => {
    const designCode = e.target.value;

    if (wantedDesignList.includes(designCode)) {
      setWantedDesignList((prev) => prev.filter((item) => item !== designCode));
    } else {
      setWantedDesignList([...wantedDesignList, designCode]);
    }
  };

  return (
    <Modal closeModal={closeModal}>
      <Container>
        <TemplateModalLeft handleCheckBoxClick={handleCheckBoxClick} wantedDesignList={wantedDesignList} />
        <TemplateModalRight wantedDesignList={wantedDesignList} />
      </Container>
    </Modal>
  );
}

const Container = styled.div`
  ${flex('', 'center')}
  width: 1140px;
  height: 620px;
  background-color: ${theme.GREY_LIGHT};
`;
