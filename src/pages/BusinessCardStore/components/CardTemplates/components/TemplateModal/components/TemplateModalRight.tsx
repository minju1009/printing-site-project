/* eslint-disable react/jsx-one-expression-per-line */
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { currentTemplateInfoState } from 'recoil/businessCardStore';

import CardModalInfo from './TemplateModalInfo';
import { flex, fontSize, theme } from 'styles';

interface ICardModalRightProps {
  wantedDesignList: string[];
}

export default function CardModalRight({ wantedDesignList }: ICardModalRightProps) {
  const templateInfo = useRecoilValue(currentTemplateInfoState);
  const { price } = templateInfo;

  const handleSelectBtnClick = () => {
    // wantedDesignList, templateInfo[templateCode] 정보를 서버에 전송
  };

  return (
    <Container>
      <CardModalInfo />
      <div>
        <CardPriceWrap>
          <span>가격</span>
          <PriceNumber>{price.toLocaleString()}원</PriceNumber>
        </CardPriceWrap>
        <SelectBtnWrap>
          <SelectBtn disabled={!wantedDesignList.length} onClick={handleSelectBtnClick}>
            디자인 선택
          </SelectBtn>
          <LikeBtn>
            <img alt="like-white" src="/images/ic-like-white.svg" />
          </LikeBtn>
        </SelectBtnWrap>
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  ${flex('space-between', '', 'column')}
`;

const CardPriceWrap = styled.div`
  ${flex('space-between', 'center')}
  padding: 30px 0;
  margin: 0 30px;
  border-top: 1px solid ${theme.GREY_MEDIUM_X2};
`;

const PriceNumber = styled.span`
  color: ${theme.RED};
  font-size: ${fontSize.regular};
`;

const SelectBtnWrap = styled.div`
  ${flex('', 'center')}
  height: 50px;
`;

const SelectBtn = styled.button`
  color: white;
  width: 100%;
  height: 100%;
  padding: 1px;
  background-color: ${theme.BLUE_DARK};
  &:hover {
    background-color: ${theme.BLUE_LIGHT};
  }

  :disabled {
    background-color: ${theme.GREY_MEDIUM_X3};
  }
`;

const LikeBtn = styled.button`
  height: 100%;
  padding: 0 12px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  background-color: ${theme.BLUE_DARK};

  &:hover {
    background-color: ${theme.BLUE_LIGHT};
  }
`;
