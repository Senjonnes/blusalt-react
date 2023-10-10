import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import styled from "styled-components";
import Indicator from "../../components/Indicator";
import Button from "../../components/Button";

const Home = () => {
  const [street, setStreet] = useState("B");
  const [isFullCycle, setIsFullCycle] = useState(false);
  const [isHalfCycle, setIsHalfCycle] = useState(false);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState(10);

  const decrementTimer = useCallback(() => {
    setTimer((oldTimer) => oldTimer - 1)
  }, [])

  useEffect(() => {
    if (start) {
      if (street === "B" && isFullCycle) {
        setIsFullCycle(false);
        setStreet("A");
      } else if (street === "A" && isFullCycle) {
        setIsFullCycle(false);
        setStreet("B");
      }
      if (timer <= 0 && !isHalfCycle) {
        setTimer(5)
        setIsHalfCycle(true);
        return
      } else if (timer <= 0 && isHalfCycle) {
        setTimer(10)
        setIsHalfCycle(false);
        setIsFullCycle(true);
        return
      }
      const timeoutFunction = setInterval(decrementTimer, 1000)
      return () => clearInterval(timeoutFunction);
    }
  }, [decrementTimer, timer, start, isHalfCycle, street, isFullCycle])

  const handleStart = () => {
    setTimer(10);
    setStart(true);
    setIsFullCycle(false);
    setStreet("B");
  }

  const handleReset = () => {
    setTimer(10);
    setIsFullCycle(false);
    setStreet("B");
  }

  return (
    <>
      <Helmet>
        <title>Home | Traffic</title>
        <meta name="keywords" content="Traffic" />
      </Helmet>
      <Container>
        <Traffic>
          <TopLabel>Street A</TopLabel>
          <Bar horizontal={"true"}>
            <Light>
              <LeftLight>
                <Indicator state={street === 'B' && isHalfCycle ? "PAUSE" : street === "A" ? "GO" : "STOP"} />
              </LeftLight>
              <RightLight>
                <Indicator state={street === 'B' && isHalfCycle ? "PAUSE" : street === "A" ? "GO" : "STOP"} />
              </RightLight>
            </Light>
          </Bar>
          <SideLabel>Street B</SideLabel>
          <Bar>
            <Light>
              <TopLight>
                <Indicator state={street === 'A' && isHalfCycle ? "PAUSE" : street === "B" ? "GO" : "STOP"} />
              </TopLight>
              <BottomLight>
                <Indicator state={street === 'A' && isHalfCycle ? "PAUSE" : street === "B" ? "GO" : "STOP"} />
              </BottomLight>
            </Light>
          </Bar>
          <Box>
            <Button onClick={handleStart}>Start</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </Traffic>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Traffic = styled.div`
  width: 900px;
  height: 900px;
  position: relative;
`

const Bar = styled.div`
  margin: 0 auto;
  position: absolute;
  background: #2c2c2a;
  width:  ${(props) => (props.horizontal && '90%') || '16%'};
  height: ${(props) => (props.horizontal && '16%') || '90%'};
  left: ${(props) => (props.horizontal && '5%') || '40%'};
  top: ${(props) => (props.horizontal && '40%') || '5%'};
  border-bottom: ${(props) => (props.horizontal && '2px solid #ffff00') || 'none'};
  border-top: ${(props) => (props.horizontal && '2px solid #ffff00') || 'none'};
  border-left: ${(props) => (props.horizontal && 'none') || '2px solid #ffff00'};
  border-right: ${(props) => (props.horizontal && 'none') || '2px solid #ffff00'};
`

const Light = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Box = styled.div`
  margin: 0 auto;
  position: absolute;
  background: #2c2c2a;
  width: 16%;
  background: #2c2c2a;
  height: 16%;
  left: 40%;
  top: 40%;
  border: 2px solid #2c2c2a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`

const TopLight = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 10px;
  width: fit-content;
`

const BottomLight = styled.div`
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 10px;
  width: fit-content;
`
const LeftLight = styled.div`
  position: absolute;
  left: 15%;
  width: fit-content;
`
const RightLight = styled.div`
  position: absolute;
  right: 15%;
  width: fit-content;
`

const TopLabel = styled.p`
  position: absolute;
  top: 5%;
  left: 30%;
  font-weight: bold;
  font-size: 18px;
`

const SideLabel = styled.p`
  position: absolute;
  top: 35%;
  right: 7%;
  font-weight: bold;
  font-size: 18px;
`

export default Home;