import React from 'react'

import ButtonStyle from './buttonStyle'

const DefaultButton = ({name, onClick}) => <ButtonStyle.PrimaryButton onClick={onClick}>{name || "Click Here"}</ButtonStyle.PrimaryButton>

const OutlineButton = ({name, onClick}) => <ButtonStyle.OutlineButton onClick={onClick}>{name || "Click Here"}</ButtonStyle.OutlineButton>

const OutlineLargeButton =({name, onClick})=> <ButtonStyle.OutlineLargeButton onClick={onClick}>{name || "Discover"}</ButtonStyle.OutlineLargeButton>

const PrimaryLargeButton = ({name,onClick}) => <ButtonStyle.PrimaryLargeButton onClick={onClick}>{name || "Book an Appoinment"}</ButtonStyle.PrimaryLargeButton>

export {DefaultButton, OutlineButton, OutlineLargeButton, PrimaryLargeButton}