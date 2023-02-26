import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import {ExploreContainer, ExploreSukoonParagraphText, ImageWrapper,ExploreSukoonTextWrapper,ViewMoreSection,FlowerImage} from './exploreStyle'
import SecondaryHeaderTitle from '../secondaryHeaderTitle'
import { PrimaryLargeButton } from '../button'
import { Link } from 'gatsby'



export default function ExploreSukoon() {


      
  return (
        <ExploreContainer>
            <div>
                <FlowerImage>
                    <StaticImage 
                        alt="flower image"
                        src="../../images/exploreSukoon/flower.png"
                    />
                </FlowerImage>

                <ImageWrapper>
                    <StaticImage 
                        alt="explore sukoon"
                        src="../../images/exploreSukoon/explore.png"
                    />
                </ImageWrapper>
            </div>
            <ExploreSukoonTextWrapper>

                <SecondaryHeaderTitle title="Explore Sukoon" subTitle="Weekly routine" />

                <ExploreSukoonParagraphText>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                </ExploreSukoonParagraphText>

                <ViewMoreSection>
                    <Link to="/weeklyRoutine">
                    <PrimaryLargeButton name ="View"/>
                    </Link>
                </ViewMoreSection>
            </ExploreSukoonTextWrapper>

            {/* <PaddingFlex></PaddingFlex> */}
        </ExploreContainer>
 
  )
}
