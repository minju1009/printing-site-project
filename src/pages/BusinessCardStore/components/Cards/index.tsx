import Modal from 'components/atoms/Modal';
import { useState } from 'react';
import styled from 'styled-components';
import { flex, theme } from 'styles';

export default function Cards() {
  const [showLabel, setShowLabel] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleLabel = () => {
    setShowLabel((prev) => !prev);
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  console.log(document.body.style.overflow);

  return (
    <Container>
      <Card onClick={toggleModal} onMouseEnter={toggleLabel} onMouseLeave={toggleLabel}>
        <ThumbnailWrap>
          <img alt="thumbnail" src="/template/굿 컴퍼니/thumbnail.png" />
          {showLabel && <CardLabel>3가지 디자인</CardLabel>}
        </ThumbnailWrap>
        <DescriptionWrap>
          <CardTitle>굿 컴퍼니</CardTitle>
          <LikeIcon>
            <img alt="like" src="/images/ic-like-gray.svg" />
          </LikeIcon>
        </DescriptionWrap>
      </Card>
      {showModal && (
        <Modal closeModal={toggleModal}>
          <div>hello Im Modal</div>
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')}
  flex-wrap: wrap;
  width: 1140px;
  margin: 0 auto;
  cursor: pointer;
`;

const Card = styled.div`
  width: 360px;
  height: 480px;
  margin-bottom: 30px;

  :hover {
    box-shadow: 2px 4px 6px 0 rgb(0 0 0 / 20%);
    -webkit-box-shadow: 2px 4px 6px 0 rgb(0 0 0 / 20%);
    transition: 0.45s ease-in-out;
  }
`;

const ThumbnailWrap = styled.div`
  position: relative;
  background-color: ${theme.GREY_LIGHT_X2};

  img {
    width: 100%;
  }
`;

const CardLabel = styled.span`
  position: absolute;
  left: 15px;
  bottom: 15px;
  padding: 5px 8px;
  background-color: white;
  border: 1px solid ${theme.GREY_MEDIUM_X2};
  border-radius: 2px;
`;

const DescriptionWrap = styled.div`
  ${flex('space-between', 'center')}
  padding : 4px 15px;
`;

const CardTitle = styled.span`
  font-weight: bold;
`;

const LikeIcon = styled.button``;
