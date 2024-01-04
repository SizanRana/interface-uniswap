import { Percent } from '@uniswap/sdk-core'
// import { useLimitsEnabled } from 'featureFlags/flags/limits'
import { InterfaceTrade } from 'state/routing/types'
import styled from 'styled-components'

// import { ButtonText } from 'theme/components'
import { RowBetween, RowFixed } from '../Row'
import SettingsTab from '../Settings'

const StyledSwapHeader = styled(RowBetween)`
  margin-bottom: 10px;
  color: ${({ theme }) => theme.neutral2};
`

// const HeaderButtonContainer = styled(RowFixed)`
//   padding: 0 12px;
//   gap: 16px;
// `

// const StyledTextButton = styled(ButtonText)<{ $isActive: boolean }>`
//   color: ${({ theme, $isActive }) => ($isActive ? theme.neutral1 : theme.neutral2)};
//   gap: 4px;
//   font-weight: 485;
//   &:focus {
//     text-decoration: none;
//   }
//   &:active {
//     text-decoration: none;
//   }
// `

const SwapTitle = styled.h4`
  font-family: Syncopate;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
`

export enum SwapTab {
  Swap = 'swap',
  Limit = 'limit',
}

export default function SwapHeader({
  autoSlippage,
  chainId,
  trade,
  selectedTab,
  onClickTab,
}: {
  autoSlippage: Percent
  chainId?: number
  trade?: InterfaceTrade
  selectedTab: SwapTab
  onClickTab: (tab: SwapTab) => void
}) {
  // const limitsEnabled = useLimitsEnabled()
  return (
    <StyledSwapHeader>
      {/* <HeaderButtonContainer>
        <StyledTextButton $isActive={selectedTab === SwapTab.Swap} onClick={() => onClickTab?.(SwapTab.Swap)}>
          <Trans>Swap</Trans>
        </StyledTextButton>
        <SwapBuyFiatButton />
        {limitsEnabled && (
          <StyledTextButton $isActive={selectedTab === SwapTab.Limit} onClick={() => onClickTab?.(SwapTab.Limit)}>
            <Trans>Limit</Trans>
          </StyledTextButton>
        )}
      </HeaderButtonContainer> */}
      <SwapTitle>Swap</SwapTitle>
      <RowFixed>
        <SettingsTab autoSlippage={autoSlippage} chainId={chainId} trade={trade} />
      </RowFixed>
    </StyledSwapHeader>
  )
}
