import * as React from "react";
import styled from "styled-components";

import { Cell, Container, Grid } from "../atoms/Grid";

const SContainer = styled(Container)`
    padding-bottom: 30px;
`;

const SHeader = styled.h1`
    color: #330066;
    font-family: 'Roboto' sans-serif;
    font-size: 40px;
    margin-bottom: 60px;
    margin-top: 60px;
    text-align: center;

    @media(max-width: 639px) {
        margin-bottom: 30px;
        margin-top: 30px;
    }
`;

const SAnchor = styled.a`
    color: inherit;

    &:hover {
        color: purple;
    }
`;

const SSubHeader = styled.h2`
    color: #330066;
    font-family: 'Roboto' sans-serif;
    text-align: center;
`;

const SText = styled.p`
    text-align: center;
`;

const SMobileImage = styled.img`
    border-radius: 30px;
    display: flex;
    margin: auto;
    width: 200px;
`

const SImage = styled.img`
    margin: 0 20px;
    max-width: 100%
    padding: 0 20px;
    width: -moz-available;          /* WebKit-based browsers will ignore this. */
    width: -webkit-fill-available;  /* Mozilla-based browsers will ignore this. */
    width: fill-available;
`;


const OctopusWealthProject = () => (
    <>
        <SHeader>
            <SAnchor href="https://octopuswealth.com" target="_blank" rel="noopener noreferrer">Octopus Wealth</SAnchor>
        </SHeader>
        <SContainer>
            <Grid>
                <Cell width={12} mdWidth={4} mdLeft={2}>
                    <SSubHeader>
                        <SAnchor href="https://portal.octopuswealth.com" target="_blank" rel="noopener noreferrer">Portal</SAnchor>
                    </SSubHeader>
                    <SText>
                        The Octopus Wealth Portal is a progressive web application (PWA) that allows users to
                        keep track of their assets, across various providers, all in one place.
                    </SText>
                    <SText>
                        The backend uses Python and Quart (an open-source extension of Flask that has async/await
                        functionality and is maintained by our CTO). The frontend uses TypeScript, React and
                        Redux.
                    </SText>
                    <SText>
                        Client assets were updated using third-party APIs and then collated and displayed by our team.
                        We added several security measures such as CSP, a password-strength meter and multi-factor authentication
                        implemented using Google Authenticator.
                    </SText>
                </Cell>
                <Cell width={12} mdWidth={3} mdLeft={6}>
                    <SMobileImage src="/images/PortalHomeScreen.png" />
                </Cell>
                <Cell width={12} mdWidth={3} mdLeft={9} >
                    <SMobileImage src="/images/Portal2FA.png" />
                </Cell>
            </Grid>
        </SContainer>
        <SContainer>
        <Grid>
            <Cell width={12} mdWidth={4} mdLeft={2}>
            <SSubHeader>
                <SAnchor href="https://octopuswealth.com" target="_blank" rel="noopener noreferrer">Marketing Website</SAnchor>
            </SSubHeader>
            <SText>
                The marketing website uses Server Side Rendering (SSR) for increased response times and better SEO. Some challenges
                faced with using SSR was with service workers and lazy loading via React.Suspense.
            </SText>
            <SText>
                We wrote the site using TypeScript, React and Redux and utilised an open-source CMS system which we have also contributed to.
            </SText>
            </Cell>
            <Cell width={12} mdWidth={7} mdLeft={6}>
                <SImage src="/images/MarketingSite.png" />
            </Cell>
        </Grid>
        </SContainer>
        <SContainer>
        <Grid>
            <Cell width={12} mdWidth={4} mdLeft={2}>
            <SSubHeader>
                <SAnchor href="https://octopuswealth.com/financial-mot/" target="_blank" rel="noopener noreferrer">Financial MOT</SAnchor>
            </SSubHeader>
            <SText>
                The Financial MOT tool was created for the marketing department in order to allow prospective
                clients to get a feel of their current financial situation. The tool provides helpful hints on
                how to improve your financial planning and gives a sense of what our services could offer.
            </SText>
            <SText>
                We wrote the software for this entirely in TypeScript, React and Redux and the tool is accessible
                via the company's main website.
            </SText>
            </Cell>
            <Cell width={12} mdWidth={7} mdLeft={6}>
                <SImage src="/images/FinancialMot.png" />
            </Cell>
        </Grid>
        </SContainer>
    </>
);

export default OctopusWealthProject;