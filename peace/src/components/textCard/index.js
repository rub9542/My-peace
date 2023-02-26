import React from 'react'
import { ParagraphText, TextCardWrapper } from './textCardStyle'

export default function FaclityPageTextCard({ title, description }) {
    return (
        <TextCardWrapper>
            <h2>{title}</h2>
            <ParagraphText>
                {description}
            </ParagraphText>
        </TextCardWrapper>
    )
}
