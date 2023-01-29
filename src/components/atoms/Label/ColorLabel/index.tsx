import styled from 'styled-components';

interface IColorLabel {
  children: string;
  width?: number;
  height?: number;
}

function ColorLabel(props: IColorLabel) {
  const { children, width = 30, height = 30, ...restProps } = props;

  return (
    <Container height={height} width={width} {...restProps}>
      <img alt={`color-${children}`} src={`/images/ic-filter-${children.toLowerCase()}.svg`} />
    </Container>
  );
}

export default ColorLabel;

interface IContainerStyle {
  width: number;
  height: number;
}

const Container = styled.div<IContainerStyle>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
