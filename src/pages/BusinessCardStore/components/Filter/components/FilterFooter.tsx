import styled from 'styled-components';
import { flex, theme } from 'styles';

export default function FilterFooter() {
  return (
    <Container>
      <LeftWrap>
        <p>디자인 454개</p>
        <BtnWrap>
          <FilterBtn>최신순</FilterBtn>
          <Dot />
          <FilterBtn>인기순</FilterBtn>
        </BtnWrap>
      </LeftWrap>
      <RightWrap>
        <img alt="mode-thumbnail" src="/images/ic-thumbnail.svg" />
        <img alt="mode-preview" src="/images/ic-preview.svg" />
        <img alt="mode-like" src="/images/ic-like.svg" />
      </RightWrap>
    </Container>
  );
}

const Container = styled.div`
  ${flex('space-between', 'center')}
  width: 1140px;
  margin: 0 auto;
  padding: 20px 0;
`;

const LeftWrap = styled.div`
  ${flex('center', 'center')}
  gap: 12px;
`;

const BtnWrap = styled.div`
  ${flex('center', 'center')}
  gap: 10px;
`;

const FilterBtn = styled.button``;

const Dot = styled.span`
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: ${theme.BLACK};
`;

const RightWrap = styled.div`
  ${flex('center', 'center')}
  gap: 7px;
`;
