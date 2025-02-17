import { transparentize } from 'polished'
import { ReactNode } from 'react'
import { AlertTriangle } from 'react-feather'
import styled, { css } from 'styled-components'
import { Z_INDEX } from 'theme/zIndex'
import swapBgImage from "assets/images/swapBg.png"

import { AutoColumn } from '../Column'

export const PageWrapper = styled.div`
  padding: 28px 48px 28px 0px;
  display: flex;
  justify-content: end;
  width: 100%;
  background-image: url(${swapBgImage});
  background-attachment: fixed;
  background-size: cover;
  overflow-y: scroll;
  position: relative;
  height: calc(100vh - 75px);


  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.md}px`}) {
    padding-top: 48px;
  }

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`

// Mostly copied from `AppBody` but it was getting too hard to maintain backwards compatibility.
const SwapWrapperOuter = styled.main<{ isDark?: boolean }>`
  position: relative;
  z-index: ${Z_INDEX.default};
  transition: transform 250ms ease;
  width: 448px;

  &:before {
    content: ' ';
    display: flex;
    position: absolute;
    inset: 0;
    transform: scale(1.1);
    filter: blur(50px);
    z-index: -2;
  }
`

export const SwapWrapper = (
  props: React.ComponentProps<typeof SwapWrapperOuter>
) => {
  return (
    <SwapWrapperOuter {...props}>
      <SwapWrapperInner>{props.children}</SwapWrapperInner>
    </SwapWrapperOuter>
  )
}

const SwapWrapperInner = styled.div`
  border-radius: 24px;
  /* background: ${({ theme }) => theme.surface1}; */
  background: transparent;
  z-index: -1;
  padding: 8px;
  padding-top: 0px;
`

export const ArrowWrapper = styled.div<{ clickable: boolean }>`
  border-radius: 100%;
  height: 40px;
  width: 40px;
  position: relative;
  margin-top: -14px;
  margin-bottom: -24px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.secondaryCardColor};
  border: 4px solid;
  border-color: ${({ theme }) => theme.secondaryCardColor};

  z-index: 2;
  ${({ clickable }) =>
    clickable
      ? css`
          :hover {
            cursor: pointer;
            opacity: 0.8;
          }
        `
      : null}
`

// styles
export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`

const SwapCallbackErrorInner = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.critical)};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  font-size: 0.825rem;
  width: 100%;
  padding: 3rem 1.25rem 1rem 1rem;
  margin-top: -2rem;
  color: ${({ theme }) => theme.critical};
  z-index: -1;
  p {
    padding: 0;
    margin: 0;
    font-weight: 535;
  }
`

const SwapCallbackErrorInnerAlertTriangle = styled.div`
  background-color: ${({ theme }) => transparentize(0.9, theme.critical)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  border-radius: 12px;
  min-width: 48px;
  height: 48px;
`

export function SwapCallbackError({ error }: { error: ReactNode }) {
  return (
    <SwapCallbackErrorInner>
      <SwapCallbackErrorInnerAlertTriangle>
        <AlertTriangle size={24} />
      </SwapCallbackErrorInnerAlertTriangle>
      <p style={{ wordBreak: 'break-word' }}>{error}</p>
    </SwapCallbackErrorInner>
  )
}

export const SwapShowAcceptChanges = styled(AutoColumn)`
  background-color: ${({ theme }) => transparentize(0.95, theme.accent1)};
  color: ${({ theme }) => theme.accent1};
  padding: 12px;
  border-radius: 12px;
  margin-top: 8px;
`

export const SwapSection = styled.div<{ displayPercentage?: boolean }>`
  background-color: ${({ theme }) => theme.cardBlack};
  border-radius: 16px;
  color: ${({ theme }) => theme.neutral2};
  font-size: 14px;
  font-weight: 500;
  height: ${({ displayPercentage }) => (displayPercentage ? '165px' : '120px')};
  line-height: 20px;
  padding: 16px;
  position: relative;
  &:before {
    box-sizing: border-box;
    background-size: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    content: '';
    border: 1px solid ${({ theme }) => theme.surface2};
  }
  &:hover:before {
    border-color: ${({ theme }) => theme.deprecated_stateOverlayHover};
  }
  &:focus-within:before {
    border-color: ${({ theme }) => theme.deprecated_stateOverlayPressed};
  }
`

export const OutputSwapSection = styled(SwapSection)`
  border-bottom: ${({ theme }) => `1px solid ${theme.surface1}`};
`

export const ArrowContainer = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
