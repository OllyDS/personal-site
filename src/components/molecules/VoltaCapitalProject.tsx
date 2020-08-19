import * as React from "react";
import styled from "styled-components";

import { Cell, Container, Grid } from "../atoms/Grid";

const SContainer = styled(Container)`
    padding-bottom: 30px;
`;

const SHeader = styled.h1`
    color: #E63914;
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
        color: #E63914;
    }
`;

const SSubHeader = styled.h2`
    color: #E63914;
    font-family: 'Roboto' sans-serif;
    text-align: center;
`;

const SText = styled.p`
    text-align: center;
`;

const SImage = styled.img`
    display: flex;
    margin: auto;
    margin-top: -30px;
    width: 500px;
`;


const VoltaCapitalProject = () => (
    <>
        <SHeader>
            <SAnchor href="https://voltaimpact.com/" target="_blank" rel="noopener noreferrer">VOLTA</SAnchor>
        </SHeader>
        <SContainer>
            <Grid>
                <Cell width={12} mdWidth={5} mdLeft={2}>
                    <SSubHeader>
                        The LEAP Programme
                    </SSubHeader>
                    <SText>
                        The Lending for Education in Africa Partnership programme is a non-profit programme launched to help students
                        in Sub-Saharan Africa gain access to higher education programmes.
                    </SText>
                    <SText>
                        Given the potential scope and impact of the project, the team needed to move away from manually intensive processes
                        to an online integrated software solution. I was brought on to help lead this transition, creating internal tools
                        that not only help the team process new and existing applications, but also help to calculate credit risk and track
                        repayments using proprietary models.
                    </SText>
                </Cell>
                <Cell width={12} mdWidth={5} >
                    <SImage src="/images/leap.png" />
                </Cell>
            </Grid>
        </SContainer>
        <SContainer>
            <Grid>
                <Cell width={12} mdWidth={4} mdLeft={2}>
                    <SImage src="/images/api.png" />
                </Cell>
                <Cell width={12} mdWidth={6} mdLeft={6}>
                    <SSubHeader>
                        The Tech
                    </SSubHeader>
                    <SText>
                        The internal tools were created using a 'NERP' stack (Node, Express, React, Postgres).
                        We chose to use NodeJS as it allows for asynchronous, non-blocking actions which
                        would allow the team to handle a larger number of applications over time.
                    </SText>
                    <SText>
                        We use AWS to store our data and host our application, and use Jenkins hosted on an
                        EC2 instance for our CI/CD.
                    </SText>
                    <SText>
                        Using my experience working within larger teams and organisations (as well as lessons learnt from
                        reading The Phoenix Project) I created a pitch explaining the benefits of using a Kanban board
                        (Trello) to organise our tasks.
                    </SText>
                    <SText>
                        The management team also required timelines for delivery, to which I proposed using a points
                        based approach to estimate our deliverables. We tracked our progress over 3 sprints and then
                        took the averages of those sprints to forcast future velocity.
                    </SText>
                </Cell>
            </Grid>
        </SContainer>
    </>
);

export default VoltaCapitalProject;