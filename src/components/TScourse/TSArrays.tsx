import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { tsListUsers, tsMaxValue } from '../../constatns/TScodes/TSarrays'

const TSArrays = () => {
  return (
    <div className='mb-24'>
        <div className='my-5'>
            <Heading>5.  Arrays in Typescript</Heading>
            <Paragraph>If you want to access arrays in typescript, it’s as simple as adding a [] annotation next to the type</Paragraph>
            <SubHeading>Example 1 </SubHeading>
            <Paragraph>Given an array of positive integers as input, return the maximum value in the array</Paragraph>
            <CodeSnippet>{tsMaxValue}</CodeSnippet>
            <SubHeading>Example 2</SubHeading>
            <Paragraph>Given a list of users, filter out the users that are legal (greater than 18 years of age)</Paragraph>
            <CodeSnippet>{tsListUsers}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSArrays