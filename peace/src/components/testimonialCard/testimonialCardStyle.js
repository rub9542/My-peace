import styled from 'styled-components'
import { DefaultParagraphText } from '../../styles/commonStyle'

import variables from '../../styles/variables'

const { colors } = variables

const TestimonialCardWrapper = styled.div`
background: ${colors.light};
box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.08);
padding:2rem 1.5rem;
margin:1rem;
`
const TestimonialCardDescription = styled(DefaultParagraphText)`
font-size: 16px;
line-height: 158.3%;
letter-spacing: 0.02em;
color: ${colors.textColor};
`
const TestimonialAuthorName = styled.h6`
font-family: 'Lato-Regular';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 159.3%;
letter-spacing: 0.02em;
margin:1rem 0 0 0;
color: ${colors.dark};
>span{
    display:inline-block;
    margin-left:1rem;
}
`

export {
    TestimonialCardWrapper,
    TestimonialCardDescription,
    TestimonialAuthorName
}