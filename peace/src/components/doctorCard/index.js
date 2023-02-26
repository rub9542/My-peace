import React from 'react'
import { DoctorCardSubTitle, DoctorCardTextWrapper, DoctorCardTitle, DoctorCardWrapper, SubLabel } from './doctorCardStyle'

export default function index({doctor}) {
  return (
    <DoctorCardWrapper bg={doctor.path}>
        <DoctorCardTextWrapper>
            <DoctorCardTitle>{doctor.name}</DoctorCardTitle>
            <DoctorCardSubTitle>{doctor.title}</DoctorCardSubTitle>
            <SubLabel>{doctor.position}</SubLabel>
        </DoctorCardTextWrapper>
    </DoctorCardWrapper>
  )
}
