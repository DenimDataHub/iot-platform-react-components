import React from "react";
import styled from "styled-components";

const CardDash = styled.div`
    margin: 2em;
    border-radius: 0.5em;
    border: 2px dashed #ffffff;
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 1em;
    border-radius: 0.25em;
    border: 1px solid #000000;
    background-color: #ffffff;
    height: 20em;
    font-family: 'Open Sans', sans-serif;
    text-align: center;
    padding: 1em;
    box-sizing: border-box;
`
const CardIcon = styled.span`
    font-size: 4rem;
    text-align: center;
`
const CardHeader = styled.h3`
    font-family: 'Exo 2', sans-serif;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
`
const CardBody = styled.p`
    text-align: center;
`

export default class Card extends React.Component {
    render() {
        const { item } = this.props;
        const classes = ['lnr', item.iconClass];
        return (
            <CardDash>
                <CardContainer>
                    <CardIcon className={ classes } />
                    <CardHeader>{ item.title }</CardHeader>
                    <CardBody>
                        { item.body }
                    </CardBody>
                </CardContainer>
            </CardDash>
        )
    }
}