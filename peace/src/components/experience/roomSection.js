import React, { useState } from 'react'

import { DifferentRoomSection, ImageGridSection, ParagraphText, RoomSectionWrapper, TabSection, TabsSection, Title, SingleTab, ServicesGridSection, SingleServiceText, ServiceText, ImageContainer } from './experienceSectionStyle'
import RoomOne from "../../images/rooms/room1.png"
import RoomTwo from "../../images/rooms/room2.png"
import RoomThree from "../../images/rooms/room3.png"
import RoomFour from "../../images/rooms/room4.png"

const roomSectionData = [
    {
        name: "Deluxe Rooms",
        servives: ["24*7 Doctor", "Dedicated Nurse", "Soft-touch Walls", "Gourmet Meals", "Queen Bed", "Private Balcony", "AC & Heater", "Spacious Closet", "Luggage Rack", "Furniture Padded"],
        images: [{url:RoomOne,width:"34%"},{url:RoomFour, width:"47%", height:"100%"},{url:RoomThree, width:"47%"},{url:RoomTwo,width:"48%"},]
    },
    {
        name: "Suite Rooms",
        servives: ["24*7 Doctor", "Dedicated Nurse", "Soft-touch Walls", "Gourmet Meals", "Queen Bed", "Private Balcony", "AC & Heater", "Spacious Closet", "Luggage Rack", "Furniture Padded"],
        images: [{url:RoomOne,width:"34%"},{url:RoomFour, width:"62%"},{url:RoomThree, width:"47%"},{url:RoomTwo,width:"48%"},]
    },
    {
        name: "Intensive Care Unit",
        servives: ["24*7 Doctor", "Dedicated Nurse", "Soft-touch Walls", "Gourmet Meals", "Queen Bed", "Private Balcony", "AC & Heater", "Spacious Closet", "Luggage Rack", "Furniture Padded"],
        images: [{url:RoomOne,width:"34%"},{url:RoomFour, width:"62%"},{url:RoomThree, width:"47%"},{url:RoomTwo,width:"48%"},]
    },
]

export default function RoomSection() {

    const [activeTab, setActiveTab] = useState(roomSectionData[0])

    const onChangeTab = (obj) => {
        setActiveTab(obj)
    }

    return (
        <RoomSectionWrapper>
            <Title>Rooms</Title>
            <ParagraphText>
                At Sukoon, each residential room is thoughtfully designed to aid in your recovery. Sophisticated details such as wooden flooring and lounge seating create a residential comfort, while modern bath amenities and private balconies invite patients to relax. All our rooms are designed in accordance with the American Psychiatric Association(APA) standards.
            </ParagraphText><DifferentRoomSection>
                <TabSection>
                    <TabsSection>
                        {roomSectionData.map((tab) => <SingleTab active={activeTab && activeTab.name === tab.name} onClick={() => onChangeTab(tab)} key={tab.name}>{tab.name}</SingleTab>)}
                    </TabsSection>
                    <ServicesGridSection>
                        {activeTab && activeTab.servives.map((service) => <SingleServiceText key={service}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="8" cy="8" r="5" stroke="#559067" strokeWidth="6" />
                            </svg>
                            <ServiceText>{service}</ServiceText>
                        </SingleServiceText>)}
                    </ServicesGridSection>
                </TabSection>
                <ImageGridSection>
                    {activeTab && activeTab.images.map(image => <ImageContainer width={image.width}  key={image.url}><img src={image.url} height={image.height} alt={image.url} /></ImageContainer>)}
                </ImageGridSection>
            </DifferentRoomSection>
        </RoomSectionWrapper>
    )
}
