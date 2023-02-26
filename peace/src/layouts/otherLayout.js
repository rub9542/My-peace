import React from 'react'

import Footer from '../components/footer'
import LayoutStyle from "./layoutStyle";
import Header from "../components/header";

export default function OtherLayout({ children }) {
    return (
        <LayoutStyle.Container>
            <Header layout="other"/>
            <LayoutStyle.LayoutChildren>
            {children}
            </LayoutStyle.LayoutChildren>
            <Footer />
        </LayoutStyle.Container>
    )
}
