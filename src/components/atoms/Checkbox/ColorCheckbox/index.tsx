import styled from 'styled-components';
import ColorLabel from 'components/atoms/Label/ColorLabel';

interface IColorCheckboxPropTypes {
  label: string;
  isChecked: boolean;
  onClick: Function;
}

export default function ColorCheckbox({ label, onClick, isChecked }: IColorCheckboxPropTypes) {
  return (
    <Container onClick={(e) => onClick(e)}>
      <ColorLabel height={45} width={45}>
        {label}
      </ColorLabel>
      {isChecked && (
        <CheckIcon>
          <img alt="black check" src="/images/ic-check-black.svg" />
        </CheckIcon>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 45px;
  border-radius: 50%;
  cursor: pointer;
`;

const CheckIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
