import React from 'react';
import styled from 'styled-components';

import { WalletTokenBalancesContainer, WalletWethBalanceContainer } from '../../account';
import { CheckWalletStateModalContainer } from '../../common/check_wallet_state_modal_container';
import { ColumnNarrow } from '../../common/column_narrow';
import { ColumnWide } from '../../common/column_wide';
import { Content } from '../common/content_wrapper';

const ColumnWideMyWallet = styled(ColumnWide)`
    margin-left: 0;

    &:last-child {
        margin-left: 0;
    }
`;

export const MyWallet = () => (
    <Content>
        <CheckWalletStateModalContainer>
            <ColumnNarrow>
                <WalletWethBalanceContainer />
            </ColumnNarrow>
            <ColumnWideMyWallet>
                <WalletTokenBalancesContainer />
            </ColumnWideMyWallet>
        </CheckWalletStateModalContainer>
    </Content>
);
