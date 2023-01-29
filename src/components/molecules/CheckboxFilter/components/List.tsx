import { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { flex } from 'styles';

interface IListProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
}

function List(props: IListProps) {
  const { children, ...restProps } = props;
  return <Container {...restProps}>{children}</Container>;
}

export default List;

const Container = styled.ul`
  ${flex('', '', 'column')}
  height: 126px;
  overflow-y: auto;
  gap: 10px;
`;
