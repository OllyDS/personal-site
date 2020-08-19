import * as React from "react";
import styled from "styled-components";
import { Container, Divider, Image } from "semantic-ui-react";
import { Cell, Grid } from "./atoms/Grid";

import Mimapp from "./molecules/cta-images/Mimapp";
import FxTradingGame from "./molecules/cta-images/FxTradingGame";
import OctopusWealth from "./molecules/cta-images/OctopusWealth";
import VoltaCapital from "./molecules/cta-images/VoltaCapital";

const STextWrapper = styled.div`
    font-family: 'Roboto' sans-serif;
    margin: 60px 20px;
    text-align: center;
`;

const SHeader = styled.h1`
    font-family: 'Roboto' sans-serif;
    font-size: 1.6em;
    margin: 8px 0;
`;

const SContainer = styled(Container)`
    margin-bottom: 4rem;
`;

const SImageWrapper = styled.div`
    margin-bottom: 2em;
`;

const SGrid = styled(Grid)`
    margin-top: 2em;
    margin-bottom: 0;
`;

const Home = () => (
    <>
        <img className="homepage-image" src="/images/london-wide.jpg" alt="The City of London"/>
        <STextWrapper>
            <SHeader>Hello, I'm Oliver, a software engineer living in London.</SHeader>
            <p>You can explore my projects below and get in touch if you have any queries.</p>
        </STextWrapper>
        <Divider horizontal>Languages and Frameworks</Divider>
        <SContainer className="lang-icons-container">
            <Image.Group size="tiny">
                <Image src="/images/icons/express.png" alt="express" title="Express" className="icons" />
                <Image src="/images/icons/react.png" alt="react.js" title="React" className="icons" />
                <Image src="/images/icons/apollo.png" alt="apollo" title="Apollo" className="icons" />
                <Image src="/images/icons/graphql.png" alt="graphql" title="GraphQL" className="icons" />
                <Image src="/images/icons/heroku.png" alt="heroku" title="Heroku" className="icons" />
                <Image src="/images/icons/redux.png" alt="redux" title="Redux" className="icons" />
                <Image src="/images/icons/docker.png" alt="docker" title="Docker" className="icons" />
                <Image src="/images/icons/ts.png" alt="typescript" title="TypeScript" className="icons" />
                <Image src="/images/icons/css.png" alt="css" title="CSS" className="icons" />
                <Image src="/images/icons/postgresql.png" alt="postgresql" title="Postgres" className="icons" />
                <Image src="/images/icons/python.png" alt="python" title="Python" className="icons" />
                <Image src="/images/icons/node.png" alt="nodeJS" title="NodeJS" className="icons" />
                <Image src="/images/icons/js.png" alt="javascript" title="JavaScript" className="icons" />
                <Image src="/images/icons/aws.png" alt="aws cloud services" title="AWS" className="icons" />
                <Image src="/images/icons/quart.png" alt="quart" title="Quart" className="icons" />
                <Image src="/images/icons/html-5.png" alt="html 5" title="HTML 5" className="icons" />
                <Image src="/images/icons/jenkins.png" alt="jenkins" title="Jenkins" className="icons" />
                <Image src="/images/icons/ror.png" alt="ruby on rails" title="Ruby on Rails" className="icons" />
                <Image src="/images/icons/ruby.png" alt="ruby" title="Ruby" className="icons" />
            </Image.Group>
        </SContainer>
        <Divider horizontal>Professional Work</Divider>
        <Container>
            <SGrid>
                <Cell width={12} mdWidth={5} mdLeft={1}>
                    <SImageWrapper>
                        <VoltaCapital />
                    </SImageWrapper>
                </Cell>
                <Cell width={12} mdWidth={5} mdLeft={8}>
                    <SImageWrapper>
                        <OctopusWealth />
                    </SImageWrapper>
                </Cell>
            </SGrid>
        </Container>
        <Divider horizontal>Personal Projects</Divider>
        <Container>
            <SGrid>
                <Cell width={12} mdWidth={5} mdLeft={1}>
                    <SImageWrapper>
                        <Mimapp />
                    </SImageWrapper>
                </Cell>
                <Cell width={12} mdWidth={5} mdLeft={8}>
                    <SImageWrapper>
                        <FxTradingGame />
                    </SImageWrapper>
                </Cell>
            </SGrid>
        </Container>
    </>
);

export default Home;
