import React from "react";
import styled from "styled-components";

const Indicator = () => {
    return (
        <Light>
            <TrafficIndicator></TrafficIndicator>
            <TrafficIndicator></TrafficIndicator>
            <TrafficIndicator></TrafficIndicator>
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
    background: red;
    border-radius: 50%;
`

export default Indicator;