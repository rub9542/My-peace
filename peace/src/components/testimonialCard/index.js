import React from 'react'

import { TestimonialAuthorName, TestimonialCardDescription, TestimonialCardWrapper } from './testimonialCardStyle'
import QuoteIcon from "../../images/homePage/quote.png"

export default function index() {
    return (
        <TestimonialCardWrapper>
            <img
                src={QuoteIcon}
                alt="Quote"
            />
            <TestimonialCardDescription>
                We would like to let you know how much we appreciate the special care our daughter was given by the doctors and staff at your hospital. Our baby’s physician was professional, kind, understanding, and her treatment was “right on.”
            </TestimonialCardDescription>
            <TestimonialAuthorName>
                <svg width="11" height="4" viewBox="0 0 11 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 2H11" stroke="#13443e" strokeWidth="3" />
                </svg>
                <span>Nisha</span>
            </TestimonialAuthorName>
        </TestimonialCardWrapper>
    )
}
