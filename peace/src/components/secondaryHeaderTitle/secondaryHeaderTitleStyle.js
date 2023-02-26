import styled from 'styled-components'

const SecondaryTitle = styled.h2`
font-family: 'Accanthis-Bold';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 51px;
letter-spacing: -0.01em;
color: #331B3B;
margin:0 0 2rem 0;
@media (max-width: 1024px) {
    text-align:center;
  }
@media (max-width: 600px) {
  font-size: 20px !important;
  }
>span{
    display:block;
    font-family: 'Accanthis-Regular';
    font-style: normal;
    font-weight: 400;
}

}
`

export {SecondaryTitle}