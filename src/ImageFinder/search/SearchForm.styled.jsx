import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const Box = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.space[12]}px;
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.xs};
  overflow: hidden;
`;

export const SubmitButton = styled.button`
  display: inline-block;
  width: ${p => p.theme.space[6]}px;
  height: ${p => p.theme.space[6]}px;
  border: 0;
  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  :hover {
    opacity: 1;
  }
`;

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: ${p => p.theme.fontSizes.m};
  border: ${p => p.theme.borders.none};
  outline: none;
  padding-left: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[3]}px;
  ::placeholder {
    font: inherit;
    font-size: ${p => p.theme.fontSizes.m};
  }
`;

export const Error = styled(ErrorMessage)`
  width: 300px;
  margin-top: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.error};
`;
