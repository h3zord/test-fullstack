'use client'

import styled from 'styled-components'

export const Main = styled.main`
  width: 80vw;
  margin: auto;
  border: 1px solid black;
  margin-top: 100px;
  padding: ${(props) => props.theme.space[2]};
`

export const IntroductionText = styled.section`
  border-bottom: 1.5px solid ${(props) => props.theme.colors.gray[300]};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[6]};
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  padding: ${(props) => props.theme.space[4]};
`

export const CallToActionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: ${(props) => props.theme.space[8]} 0;
  border: 1px solid yellow;

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

  & > button {
    all: unset;
    background-color: ${(props) => props.theme.colors.yellow[700]};
    border: 1.5px solid ${(props) => props.theme.colors.yellow[700]};
    color: white;
    border-radius: ${(props) => props.theme.radii.sm};
    padding: ${(props) => props.theme.space[3]};
    cursor: pointer;
    margin-right: ${(props) => props.theme.space[5]};

    &:hover {
      background-color: white;
      border: 1.5px solid ${(props) => props.theme.colors.yellow[400]};
      color: ${(props) => props.theme.colors.yellow[400]};
    }
  }
`
