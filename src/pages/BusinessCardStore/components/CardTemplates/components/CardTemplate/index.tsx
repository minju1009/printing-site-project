import { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import { flex, theme } from 'styles';
import { IDesignList } from 'types';

interface ICardTemplateProps {
  templateCode: string;
  templateName: string;
  designList: IDesignList[];
  handleTemplateClick: (templateCode: string) => void;
}

export default function CardTemplate({
  templateCode,
  templateName,
  designList,
  handleTemplateClick,
}: ICardTemplateProps) {
  const [hoveredTemplateCode, setHoveredTemplateCode] = useState('');

  const handleLikeIconClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    // 서버에 사용자가 Like한 templateCode 전송
  };

  return (
    <Template
      key={`${templateCode}-${templateName}`}
      onClick={() => handleTemplateClick(templateCode)}
      onMouseEnter={() => setHoveredTemplateCode(templateCode)}
      onMouseLeave={() => setHoveredTemplateCode('')}
    >
      <ThumbnailWrap>
        <img alt="thumbnail" src={`/template/${templateName}/thumbnail.png`} />
        {hoveredTemplateCode === templateCode && (
          <TemplateLabel>
            {designList.length - 1}
            가지 디자인
          </TemplateLabel>
        )}
      </ThumbnailWrap>
      <DescriptionWrap>
        <TemplateTitle>{templateName}</TemplateTitle>
        <LikeIcon onClick={(e) => handleLikeIconClick(e)}>
          <img alt="like" src="/images/ic-like-gray.svg" />
        </LikeIcon>
      </DescriptionWrap>
    </Template>
  );
}

const Template = styled.div`
  width: 360px;
  height: 480px;
  margin-bottom: 30px;

  :hover {
    box-shadow: 2px 4px 6px 0 rgba(0 0 0 / 20%);
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

const TemplateLabel = styled.span`
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

const TemplateTitle = styled.span`
  font-weight: bold;
`;

const LikeIcon = styled.button``;
