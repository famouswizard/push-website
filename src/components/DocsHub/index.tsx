
// React + Web3 Essentials
import React, { useState } from 'react';
import styled, { keyframes } from "styled-components";

// External Components
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import CodeBlock from '@theme/CodeBlock';
import Layout from '@theme/Layout';
import clsx from 'clsx';

// Internal Components
import { A, Button, H2, ItemH, ItemV, Section, Span } from '@site/src/css/SharedStyling';
import Footer from '@site/src/segments/Footer';
import FAQ from './faq';

// Import Assets
import ArrowUp from "@site/static/assets/docs/ArrowUpRight-pink.svg";
import { FiArrowUpRight } from 'react-icons/fi';

// Internal Configs
import { device } from '@site/src/config/globals';
import "./styles.css";

interface IQuickstartItem {
  title: string;
  codeblock: string;
}

const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Push Notification Quickstart',
    codeblock: `// Import Push SDK & Ethers
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Using random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a notification to users of your protocol
const apiResponse = await userAlice.channel.send(['*'], { 
  notification: {
    title: 'Hello World Notification',
    body: 'Web3 native notifications are here!',
  }
});`
  },
  {
    title: 'Push Chat Quickstart',
    codeblock: `// Import Push SDK & Ethers
import { PushAPI } from '@pushprotocol/restapi';
import { ethers } from 'ethers';

// Using random signer from a wallet, ideally this is the wallet you will connect
const signer = ethers.Wallet.createRandom();

// Initialize wallet user, pass 'prod' instead of 'staging' for mainnet apps
const userAlice = await PushAPI.initialize(signer, { env: 'staging' });

// Send a message to Bob
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);


`
  },
]

type DevGuideItems = {
  title: string;
  description: JSX.Element;
  codeblock?: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
};

const DevGuide: DevGuideItems[] = [
  {
    title: 'Notifications',
    Svg: require('@site/static/assets/docs/notification.svg').default,
    link: '/docs/notifications',
    description: (
      <>
        Explore different ways of sending and receiving notifications and more.

      </>
    ),
    codeblock: `// Initialize wallet user
const userAlice = await PushAPI.initialize(signer);

// Send a notification to users of your protocol
const response = await userAlice.channel.send(['*'], { 
  notification: {
    title: 'Hello World Notification',
    body: 'Web3 native notifications are here!',
  }
});`
  },
  {
    title: 'Push Chat',
    Svg: require('@site/static/assets/docs/message.svg').default,
    link: '/docs/chat',
    description: (
      <>
        Learn about the details of Push Chat and how to do web3 native messaging.
      </>
    ),
    codeblock: `// Initialize wallet user
const userAlice = await PushAPI.initialize(signer);

// Send message
const aliceMessagesBob = await userAlice.chat.send(
  '0x99A08ac6254dcf7ccc37CeC662aeba8eFA666666', 
  {content: "Gm gm! It's a me... Mario"}
);`
  },
  {
    title: 'Push Spaces',
    Svg: require('@site/static/assets/docs/spaces.svg').default,
    link: 'https://www.npmjs.com/package/@pushprotocol/restapi#for-spaces',

    description: (
      <>
        Learn about Push Spaces, the web3 native, token gated way of conducting spaces.
      </>
    ),
  },
  {
    title: 'Push Video Calls',
    Svg: require('@site/static/assets/docs/video.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/integrating-push-video',

    description: (
      <>
        Learn about the details of Push Video Calls and how to easily integrate it.
      </>
    ),
  },
  {
    title: 'Examples',
    Svg: require('@site/static/assets/docs/star.svg').default,
    link: 'https://github.com/ethereum-push-notification-service/push-sdk/tree/main/packages/examples',
    description: (
      <>
        Examples to showcase the power of Push Protocol’s communication stack.
      </>
    ),
  },
  {
    title: 'Showrunners',
    Svg: require('@site/static/assets/docs/receive-notifs.svg').default,
    link: 'https://docs.push.org/developers/developer-guides/sending-notifications/using-showrunners-scaffold-gasless',
    description: (
      <>
        Showrunners Framework and how to boost your web3 communications.

      </>
    ),
  }
]

type SdkListItems = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

const SdkList: SdkListItems[] = [
  {
    title: 'SDK Starter Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk',
  },
  {
    title: 'REST API',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-restapi',
  },
  {
    title: 'React Native',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-reactnative',
  },
  {
    title: 'Socket',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-socket',
  },
  {
    title: 'UIWeb',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiweb',
  },
  {
    title: 'UI Embed',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details/pushprotocol-uiembed',
  }
]


const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  { title: 'How do I contact customer support?', content: 'You can try telekinesis, but we recommend using our contact form instead.' },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  { title: 'How can I use Push as an end-user?', content: 'Content for Section 3' },
  { title: 'What are the web3 communication products launched by Push?', content: 'Content for Section 3' },
  { title: 'Do I have to pay to send notifications?', content: 'Content for Section 3' },
];

