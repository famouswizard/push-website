// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { ButtonV2, ImageV2, ItemHV2, ItemVV2 } from './SharedStylingV2';
import useMediaQuery from 'hooks/useMediaQuery';

// Internal Configs
import { brbPartnersList } from 'utils/BRBPartnersList';
import { device } from '../config/globals';

export const Partners = ({ sectionRef }: { sectionRef: React.MutableRefObject<null> }) => {
  const isMobile = useMediaQuery(device.tablet);

  return (
    <PartnersContainer ref={sectionRef}>
      <Header>Partners</Header>
      <ItemVV2>
        {brbPartnersList.map((partnerRow, i) => {
          return (
            <ItemHV2
              key={i}
              gap="0px 164px"
              flexDirection={isMobile ? 'column' : 'row'}
            >
              {partnerRow?.map((item, index) => {
                return (
                  <PartnerItem key={index}>
                    <ItemVV2
                      maxHeight="65px"
                      width={isMobile ? '100%' : '300px'}
                      maxWidth={isMobile ? '100%' : '300px'}
                      height="65px"
                      margin="27px"
                    >
                      <PartnersButton
                        padding="0px"
                        borderRadius="0px"
                        background="transparent"
                        title={`${item?.title}`}
                        onClick={() => {
                          window.open(item?.link);
                        }}
                      >
                        <PartnersLogo
                          src={require(`../assets/brb/partners/${item?.srcref}.png`)}
                          srcSet={`${require(`../assets/brb/partners/${item?.srcref}@2x.png`)} 2x, ${require(`../assets/brb/partners/${item?.srcref}@3x.png`)} 3x`}
                          alt={`${item?.alt}`}
                          style={{
                            scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}`,
                          }}
                        />
                      </PartnersButton>
                    </ItemVV2>
                  </PartnerItem>
                );
              })}
            </ItemHV2>
          );
        })}
      </ItemVV2>
    </PartnersContainer>
  );
};

const PartnersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0px 0px 108px;
  @media (max-width: 768px) {
    margin: 0px 0px 114px;
  }
  @media (min-width: 1400px) {
    margin-top: 110px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr;
  color: #fff;
  margin: 0px 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
`;

const PartnersLogo = styled(ImageV2)`
  width: auto;
  height: auto;
  max-width: 241px;
  max-height: 65px;
`;

const PartnerItem = styled(ItemHV2)`
  max-width: 300px;
  display: flex;
  align-items: center;
  // flex: 0 0 33.333333%;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    // flex: 0 0 100%;
  }
`;

const PartnersButton = styled(ButtonV2)`
  &:before {
    content: none;
  }
  &:after {
    content: none;
  }
`;
