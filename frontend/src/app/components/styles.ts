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

export const DefaultSelect = styled.select`
  border: 1.5px solid ${(props) => props.theme.colors.gray[400]};
  padding: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.radii.sm};
  width: 20rem;
  color: ${(props) => props.theme.colors.gray[400]};
  font-size: ${(props) => props.theme.fontSizes.md};
  background-color: white;
`

export const DefaultButton = styled.button<{ $reverseHover?: boolean }>`
  all: unset;
  width: 5rem;
  border: 2px solid ${(props) => props.theme.colors.yellow[400]};
  border-top: 1px solid;
  border-radius: ${(props) => props.theme.radii.sm};
  color: ${(props) => props.$reverseHover ? 'white' : props.theme.colors.yellow[400]};
  background-color: ${(props) => props.$reverseHover && props.theme.colors.yellow[700]};
  padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[5]};
  text-align: center;

  &:hover {
    background-color: ${(props) => props.$reverseHover ? 'white' : props.theme.colors.yellow[700]};
    color: ${(props) => props.$reverseHover ? props.theme.colors.yellow[400] : 'white'};
    cursor: pointer;
  }
`

export const DefaultErrorContainer = styled.div`
  font-size: ${(props) => props.theme.fontSizes.sm};
  height: ${(props) => props.theme.space[4]};
  color: ${(props) => props.theme.colors.red[400]};
`


export const IntroductionTitle = styled.section`
  width: 75vw;
  margin: ${(props) => props.theme.space[10]} auto ${(props) => props.theme.space[2]};
  border-bottom: 1.5px solid ${(props) => props.theme.colors.gray[300]};
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.space[6]};
  color: ${(props) => props.theme.colors.gray[500]};
  font-size: ${(props) => props.theme.fontSizes['3xl']};
  padding: ${(props) => props.theme.space[4]};
`

export const WelcomeCard = styled.section`
  position: absolute;
  top: 0;
  right: ${(props) => props.theme.space[2]};
  border: 2px solid ${(props) => props.theme.colors.gray[300]};
  border-top: none;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.space[1]};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.md};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: ${(props) => props.theme.space[1]};

  img {
    border-radius: ${(props) => props.theme.radii.lg};
  }
`