function QuickstartList({ title, codeblock, Svg }: IQuickstartItem) {
  
  return (
    <PopularQuickiesCard>
      <PopularQuickiesHeader>
        <PopularQuickiesTitle>{`${title}`}</PopularQuickiesTitle>
      </PopularQuickiesHeader>
      
      <PopularQuickiesContent>
        <PopularQuickiesCodeBlock
          language="jsx"
          showLineNumbers={true}
        >
          {codeblock}
        </PopularQuickiesCodeBlock>
      </PopularQuickiesContent>
    </PopularQuickiesCard>
  );
}

function GuideList({ title, Svg, description, codeblock, link }: DevGuideItems) {
  const [content, setContent] = useState<number>(0);

  return (
    <TechDocCard>
    {/* <Link to={link} target='_blank'> */}
      <TechDocContent
        onClick={(e) => {e.preventDefault(); window.location.href = link}}
        hoverBackground="transparent"
      >
        <ItemV
          alignSelf="stretch"
          margin="0px 8%"
        >
          <ItemV
            padding="0px 0px 30px 0px"
            alignItems="flex-start"
          >
            <TechDocIcon><Svg /></TechDocIcon>
            <TechDocTitle>{title}</TechDocTitle>
          </ItemV>
          
          {codeblock &&
            <TechDocSwitcher
              gap="10px"
            >
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(0);
                }}
                background={content == 0 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 0 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                Overview
              </Button>
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  setContent(1);
                }}
                background={content == 1 ? 'var(--ifm-color-primary)' : 'var(--ifm-color-background)'}
                color={content == 1 ? 'var(--ifm-color-primary-inverse)' : 'var(--ifm-color-content)'}
              >
                API
              </Button>
            </TechDocSwitcher>
          }

          <ItemV
            alignItems="stretch"
          >
            {content == 0 &&
              <TechDocOverview>{description}</TechDocOverview>
            }
          </ItemV>
        </ItemV>

        {content == 1 && codeblock && 
          <TechDocCodeBlock
            language="jsx"
          >
            {codeblock}
          </TechDocCodeBlock>
        }
      </TechDocContent>
    </TechDocCard>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <section>
      <HeroHeader className={clsx('hero hero--primary')}>
        <div className="section-container" style={{zIndex: '1'}}>
          <h1 className="hero__title">Push Documentation Hub</h1>
          <p className="hero__subtitle">Get started with building native web3 communition for your protocol!</p>
          <div className='spacing-small pointer'>
            <Link
              className='hero__button'
              to="/docs/chat">
              <Span padding="0 10px 0 0" fontSize="18px">Get Started</Span>
              <FiArrowUpRight size={16} />
            </Link>
          </div>
        </div>
        <ItemV
          position="absolute"
          bottom="-25%"
          left="0"
          right="0"
          height="50%"
        >
          <PulseStatic />
          <Pulse>
            <Pulsate stagger={0}></Pulsate>
            <Pulsate stagger={1}></Pulsate>
            <Pulsate stagger={2}></Pulsate>
            <Pulsate stagger={3}></Pulsate>
            <Pulsate stagger={4}></Pulsate>
            <Pulsate stagger={5}></Pulsate>
            <Pulsate stagger={6}></Pulsate>
          </Pulse>
        </ItemV>
      </HeroHeader>
      
      <section className='main-section'>
          <HomepageSection alignItems="flex-start">
            <HomepageSubHeader>
              Popular Quickies
            </HomepageSubHeader>

              <PopularQuickiesList>
                {QuickstartItems.map((props, idx) => (
                  <QuickstartList key={idx} {...props} />
                ))}
              </PopularQuickiesList>
          </HomepageSection>

          <HomepageSection>
            <HomepageSubHeader>
              Technical Documentation
            </HomepageSubHeader>
            <TechDocCardList>
              {DevGuide.map((props, idx) => (
                <GuideList key={idx} {...props} />
              ))}
            </TechDocCardList>
        </HomepageSection>
        
        <HomepageSection>
          <ItemH justifyContent="flex-start">
            <HomepageSubHeader>
              Push SDK
            </HomepageSubHeader>
            <Link to='https://docs.push.org/developers/developer-tooling/push-sdk/sdk-packages-details' target='_blank'>
              <div className='hero_home_explore'>
                <p className='hero_home_explore_link'>
                  Explore SDK
                </p>
                <ArrowUp className='arrowUp-icon' />
              </div>
            </Link>
          </ItemH>
            
          
          <PushSdkCardList justifyContent="flex-start">
            {SdkList.map((item, idx) => (
              <PushSdkCard>
                <PushSdkContent
                  href={item.link}
                  target="_blank"
                >
                  <div className='sdk-container-inner'>
                    <div className='sdk-title spacing-small'>
                      {item.title}
                    </div>
                    <div className='sdk-icon'>

                     <FiArrowUpRight size={24} />
                    </div>
                  </div>
                </PushSdkContent>
              </PushSdkCard>
            ))}
          </PushSdkCardList>
          
            {/* <div className='Faqs-main-container'>
              <div className='sub-container'>
                <span className="hero_home_Faq_header">
                  Frequently Asked Questions
                </span>
                <Link to='https://push.org/faq' target='_blank'>
                  <div className='hero_home_explore'>
                    <p className='hero_home_explore_link'>
                      Explore FAQs
                    </p>
                    <FiArrowUpRight className='arrowUp-icon' />
                  </div>
                </Link>
              </div>
              <FAQ />

            </div> */}
        </HomepageSection>
      </section>

      <Footer />
    </section>
  );
}

