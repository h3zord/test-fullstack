/* eslint-disable prettier/prettier */
'use client'

import styled from 'styled-components'

export const Main = styled.main`
  width: 75vw;
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
    margin-right: ${(props) => props.theme.space[5]};
    padding: ${(props) => props.theme.space[2]} ${(props) => props.theme.space[3]};
    cursor: pointer;

    &:hover {
      background-color: white;
      border: 1.5px solid ${(props) => props.theme.colors.yellow[400]};
      color: ${(props) => props.theme.colors.yellow[400]};
    }
  }
`

export const CustomersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[5]};
`

export const CustomersContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1.5px solid ${(props) => props.theme.colors.gray[300]};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[7]};

  & > :nth-child(1),
  :nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: ${(props) => props.theme.space[1]};

    p {
      color: ${(props) => props.theme.colors.gray[500]};
      font-size: ${(props) => props.theme.fontSizes.lg};
    }

    span {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.gray[400]};
    }
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[2]};
  }
`

export const StatusIndicator = styled.div<{ $currentStatus?: string }>`
  width: 17px;
  height: 17px;
  border-radius: ${(props) => props.theme.radii.full};

  background-color: ${(props) => {
    if (props.$currentStatus === 'Ativo') {
      return props.theme.colors.green[500]
    }
    if (props.$currentStatus === 'Inativo') {
      return props.theme.colors.red[500]
    }
    if (props.$currentStatus === 'Aguardando ativação') {
      return props.theme.colors.yellow[700]
    } else {
      return props.theme.colors.gray[300]
    }
  }};
`

export const TestInput = styled.input`
  background-color: red;
`