import styled from 'styled-components'

import FlowerImage from "../images/homePage/flowerBg.png"
import variables from './variables'

const {colors} = variables

const FlexContainer = styled.div`
display:flex;
`
const FlexAlignCenterContainer = styled(FlexContainer)`
align-items:center;
`
const FlexAlignJustifyCenterContainer = styled(FlexAlignCenterContainer)`
justify-content:center;
`
const FlexAlignJustifyBetweenContainer = styled(FlexAlignCenterContainer)`
justify-content:space-between;
`
const SectionWithFlowerBg = styled.div`
background-image: url(${FlowerImage});
background-repeat: no-repeat;
background-position: right top; 
`
const DefaultParagraphText =styled.p`
font-family: 'Lato-Regular';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 257.3%;
letter-spacing: 0.02em;
color: ${colors.dark};
`;

export {
    FlexContainer,
    FlexAlignCenterContainer,
    FlexAlignJustifyCenterContainer,
    FlexAlignJustifyBetweenContainer,
    SectionWithFlowerBg,
    DefaultParagraphText
}