const HeroHeader = styled.header`
  padding: 4rem 0;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const pulseStaticAnim = keyframes`
  100% { 
    opacity: 0.25;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%);
  }
`

const PulseStatic = styled.div`
  width: 40px;
  height: 40px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  animation: ${pulseStaticAnim} 5s ease-out forwards;
  z-index: 2;
`

const Pulse = styled.div`
  width: 40px;
  height: 40px;
  background: var(--ifm-color-primary-preferred);
  border-radius: 50%;
  position: relative;
`

const pulsateAnim = keyframes`
  100% { 
    opacity: 0;
    transform: scale(12);
  }
`

const Pulsate = styled.span`
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  border-radius: inherit;
  opacity: 0.8;
  animation: ${pulsateAnim} 6s ease-out infinite;
  animation-delay: calc(1s * ${props => (props.stagger ? props.stagger : 1)});
`

const TechDocIcon = styled(ItemV)`
  align-self: flex-start;
  & svg {
    height: 44px;
    width: 44px;
    color: pink;
    margin: 0 0 1rem 0;
  }
`;

const HomepageSection = styled(Section)`
  margin-top: 70px;
  margin-bottom: 30px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const HomepageSubHeader = styled(H2)`
  font-family: var(--ifm-font-family-base);
  font-weight: 600;
  font-size: 36px;
  align-items: start;
  margin-bottom: 30px;
  flex: 1;

  color: var(--ifm-color-primary-text);
`;

