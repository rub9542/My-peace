import styled from "styled-components";
import { FlexAlignCenterContainer, FlexContainer } from "../../styles/commonStyle";
import variables from "../../styles/variables";

const CalendarSectionWrapper = styled.section`
margin:6rem 2rem;
box-sizing:border-box;
overflow-x:auto;
>div{
    min-width:1200px;
}
`
const DaysWrapper = styled(FlexContainer)`
justify-content:flex-end;
>div{
    width:12.5%;
    margin-right:2.5rem;
    text-align:center;
    background: #DCF2E5;
    border-radius: 27px;
    &:nth-child(1){
    background: transparent;
    }
}
`
const Text= styled.label`
font-family: 'Lato-Regular';
font-style: normal;
font-weight: 600;
font-size: 14px;
padding:0.3rem;
line-height: 148.8%;
letter-spacing: -0.01em;
display:block;
color: ${variables.colors.dark};
`
const TimeEventWrapper=styled(FlexContainer)`
box-sizing:border-box;
align-items:${props=>props.align?props.align:"unset"};
`
const TimeSection = styled(FlexContainer)`
padding:0.3 rem;
align-items:center;
margin-right:2.5rem;
justify-content:flex-start;
>svg{
    margin-right:0.5rem;
}
`
const EventWrapper =styled(FlexAlignCenterContainer)`
background: #6DA67F;
border-radius: 15px;
text-align:center;
box-sizing: border-box;
padding:0.5rem;
height:${props=>props.height?props.height:""};
`
const SingleCell =styled.div`
width:${props=>props.width?props.width:""};
box-sizing:border-box;
margin-top:${props=>props.top?props.top:"2rem"};
`
const TimeText=styled(Text)`
font-size:16px;
`
const EventText=styled(Text)`
font-family: 'Lato-Bold';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 148.8%;
width:100%;
letter-spacing: -0.01em;
color: #FFFFFF;
`
export {
    CalendarSectionWrapper,
    DaysWrapper,
    Text,
    TimeText,
    TimeEventWrapper,
    TimeSection,
    EventWrapper,
    SingleCell,
    EventText
}


