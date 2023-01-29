/* eslint-disable react/jsx-one-expression-per-line */
import { useRecoilValue } from 'recoil';
import { currentTemplateInfoState } from 'recoil/businessCardStore';
import styled from 'styled-components';
import { flex, fontSize, theme } from 'styles';

export default function TemplateModalInfo() {
  const templateInfo = useRecoilValue(currentTemplateInfoState);

  const { templateName, templateDescription, templateProduct, templateOption, designList } = templateInfo;

  return (
    <Container>
      <Title>{templateName}</Title>
      <SubTitle>{templateDescription}</SubTitle>
      <Description>
        <span> 하나의 앞면 디자인에 </span>
        <span>
          <p>
            {designList.length - 1}
            가지
          </p>
          디자인이
        </span>
        <span>한 세트인 상품입니다.</span>
      </Description>
      <div>
        <Detail>
          <Dot />
          상품 : {templateProduct}
        </Detail>

        <Detail>
          <Dot />
          옵션 : {templateOption}
        </Detail>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${theme.GREY_LIGHT};
  padding: 43px 30px 24px 30px;
`;

const Title = styled.div`
  display: block;
  padding: 0 0 20px;
  font-size: ${fontSize.extraLarge};
`;

const SubTitle = styled.div`
  display: block;
  padding: 0 0 20px;
`;

const Description = styled.div`
  padding: 0 0 20px;
  span {
    display: block;
  }

  p {
    display: inline-block;
    font-weight: bold;
    margin-right: 3px;
  }
`;

const Detail = styled.div`
  ${flex('', 'center')}
  font-size: ${fontSize.small};
  margin: 0 0 8px;
  gap: 4px;
`;

const Dot = styled.span`
  width: 2px;
  height: 2px;
  background-color: ${theme.BLUE_DARK};
`;
