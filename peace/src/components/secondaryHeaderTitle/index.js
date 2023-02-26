import React from 'react'

import { SecondaryTitle } from './secondaryHeaderTitleStyle'

export default function SecondaryHeaderTitle({ title, subTitle }) {
    return (
        <SecondaryTitle>{title}<br /><span>{subTitle}</span></SecondaryTitle>
    )
}
