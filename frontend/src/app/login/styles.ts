'use client'

import styled from 'styled-components'

export const IntroductionTitle = styled.h1`
  margin-top: 50px;
  font-size: ${(props) => props.theme.fontSizes['4xl']};
  color: ${(props) => props.theme.colors.gray[500]};
  text-align: center;
`

export const Form = styled.form`
  width: 40vw;
  margin: auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.space[2]};
  border: 2px solid ${(props) => props.theme.colors.gray[400]};
  border-radius: ${(props) => props.theme.radii.sm};
  padding: ${(props) => props.theme.space[10]};
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[3]};
  margin-top: ${(props) => props.theme.space[6]};
`

export const LoginButton = styled.button`
  all: unset;
  border: 1.5px solid ${(props) => props.theme.colors.yellow[400]};
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.theme.colors.yellow[400]};
  padding: ${(props) => props.theme.space[3]};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => props.theme.space[1]};

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.colors.yellow[700]};
    color: white;
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`
