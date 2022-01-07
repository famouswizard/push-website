import React, { useState } from "react";
import styled from "styled-components";
import {
	Section,
	SectionHero,
	Content,
	Item,
	H1,
} from "components/SharedStyling";
import AdvisorsCard from "components/AdvisorsCard";
import ScrollTrigger from "react-scroll-trigger";

const PressKit = () => {
	// for checking2

	const [width, setWidth] = useState(window.screen.availWidth);
	console.log(width);
	React.useEffect(() => {
		setWidth(window.screen.availWidth);
		console.log(width);
	}, [width]);

	const [classShow, setClassShow] = React.useState("Show");

	const handleScroll = React.useCallback((event) => {
		let scrollTop = window.scrollY;
		console.log(scrollTop, "classShow");
		//console.log(scrollTop );  //1,2,...100,...200...etc (in px)

		if (scrollTop >= 5100) {
			setClassShow("");
		} else setClassShow("Show");
	});

	const [animateHero, setAnimateHero] = React.useState(true);

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll, false);
		};
	}, [handleScroll]);
	return (
		<>
			<ScrollTrigger
				onEnter={() => {
					setAnimateHero(true);
				}}
				onExit={() => {
					setAnimateHero(false);
				}}
			>
				<SectionHero padding="50px 0px 80px 0px">
					{/* <SectionFSHero id="hero" padding="15px 0px 0px 0px"> */}
					<Content className="contentBox">
						<Item margin="0px 20px">
							<H1>Press Kit</H1>
						</Item>
					</Content>
				</SectionHero>
			</ScrollTrigger>

			{/* Start EPNS Press Kit */}
			<Section
				id="presskit"
				gradient="linear-gradient(180.71deg, #D01C85 0.62%, rgba(28, 46, 208, 0) 330.2%);"
				padding="20px 0px 80px 30px"
			>
				<PressKitSection
					id="presskit"
					flexDirection="row"
					style={{
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Item>
						<PressKitHeading>
							<Item style={{ margin: "0" }}>
								<PressKitText
									color="#fff"
									fontWeight="normal"
									fontSize={40}
									lineHeight="50px"
									padding="5px"
								>
									EPNS PRESS KIT
								</PressKitText>
							</Item>
						</PressKitHeading>
						<Content
							style={{
								padding: "15px",
							}}
						>
							<PressKitText
								textTransform="uppercase"
								padding="10px"
								color="white"
								fontWeight="600px"
							>
								<span style={{ fontWeight: 700 }}>EPNS</span> is
								an Ethereum-based decentralized protocol that
								enables any and every Web3 app, irrespective of
								what blockchain they’re based on, to send push
								notifications to its users.
							</PressKitText>
							<PressKitText
								textTransform="uppercase"
								padding="10px"
								color="white"
								fontWeight="600px"
							>
								On EPNS, not the apps but the users control what
								notifications they receive. Besides, they earn
								regular incentives for subscribing to
								notifications. Win-win!
							</PressKitText>
						</Content>
					</Item>
					<Item>
						<Img src="/presskit/bell.png" alt="Bell Image" />
					</Item>
				</PressKitSection>
			</Section>

			{/* Meet Founders Section */}
			<Section id="meetfounders" padding="30px 0px 50px 0px">
				<PressKitSection id="meetfounders">
					<PressKitHeading>
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								MEET OUR
								<PressKitSpan style={{ background: "#D01C85" }}>
									FOUNDERS{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							justifyContent: "space-between",
							flexDirection: "row",
							flexWrap: "wrap",
							alignItems: "center",
						}}
					>
						<Item padding="0px 50px" margin="0px 50px">
							<PeopleImg
								src="/presskit/founder_harsh.png"
								height={340}
								width={340}
							/>
							<PressKitText
								color="#000"
								fontWeight="600"
								padding="5px"
							>
								Harsh Rajat
							</PressKitText>
							<PressKitText
								color="#D01C85"
								fontWeight="600"
								padding="5px"
								textTransform="uppercase"
								lineHeight="19px"
								fontSize={15}
							>
								Founder
							</PressKitText>
							<PressKitText
								color="#635C5C"
								fontWeight="600"
								padding="5px"
								lineHeight="18px"
								fontSize={14}
							>
								Harsh Rajat is the founder of Ethereum Push
								Notification Service (EPNS), a decentralized
								DeFi notifications protocol that enables users
								(wallet addresses) to receive notifications.
								With 11 years of entrepreneurial experience in
								various spectrum of tech; including
								architecting, development and design in
								different tech fields (Mobile, Web Services,
								SaaS, Blockchain), he realised the gap in the
								blockchain space and founded EPNS!
							</PressKitText>
						</Item>
						<Item padding="0px 50px" margin="0px 50px">
							<PeopleImg
								src="/presskit/founder_richa.png"
								height={340}
								width={340}
							/>
							<PressKitText
								color="#000"
								fontWeight="600"
								padding="5px"
							>
								Richa Joshi
							</PressKitText>
							<PressKitText
								color="#D01C85"
								fontWeight="600"
								padding="5px"
								textTransform="uppercase"
								lineHeight="19px"
								fontSize={15}
							>
								Co-Founder
							</PressKitText>
							<PressKitText
								color="#635C5C"
								fontWeight="600"
								padding="5px"
								lineHeight="18px"
								fontSize={14}
							>
								Richa, the co-founder of Ethereum Push
								Notification Service (EPNS). An alumini of K.J.
								Somaiya Institute of engineering and Information
								Technology, Richa began her career with Wipro
								Limited and has 12 years of techno-functional
								experience in product management and development
								across multiple facets of the product lifecycle.
								She has previously worked with Deloitte,
								contributing and leading teams before foraying
								into the blockchain space.
							</PressKitText>
						</Item>
					</Content>
				</PressKitSection>
			</Section>

			{/* Web3 Section */}
			<Section
				id="missingweb3"
				padding="20px 0px 0px 0px"
				gradient="#F3F7F8"
			>
				<PressKitSection id="missingweb3">
					<PressKitHeading flexDirection="row">
						<Item style={{ margin: "0" }} align="flex-start">
							<h4 style={{ color: "#000", marginBottom: "60px" }}>
								<PressKitSpan style={{ background: "#583D98" }}>
									MISSING PIECES{" "}
								</PressKitSpan>
								OF WEB3
							</h4>
							<p style={{ marginBottom: "25px" }}>
								Communication in StoneAge <br />
								Web3 can not notify users <br />
								Critical Info drop <br />
							</p>
						</Item>
						<MissingPieceImg src="/presskit/missing1.png" />
					</PressKitHeading>
					{/* <Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content> */}
					<PressKitHeading flex="flex-end" flexDirection="row">
						<MissingPieceImg src="/presskit/missing2.png" />

						<Item
							style={{
								alignItems: "flex-end",
								textAlign: "right",
							}}
						>
							<h4 style={{ color: "#000", marginBottom: "60px" }}>
								THE
								<PressKitSpan style={{ background: "#583D98" }}>
									SOLUTION{" "}
								</PressKitSpan>
							</h4>
							<p style={{ marginBottom: "25px" }}>
								Notification Protocol <br />
								Incentivized Notifications <br />
								Platform Agnostic Delivery <br />
							</p>
						</Item>
					</PressKitHeading>
					{/* <Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content> */}
				</PressKitSection>
			</Section>

			{/* Product Section */}
			<Section
				id="epnsproduct"
				padding="20px 0px 0px 0px"
				gradient="#583D98"
			>
				<PressKitSection id="epnsproduct">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								THE EPNS
								<PressKitSpan style={{ background: "#1FE3EF" }}>
									PRODUCT{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					></Content>
				</PressKitSection>
			</Section>

			{/* History Section */}
			<Section id="history" padding="20px 0px 0px 0px" gradient="#F3F7F8">
				<PressKitSection id="history">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								OUR
								<PressKitSpan style={{ background: "#D01C85" }}>
									HISTORY{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						className="contentBox"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<OurHistoryImg src="/presskit/ourHistory.png" />
					</Content>
				</PressKitSection>
			</Section>

			{/* EPNS News Section */}
			<Section id="news" gradient="#D01C85" padding="20px 0px 0px 0px">
				<PressKitSection id="news">
					<PressKitHeading>
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#fff" }}>
								EPNS
								<PressKitSpan style={{ background: "black" }}>
									in the News{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						{/* <Item padding="20px" width="85%">
							<Medium numberOfPosts={6} />
						</Item> */}
					</Content>
				</PressKitSection>
			</Section>

			{/* Meet Advisors Section */}
			<Section id="meetadvisors" padding="20px 0px 0px 0px">
				<PressKitSection id="meetadvisors">
					<PressKitHeading flex="flex-end" alignItems="flex-end">
						<Item style={{ margin: "0" }}>
							<h4 style={{ color: "#000" }}>
								MEET OUR
								<PressKitSpan style={{ background: "#583D98" }}>
									ADVISORS{" "}
								</PressKitSpan>
							</h4>
						</Item>
					</PressKitHeading>
					<Content
						style={{
							display: "flex",
							justifyContent: "space-evenly",
							flexDirection: "row",
							flexFlow: "wrap",
						}}
					>
						<AdvisorsCard
							name="Nischal Shetty"
							imgSrc="/presskit/advisor_nishal_shetty.png"
							title="Founder, CEO | WazirX"
							height="500px"
							width="350px"
							subtitle="(India’s Largest Exchange, acquired by Binance)"
							desc="The Crypto and DeFi ecosystem is missing some key infrastructure pieces. Notification is one such key infrastructure piece that is currently missing and I’m glad that the EPNS team is solving this problem."
						/>
						<AdvisorsCard
							name="DeFi Dad"
							imgSrc="/presskit/advisor_defi_dad.png"
							height="500px"
							width="350px"
							title="ALL THINGS DEFI"
							desc="EPNS was a oh-shit light bulb moment for me. DeFi and crypto communications are a mess at the moment. The ability to share product updates, notifications related to invested assets (ie real-time CDP liquidation warnings), urgent messages about bugs, new liquidity mining opportunities, or simply engage with your users based on wallets actually holding exposure to the native asset of your protocol… is a huge step forward. We needed EPNS yesterday and that’s why I’m excited to be invested and working with this team."
						/>
						<AdvisorsCard
							name="Vivek Singh"
							imgSrc="/presskit/advisor_vivek_singh.png"
							height="500px"
							width="350px"
							title="CO-FOUNDER, GITCOIN"
							desc="EPNS is building critical infrastructure for Web 3. Tinkering with the incentives around notifications has huge downstream potential as we look to build an internet which serves users, not corporations. Excited to see how Harsh and Richa’s vision unfolds."
						/>
						<AdvisorsCard
							name="Sandeep Nailwal"
							imgSrc="/presskit/advisor_sandeep_nailwal.png"
							height="500px"
							width="350px"
							title="CO-FOUNDER, POLYGON"
							desc="The lack of notifications and communication of key information to users of Web3 protocols and services has been one of the greatest user experience barriers in Web3. I’m excited to be a part of this journey and to see Harsh and Richa pull this amazing feat off."
						/>
						<AdvisorsCard
							name="Kernel"
							imgSrc="/presskit/advisor_kernel.png"
							height="500px"
							width="350px"
							title="A GITCOIN COLLECTIVE"
							desc="EPNS (Harsh and Richa, specifically) are shining stars who we are grateful to have in KERNEL.They are a thoughtful leadership team suited to explore how internet communication protocols (starting with notifications) can be implemented in more harmonious and humane ways."
						/>
					</Content>
				</PressKitSection>
			</Section>
		</>
	);
};

const MissingPieceImg = styled.img`
	height: 400px;
	width: 400px;

	@media (max-width: 900px) {
		height: 250px;
		width: 250px;
	}
`;

const PeopleImg = styled.img`
	height: ${(props) => props.height + "px" || "auto"};
	width: ${(props) => props.width + "px" || "auto"};
	margin: 20px 0px 10px 0px;
	@media (max-width: 1200px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.9 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.9 + "px" : "auto"};
	}
	@media (max-width: 1040px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.8 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.8 + "px" : "auto"};
	}
	@media (max-width: 768px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.7 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.7 + "px" : "auto"};
	}
	@media (max-width: 600px) {
		height: ${(props) =>
			props.height !== undefined ? props.height * 0.6 + "px" : "auto"};
		width: ${(props) =>
			props.width !== undefined ? props.width * 0.6 + "px" : "auto"};
	}
`;

const OurHistoryImg = styled.img`
	height: 100%;
	width: 100%;
`;

const PressKitHeading = styled.div`
	display: flex;
	padding: 2rem;
	justify-content: ${(props) => props.flex || "flex-start"};
	align-items: ${(props) => props.alignItems || "flex-start"};
	flex-direction: ${(props) => props.flexDirection || "column"};
	@media (max-width: 900px) {
		flex-direction: column;
	}

	h4 {
		color: black;
		font-size: 40px;
		line-height: 50px;
		letter-spacing: 0.1em;
		font-family: Source sans pro;
		font-weight: normal;
		margin: 15px 0px 10px 0;
		@media (max-width: 1200px) {
			font-size: 2rem;
		}
		@media (max-width: 600px) {
			font-size: 1.2rem;
		}
	}
	h5 {
		color: white;
		font-size: 24px;
		font-family: Source sans pro;
		line-height: 30px;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		font-weight: bold;
		margin: 15px 0px 15px 0;
		@media (max-width: 600px) {
			font-size: 0.8rem;
		}
	}
	p {
		font-size: 25px !important;
		color: #252323 !important;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		font-weight: normal;
		line-height: 31px;
		font-family: Source sans pro;
		@media (max-width: 600px) {
			font-size: 1rem;
		}
	}
`;

const PressKitSection = styled.div`
	display: flex;
	id:${(props) => props.id || "section"}
	justify-content: ${(props) => props.justifyContent || "space-between"};
	flex-direction: ${(props) => props.flexDirection || "column"};
	padding: ${(props) => props.padding || "2rem 2rem"};

	@media (max-width: 900px) {
		flex-direction: column;
	}
`;

const PressKitSpan = styled.span`
	background: ${(props) => props.backgroundColor || "#E20880"};
	padding: 10px;
	font-family: Source sans pro;
	color: white;
	margin: 0 1rem 0 0.21rem;
	font-weight: 450px;

	@media (max-width: 600px) {
		font-size: 1.2rem;
	}
`;

const Img = styled.img`
	width: 40rem;
	@media (max-width: 1200px) {
		width: 32rem;
	}
	@media (max-width: 1040px) {
		width: 28rem;
	}
	@media (max-width: 768px) {
		width: 24rem;
	}
	@media (max-width: 600px) {
		width: 20rem;
	}
`;

const PressKitText = styled.div`
	color: ${(props) => props.color || "inherit"};
	font-style: ${(props) => props.fontStyle || "normal"};
	font-family: ${(props) => props.fontFamily || "Source sans pro"};
	text-transform: ${(props) => props.textTransform || "none"};
	text-align: ${(props) => props.textAlign || "center"};
	font-weight: ${(props) => props.fontWeight || "400"};
	font-size: ${(props) =>
		props.fontSize !== undefined ? props.fontSize + "px" : "24px"};
	line-height: ${(props) => props.lineHeight || "30px"};
	padding: ${(props) => props.padding || "0px"};
	letter-spacing: ${(props) => props.letterSpacing || "0.1em"};
	@media (max-width: 1200px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.95 + "px"
				: "22px"};
	}
	@media (max-width: 1040px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.9 + "px"
				: "20px"};
	}
	@media (max-width: 768px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.85 + "px"
				: "18px"};
	}
	@media (max-width: 600px) {
		font-size: ${(props) =>
			props.fontSize !== undefined
				? props.fontSize * 0.75 + "px"
				: "16px"};
	}
`;

export default PressKit;
