import React from 'react'

import { ModalInnerWrapper, ModalLeftSection, ModalRightSection, ModalWrapper } from './customModalStyle'
import RightArrow from "../../images/facilities/rightArrow.png"
import LeftArrow from "../../images/facilities/leftArrow.png"

export default function index({ children, onPrev, onNext }) {
    return (
        <ModalWrapper>
            <ModalLeftSection>
                <img onClick={onPrev} src={LeftArrow} alt="left arrow button" onKeyUp={onPrev} role='presentation'/>
            </ModalLeftSection>
            <ModalInnerWrapper>
                {children}
            </ModalInnerWrapper>
            <ModalRightSection>
                <img onClick={onNext} src={RightArrow} alt="right arrow button" onKeyDown={onNext} role='presentation'/>
            </ModalRightSection>
        </ModalWrapper>
    )
}
