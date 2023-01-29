import styled, { css } from 'styled-components';
import { flex, theme } from 'styles';

interface ICheckboxPropTypes {
  label: string;
  onChange: Function;
  isChecked: boolean;
}

export default function Checkbox({ label, isChecked, onChange }: ICheckboxPropTypes) {
  return (
    <StyledLabel>
      <StyledInput isChecked={isChecked} name={label} type="checkbox" onChange={(e) => onChange(e)} />
      <StyledText>{label}</StyledText>
    </StyledLabel>
  );
}

const StyledLabel = styled.label`
  ${flex('', 'center')}
  width:fit-content;
`;

const StyledInput = styled.input<{ isChecked: boolean }>`
  appearance: none;
  width: 14px;
  height: 14px;
  border: 1px solid ${theme.GREY_MEDIUM_X2};
  cursor: pointer;

  ${({ isChecked }) =>
    isChecked &&
    css`
      border-color: ${theme.BLUE_DARK};
      background-image: url('/images/ic-check-blue.svg');
      background-position: 40% 50%;
    `}
`;

const StyledText = styled.p`
  line-height: 21px;
  margin-left: 4px;
  cursor: pointer;
`;
