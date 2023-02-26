import styled from "styled-components";

import Varsha from "../../images/doctors/varsha.png"
import { FlexContainer } from "../../styles/commonStyle";
import variables from "../../styles/variables";

const DoctorCardWrapper = styled(FlexContainer)`
background: ${props=>props.bg?`url(${props.bg})`:`url(${Varsha})`} no-repeat;
box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.25);
border-radius: 12px;
height:426px;
width:303px;
background-position: center;
align-items:flex-end;
@media (max-width: 1377px) {
    width:auto;
}
`
const DoctorCardTextWrapper = styled.div`
background: linear-gradient(181.2deg, rgba(0, 0, 0, 0) 8.37%, rgba(0, 0, 0, 0.66) 59.07%);
width: 100%;
border-radius: 0 0 12px 12px;
padding: 1rem;
text-align:left;
`
const DoctorCardTitle = styled.h5`
font-family: 'Lato-Bold';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 159.3%;
letter-spacing: 0.02em;
margin:0 0 0.5rem 0;
color: ${variables.colors.light};
`
const DoctorCardSubTitle = styled.label`
font-family: 'Lato-Regular';
font-style: normal;
font-weight: 500;
font-size: 16px;
display:block;
line-height: 159.3%;
letter-spacing: 0.02em;
color: ${variables.colors.light};
`;

const SubLabel=styled(DoctorCardSubTitle)`
font-weight: 300;
font-family: 'Lato-Thin';
font-size: 14px;
`

export { DoctorCardWrapper, DoctorCardTextWrapper, DoctorCardSubTitle,DoctorCardTitle,SubLabel }