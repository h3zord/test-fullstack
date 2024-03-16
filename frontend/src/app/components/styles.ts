/* eslint-disable prettier/prettier */
'use client'

import styled from 'styled-components'

export const DefaultInput = styled.input`
  border: 1.5px solid ${(props) => props.theme.colors.gray[400]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.radii.sm};
  width: 20rem;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray[400]};
  font-size: ${(props) => props.theme.fontSizes.md};
  }
`

export const DefaultButton = styled.button`
  all: unset;
  border: 2px solid ${(props) => props.theme.colors.yellow[400]};
  border-top: 1px solid;
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.theme.colors.yellow[400]};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[10]};
  text-align: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow[700]};
    color: white;
    cursor: pointer;
  }
`
export const IntroductionTitle = styled.section`
  width: 75vw;
  margin: ${(props) => props.theme.space[8]} auto ${(props) => props.theme.space[2]};
  border-bottom: 1.5px solid ${(props) => props.theme.colors.gray[300]};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[6]};
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  padding: ${(props) => props.theme.space[4]};
`