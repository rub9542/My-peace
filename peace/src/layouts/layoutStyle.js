import styled from 'styled-components'
import variables from '../styles/variables'

const Container = styled.main`
max-width:1440px;
margin:0 auto;
background:${variables.colors.light};
`
const LayoutChildren = styled.section`
padding-top:84px;
`
const LayoutStyle ={
    Container,
    LayoutChildren
}

export default LayoutStyle