'use client'

import styled from 'styled-components'

export const CustomersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space[5]};
  border: 1px solid red;

  & > span {
    margin-top: ${(props) => props.theme.space[3]};
    margin-bottom: ${(props) => props.theme.space[6]};
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.gray[400]};
  }
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
    width: 20%;

    :first-child {
      color: ${(props) => props.theme.colors.gray[500]};
      font-size: ${(props) => props.theme.fontSizes.lg};
      width: auto;
    }

    :last-child {
      font-size: ${(props) => props.theme.fontSizes.md};
      color: ${(props) => props.theme.colors.gray[400]};
      width: auto;
    }
  }

  & > :nth-child(2) {
    gap: ${(props) => props.theme.space.px};

    :first-child,
    :last-child {
      border: none;

      &:focus {
        box-shadow: none;
      }
    }
  }

  & > :nth-child(3) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${(props) => props.theme.space[2]};
    width: 15%;
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
