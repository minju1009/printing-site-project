import { css } from 'styled-components';

export const font = (size: number, weight: number, lineHeight: number = 0) => css`
  font-size: ${size}px;
  font-weight: ${weight};
  line-height: ${lineHeight || size * 1.5}px;
`;

// export const fontSize = {
//   large: '28px',
//   medium: '18px',
//   regular: '16px',
//   small: '14px',
// };