const PopularQuickiesList = styled(ItemH)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  position: relative;
`;

const PopularQuickiesCard = styled(ItemV)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(50% - 21.33px);
  min-width: 280px;
  max-width: calc(50% - 21.33px);
  overflow: scroll;
  width: 100%;

  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const PopularQuickiesHeader = styled(ItemH)`
  align-items: center;
  font-size: 20px;
  background: #282a36;
  justify-content: flex-start;
  padding: 10px 20px 14px 80px;
  margin-bottom: -6px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  position: relative;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    height: 0.6em;
    width: 0.6em;
    margin: 0.3em;
    left: 0.5em;
    border-radius: 100%;
    background: #4a4a4a;
    box-shadow: 1em 0em #4a4a4a, 2em 0em #4a4a4a;
    transition: all 0.3s ease-in-out;
  }

  &:hover:before {
    background: rgba(255, 0, 0, 0.8);
    box-shadow: 1em 0em rgba(255, 255, 0, 0.8), 2em 0em rgba(0, 255, 0, 0.8);
  }
`;

const PopularQuickiesTitle = styled(Span)`
  color: #9aa3db;
  font-size: 16px;
  font-weight: bold;
`;

const PopularQuickiesContent = styled(ItemV)`
  border-top: 1px solid #3d3d3d;
  align-items: stretch;
  width: 100%;
`;

const PopularQuickiesCodeBlock = styled(CodeBlock)`
  margin: 0px;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
  width: inherit;
`;

const TechDocCardList = styled(ItemH)`
  gap: 32px;
  display: flex;
  flex-wrap: wrap;
`

const TechDocCard = styled(ItemV)`
  margin: 0px;
  align-self: flex-start; 
  flex: 0 0 calc(33.33% - 21.33px);
  min-width: 280px;
  max-width: calc(33.33% - 21.33px);
  box-sizing: border-box;

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`;

const TechDocContent = styled(Button)`
  margin-top: 24px;
  position: relative;
  border-radius: 24px;
  padding: 40px 20px;
  border: 1px solid #d9d9d9;
  background: transparent;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  max-width: 100%;

  & svg path {
    stroke: var(--ifm-color-primary-text);
  }
  
  &:hover {
    border: 1px solid var(--ifm-color-primary-preferred);;

    & svg path {
      stroke: var(--ifm-color-primary-preferred);;
    }
  }
`;

const TechDocTitle = styled(Span)`
  font-family: var(--ifm-font-family-base);
  font-size: 26px;
  color: var(--ifm-color-primary-text);
  margin-top: 0px;
  font-weight: bold;
  letter-spacing: -0.03em;
`;

const TechDocSwitcher = styled(ItemH)`
  position: absolute;
  top: 0;
  right: 0;
  padding: inherit;

  & ${Button} {
    padding: 4px 12px;
    font-size: 14px;
    font-weight: 600;
  }
`;
const TechDocOverview = styled(Span)`
  font-family: var(--ifm-font-family-base);
  font-weight: 400;
  font-size: 16px;
  color: var(--ifm-color-secondary-text);
  margin-top: -10px;
  letter-spacing: -0.02em;
  line-height: 150%;
`;

const TechDocCodeBlock = styled(CodeBlock)`
  font-size: 14px;
  margin: 0px 10px;
  align-self: stretch;
  text-align: initial;
  overflow: scroll;
  max-width: 100%;
`;

const PushSdkCardList = styled(ItemH)`
  gap: 32px;
  margin-top: 30px;
  margin-bottom: 70px;
  align-items: center;
`

const PushSdkCard = styled(ItemH)`
  align-self: flex-start; 
  flex: 0 0 calc(33.33% - 21.33px);
  min-width: 250px;
  max-width: calc(33.33% - 21.33px);

  @media ${device.laptop} {
    flex: 1;
    max-width: initial;
  }
`

const PushSdkContent = styled(A)`
  color: var(--ifm-color-primary-text);
  background: var(--ifm-color-primary-inverse);
  align-items: stretch;
  display: flex;
  justify-content: stretch;
  align-self: stretch;
  border: 1px solid #d9d9d9;
  width: 100%;
  padding: 24px;

  & svg {
    color: #d9d9d9;
  }

  &:after {
    background: transparent;
  }

  &:hover {
    border: 1px solid var(--ifm-color-primary-preferred);;

    & svg {
      color: var(--ifm-color-primary-preferred);;
    }
  }
`