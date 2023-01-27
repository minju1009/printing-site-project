import { ReactNode } from 'react';
import styled from 'styled-components';
import { fontSize, theme } from 'styles';

interface IFilterLabel {
  children: ReactNode;
  weight?: number;
  color?: string;
}

function FilterLabel(props: IFilterLabel) {
  const { children, color = theme.BLACK, weight = 400, ...restProps } = props;

  return (
    <Text color={color} weight={weight} {...restProps}>
      {children}
    </Text>
  );
}

export default FilterLabel;

interface ITextStyle {
  weight: number;
  color: string;
}

const Text = styled.span<ITextStyle>`
  display: block;
  padding: 9px 15px;
  border-radius: 100px;
  background-color: ${theme.GREY_LIGHT};
  font-size: ${fontSize.small};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
`;
