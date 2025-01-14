'use client'

import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const CallToActionContainer = styled.section`
  display: flex;
  align-items: center;
  margin: ${(props) => props.theme.space[5]} 0;

  & > div {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[5]};
  }

  div > p {
    color: ${(props) => props.theme.colors.gray[500]};
    font-size: ${(props) => props.theme.fontSizes.xl};
  }

  div > span {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.gray[400]};
  }
`
export const CustomerFormContainer = styled.form`
  width: 75vw;
  margin: auto;
  padding: ${(props) => props.theme.space[2]};
`

export const CustomerFormContent = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[2]};
`

export const FormButtonContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.space[5]};
  margin-top: ${(props) => props.theme.space[5]};
`

export const StyledInputMask = styled(InputMask)`
  border: 1.5px solid ${(props) => props.theme.colors.gray[400]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.radii.sm};
  width: 20rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`
