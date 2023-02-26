import React from 'react'

import OpdImage from "../../images/facilities/opd.png"
import { OtherExperienceImageSectionWrapper, OtherExperienceSectionWrapper, OtherExperiencetTextSectionWrapper } from './experienceSectionStyle'

export default function OtherModalContent({title}) {
    return (
        <OtherExperienceSectionWrapper>
            <OtherExperiencetTextSectionWrapper>
                <h3>
                   {title || "Resident Lounges"}
                </h3>
                <p>At Sukoon, every floor has a modern resident lounge that comprises of a dining area, movie lounge, and board game tables. These versatile spaces are also used for art-based therapy, wellness classes, and group therapy.</p>
            </OtherExperiencetTextSectionWrapper>
            <OtherExperienceImageSectionWrapper>
                <img src={OpdImage} alt="EXPERIENCE SECTION" />
            </OtherExperienceImageSectionWrapper>
        </OtherExperienceSectionWrapper>
    )
}
