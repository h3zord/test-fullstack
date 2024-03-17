/* eslint-disable prettier/prettier */
'use client'

import styled from 'styled-components'

export const Main = styled.main`
  width: 75vw;
  margin: auto;
  padding: ${(props) => props.theme.space[2]};
`

export const CallToActionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
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