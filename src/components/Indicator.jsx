import React from "react";
import styled from "styled-components";

const Indicator = ({ state }) => {
    return (
        <Light>
            <TrafficIndicator state={state === "STOP" ? "STOP" : ""}></TrafficIndicator>
            <TrafficIndicator state={state === "PAUSE" ? "PAUSE" : ""}></TrafficIndicator>
            <TrafficIndicator state={state === "GO" ? "GO" : ""}></TrafficIndicator>
        </Light>
    );
};

const Light = styled.div`
    width: 32px;
    height: 128px;
    background: #ffbf38;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
`

const TrafficIndicator = styled.div`
    width: 36px;
    height: 36px;
    background: ${(props) => (props.state === 'GO' ? '#008001' : props.state === 'PAUSE' ? 'yellow' : props.state === 'STOP' ? '#ff0000' : '#cd9a2d')};
    border-radius: 50%;
`

export default Indicator;