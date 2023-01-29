import { useState } from 'react';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { currentTemplateInfoState } from 'recoil/businessCardStore';

import CardTemplate from './components/CardTemplate';
import TemplateModal from './components/TemplateModal';
import { flex } from 'styles';
import { TEMPLATE_LIST } from './constant';

export default function CardTemplates() {
  const setTemplateInfo = useSetRecoilState(currentTemplateInfoState);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const handleTemplateClick = (templateCode: string) => {
    toggleModal();

    if (!templateCode) return;
    const newTemplateInfo = TEMPLATE_LIST.find((item) => item.templateCode === templateCode);

    if (!newTemplateInfo) return;
    setTemplateInfo(newTemplateInfo);
  };

  return (
    <>
      <Container>
        {TEMPLATE_LIST.map(({ templateCode, templateName, designList }) => (
          <CardTemplate
            key={templateCode}
            designList={designList}
            handleTemplateClick={handleTemplateClick}
            templateCode={templateCode}
            templateName={templateName}
          />
        ))}
      </Container>
      {showModal && <TemplateModal closeModal={toggleModal} />}
    </>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')}
  flex-wrap: wrap;
  width: 1140px;
  margin: 0 auto;
  cursor: pointer;
`;
