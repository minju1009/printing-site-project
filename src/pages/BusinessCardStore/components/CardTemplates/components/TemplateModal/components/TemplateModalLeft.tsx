/* eslint-disable react/jsx-one-expression-per-line */
import { ChangeEvent, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import { useRecoilValue } from 'recoil';
import { currentTemplateInfoState } from 'recoil/businessCardStore';
import { fitImg, flex, theme } from 'styles';

interface ITemplateModalLeftProps {
  handleCheckBoxClick: (e: ChangeEvent<HTMLInputElement>) => void;
  wantedDesignList: string[];
}

export default function TemplateModalLeft({ handleCheckBoxClick, wantedDesignList }: ITemplateModalLeftProps) {
  const { designList } = useRecoilValue(currentTemplateInfoState);
  const [selectedDesignCode, setSelectedDesignCode] = useState<string | undefined>(
    designList.find((item) => item.itemType === 'FRONT')?.designCode,
  );

  const frontImgInfo = useMemo(() => designList.find((item) => item.itemType === 'FRONT'), []);

  const mainImage = useMemo(
    () => designList.find((item) => item.designCode === selectedDesignCode)?.imgURL,
    [selectedDesignCode],
  );

  const handleImgBtnClick = (designCode: string | undefined) => {
    if (!designCode) return;
    setSelectedDesignCode(designCode);
  };

  return (
    <Container>
      <MainImgWrap>
        <MainImg>
          <img alt="main template" src={mainImage || frontImgInfo?.imgURL} />
        </MainImg>
      </MainImgWrap>

      <ImgListWrap>
        <ImgSelectorsWrap>
          <FrontImgWrap>
            <ImgBtn
              selected={selectedDesignCode === frontImgInfo?.designCode}
              onClick={() => handleImgBtnClick(frontImgInfo?.designCode)}
            >
              <ImgWrap>
                <img alt="small" src={frontImgInfo?.imgURL} />
              </ImgWrap>
            </ImgBtn>
          </FrontImgWrap>
          {designList
            .filter((item) => item.itemType === 'BACK')
            .map(({ imgURL, designCode }) => (
              <ImgSelector key={designCode}>
                <CheckBox
                  isChecked={wantedDesignList.includes(designCode)}
                  type="checkbox"
                  value={designCode}
                  onChange={(e) => handleCheckBoxClick(e)}
                />
                <ImgBtn selected={selectedDesignCode === designCode} onClick={() => handleImgBtnClick(designCode)}>
                  <ImgWrap>
                    <img alt="small" src={imgURL} />
                  </ImgWrap>
                </ImgBtn>
              </ImgSelector>
            ))}
        </ImgSelectorsWrap>
        <Direction>
          원하는 뒷면 디자인을 선택해주세요.(<span>{wantedDesignList.length}</span>/{designList.length - 1}개)
        </Direction>
      </ImgListWrap>
    </Container>
  );
}

interface IImgBtnStyle {
  selected: boolean;
}

interface ICheckBoxStyle {
  isChecked: boolean;
}

const Container = styled.div`
  background-color: ${theme.GREY_LIGHT_X3};
  height: 100%;
`;

const MainImgWrap = styled.div`
  ${flex('center', 'center')}
  padding: 100px 310px;
`;

const MainImg = styled.div`
  ${fitImg}
  width: 230px;
  height: 230px;

  box-shadow: 2px 4px 6px 0 rgba(0 0 0 / 20%);
  -webkit-box-shadow: 2px 4px 6px 0 rgb(0 0 0 / 20%);
  transition: 0.45s ease-in-out;
`;

const ImgListWrap = styled.div`
  height: 178px;
  text-align: center;
  background-color: ${theme.GREY_MEDIUM_X4};
  border-top: 1px solid ${theme.GREY_MEDIUM_X3};
  padding: 14px 0;
`;

const ImgSelectorsWrap = styled.ul`
  ${flex('center', 'flex-end')}
`;

const ImgSelector = styled.li`
  ${flex('center', 'center', 'column')}
`;

const CheckBox = styled.input<ICheckBoxStyle>`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 1px solid ${theme.GREY_MEDIUM_X2};
  background-color: white;
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    css`
      border-color: ${theme.BLUE_DARK};
      background-image: url('/images/ic-check-blue.svg');
      background-position: 40% 50%;
    `}
`;

const ImgBtn = styled.button<IImgBtnStyle>`
  padding: 12px;
  border: 1px solid transparent;

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${theme.BLACK};
    `};
`;

const ImgWrap = styled.div`
  ${fitImg}
  width:80px;
  height: 80px;
`;

const Direction = styled.div`
  span {
    color: ${theme.BLUE_DARK};
  }
`;

const FrontImgWrap = styled(ImgSelector)``;
