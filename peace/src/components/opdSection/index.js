import React, { useState } from 'react'

import FaclityPageTextCard from '../textCard'

import { ActiveOpdImageSection, ActiveOpdInnerSection, ActiveOpdParagraphText, ActiveOpdSection, ActiveOpdTextSection, CloseIcon, OpdGridSection, OpdSectionWrapper, SingleGridSection, SingleInnerSection } from './delhiChattarpurStyle'
import RtmsImage from "../../images/opd/rtms.png"
import WaitingAreaImage from "../../images/opd/waiting_area.png"
import VideoConsultImage from "../../images/opd/video_consult.png"
import PharmacyImage from "../../images/opd/pharmacy.png"
import CafeteriaImage from "../../images/opd/cafetaria.png"
import ConsultingImage from "../../images/opd/consulting.png"
import ArtTherapyImage from "../../images/opd/art_therapy.png"
import ActiveBgImage from "../../images/opd/innerBg.png"
import ActiveImage from "../../images/opd/activeImage.png"
import CloseImage from "../../images/opd/cancel.png"

const opdData = [
    {
        name: "Consulting Chamber",
        bg: ConsultingImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Consulting Chamber",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Pharmacy",
        bg: PharmacyImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Pharmacy",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Rtms",
        bg: RtmsImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Rtms",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Video Consultation",
        bg: VideoConsultImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Video Consultation",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Cafeteria",
        bg: CafeteriaImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Cafeteria",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Waiting Area",
        bg: WaitingAreaImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Waiting Area",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
    {
        name: "Art Therapy",
        bg: ArtTherapyImage,
        data: {
            img: ActiveImage,
            bg: ActiveBgImage,
            title: "Art Therapy",
            description: "Our Clinical nutritionist will plan your meals tailor-made to your health requirements. It is important to us that you eat right!"
        }
    },
]

const textCard = 
    {
      title: "OPD",
      description:
        "Gurgaon is a town in Assam, India and was the capital of the Ahom kingdom for many years. It was built by the Ahom king Suklenmung in 1540. It is said that the capital was built at the suggestion of MongKwang princess Nang Sao Seng from present-day Myanmar who was married to Suklenmung.",
    }

export default function DelhiChattarpurOtp() {

    const [opdSection, setOpdSection] = useState("")

    const onViewOpdSection = (obj) => {
        setOpdSection(obj)
    }

    const onCloseOpdSection = () => {
        setOpdSection('')
    }

    return (
        <OpdSectionWrapper>
            <FaclityPageTextCard title={textCard.title} description={textCard.description}/>
            <OpdGridSection>
                {opdData.map((data) => <SingleGridSection onClick={() => onViewOpdSection(data.data)} bg={data.bg} key={data.name}>
                    <SingleInnerSection>
                        {data.name}
                    </SingleInnerSection>
                </SingleGridSection>)}
                <ActiveOpdSection bg={opdSection && opdSection.bg} active={opdSection}>
                    <ActiveOpdInnerSection>
                        <ActiveOpdTextSection>
                            <h3>{opdSection && opdSection.title}</h3>
                            <ActiveOpdParagraphText>{opdSection && opdSection.description}</ActiveOpdParagraphText>
                        </ActiveOpdTextSection>
                        <ActiveOpdImageSection>
                            <img alt={opdSection && opdSection.description} src={opdSection && opdSection.img} />
                           <CloseIcon onClick={onCloseOpdSection} alt="close opd section"  src={CloseImage}/>
                        </ActiveOpdImageSection>
                    </ActiveOpdInnerSection>
                </ActiveOpdSection>
            </OpdGridSection>
        </OpdSectionWrapper>
    )
}
