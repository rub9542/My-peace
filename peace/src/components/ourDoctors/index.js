import React from 'react'
import { DefaultButton } from '../button'

import DoctorCard from "../doctorCard"
import SecondaryTitle from '../secondaryHeaderTitle'
import { DoctorCardsWrapper, OurDoctorsSectionParagraphText, OurDoctorsSectionWrapper } from './ourDoctorsStyle'
import Varsha from "../../images/doctors/varsha.png"
import Shukla from "../../images/doctors/shukla.png"
import Sharin from "../../images/doctors/sharin.png"
import Neha from "../../images/doctors/neha.png"

const doctorsData = [
    {
        path: Varsha,
        name: 'Varsha Punarvasu',
        title: "MD (Psychiatry)",
        position: 'Sr. Consultant Psychiatrist'
    },
    {
        path: Shukla,
        name: 'Ms. Akshita Shukla',
        title: "MD (Psychiatry)",
        position: 'Sr. Consultant Psychiatrist'
    },
    {
        path: Sharin,
        name: 'Ms. Kamna Sarin',
        title: "MD (Psychiatry)",
        position: 'Sr. Consultant Psychiatrist'
    },
    {
        path: Neha,
        name: 'Ms Neha Rao',
        title: "MD (Psychiatry)",
        position: 'Sr. Consultant Psychiatrist'
    },
]

export default function index() {
    return (
        <OurDoctorsSectionWrapper>
            <SecondaryTitle
                title="About"
                subTitle="Our doctors"
            />
            <OurDoctorsSectionParagraphText>
                With a team of experienced doctors led by our Resident Director - Dr Sameer Kalani, we can assure you that everybody is in good hands here. With an emphasis on relaxation and restoration of your mental well-being, we have a clinical team of psychiatrists, clinical psychologists, counselling psychologists, visiting consultants, general physicians, art therapists and fitness therapists.
            </OurDoctorsSectionParagraphText>
            <DoctorCardsWrapper>
                {doctorsData.map((doctor, idx) => <DoctorCard doctor={doctor} key={doctor.name} />)}
            </DoctorCardsWrapper>
            <div>
                <DefaultButton name="View all doctors" />
            </div>
        </OurDoctorsSectionWrapper>
    )
}
