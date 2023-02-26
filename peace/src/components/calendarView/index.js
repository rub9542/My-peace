import React from 'react'

import { CalendarSectionWrapper, DaysWrapper, EventText, EventWrapper, SingleCell, Text, TimeEventWrapper, TimeSection, TimeText } from './calendarViewStyle'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

const svgEclipse = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5" stroke="#559067" strokeWidth="6" />
</svg>
export default function index() {
    return (
        <CalendarSectionWrapper className='hide-scrollbar'>
            <div>
            <DaysWrapper>
                <div></div>
                {days.map((day) => <div key={day}>
                    <Text>
                        {day}
                    </Text>
                </div>)}
            </DaysWrapper>
            <TimeEventWrapper>
                <SingleCell top="0" width="87.5%">
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>7:00 - 7:15</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Wake up</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>7:30 - 8:30</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Walk/Yoga/Physio/Gym - 30 mins with icons</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>9:00 - 10:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Breakfast</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>10:00 - 12:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Psychiatrist, Mental Gym, Psychotherapy, Art Therapy- with icons</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>12:00 - 13:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Unstructured rec - reading, business centre, meditation center, sports, board games,</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="14.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>13:00 - 14:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="82.5%">
                            <EventWrapper>
                                <EventText>Lunch</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper>
                        <SingleCell width="84%" top="0">
                            <TimeEventWrapper align="center">
                                <SingleCell width="17.5%">
                                    <TimeSection>
                                        {svgEclipse}
                                        <TimeText>14:00 - 16:00</TimeText>
                                    </TimeSection>
                                </SingleCell>
                                <SingleCell width="78.5%">
                                    <EventWrapper>
                                        <EventText>Rest</EventText>
                                    </EventWrapper>
                                </SingleCell>
                            </TimeEventWrapper>
                            <TimeEventWrapper align="center">
                                <SingleCell width="17.5%">
                                    <TimeSection>
                                        {svgEclipse}
                                        <TimeText>16:30</TimeText>
                                    </TimeSection>
                                </SingleCell>
                                <SingleCell width="78.5%">
                                    <EventWrapper>
                                        <EventText>Tea/wellness shop</EventText>
                                    </EventWrapper>
                                </SingleCell>
                            </TimeEventWrapper>
                            <TimeEventWrapper align="center">
                                <SingleCell width="17.5%">
                                    <TimeSection>
                                        {svgEclipse}
                                        <TimeText>16:30 - 17:30</TimeText>
                                    </TimeSection>
                                </SingleCell>
                                <SingleCell width="78.5%">
                                    <EventWrapper>
                                        <EventText>Structured rec - golf, badminton, pool table, swimming, bird watching</EventText>
                                    </EventWrapper>
                                </SingleCell>
                            </TimeEventWrapper>
                        </SingleCell>
                        <SingleCell width="12.5%">
                            <EventWrapper height="100%">
                                <EventText>15:00 - 17:00 Group Therapy</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                </SingleCell>
                <SingleCell width="12.5%">
                    <EventWrapper height="100%">
                        <EventText>
                            Spa Day
                        </EventText>
                    </EventWrapper>
                </SingleCell>
            </TimeEventWrapper>
            <TimeEventWrapper>
                <SingleCell top="0" width="75%">
                    <TimeEventWrapper align="center">
                        <SingleCell width="16.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>17:30 - 18:30</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="79.5%">
                            <EventWrapper>
                                <EventText>horticulture, pottery, cooking classes</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="16.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>18:30 - 19:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="79.5%">
                            <EventWrapper>
                                <EventText>clean up/turn down service</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="16.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>19:00 - 20:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="79.5%">
                            <EventWrapper>
                                <EventText>Mindfullness time</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                    <TimeEventWrapper align="center">
                        <SingleCell width="16.5%">
                            <TimeSection>
                                {svgEclipse}
                                <TimeText>20:00 - 21:00</TimeText>
                            </TimeSection>
                        </SingleCell>
                        <SingleCell width="79.5%">
                            <EventWrapper>
                                <EventText>Dinner Time</EventText>
                            </EventWrapper>
                        </SingleCell>
                    </TimeEventWrapper>
                </SingleCell>
                <SingleCell width="25%">
                    <EventWrapper height="100%">
                        <EventText>
                            Family activity - 1 hr every week Communal family activity - 1hr every week Cooking classes, zumba classes, music classes, dance classes Spa Family activity - 1 hr every week Communal family activity - 1hr every week Cooking classes, zumba classes, music classes, dance classes Spa
                        </EventText>
                    </EventWrapper>
                </SingleCell>
            </TimeEventWrapper>
            </div>
        </CalendarSectionWrapper>
    )
}


