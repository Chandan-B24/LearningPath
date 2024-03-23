import React from 'react'
import Heading from '../Heading/Heading'
import SubHeading from '../SubHeading/SubHeading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { functionType, greetings, isLegal, sum } from '../../constatns/TScodes/TSbasic'

const TSBasicTypes = () => {
  return (
    <div className='mb-24'>
        <div className='my-5'>
            <Heading>2. Basic types in typescript</Heading>
            <Paragraph>1. number</Paragraph>
            <Paragraph>2. string</Paragraph>
            <Paragraph>3. boolean</Paragraph>
            <Paragraph>4. null</Paragraph>
            <Paragraph>5. undefined</Paragraph>
            <SubHeading>Problem 1 Hello world</SubHeading>
            <Paragraph>In the given beloq code snippet you'll learn how to type function argument</Paragraph>
            <CodeSnippet>{greetings}</CodeSnippet>
            <SubHeading>Problem 2 Sum function</SubHeading>
            <Paragraph>In the below codesnippet you'll learn how to use number type as argument using sum of two numbers</Paragraph>
            <CodeSnippet>{sum}</CodeSnippet>
            <SubHeading>Problem 3 Return true or false based on if a user is 18+</SubHeading>
            <Paragraph>in the below code using boolean type return the correct value based on condition</Paragraph>
            <CodeSnippet>{isLegal}</CodeSnippet>
            <SubHeading>Problem 4 Function typing in arguments</SubHeading>
            <Paragraph>in the below codesnippet you'll learn how pass function as a argument and type that function using typescript</Paragraph>
            <CodeSnippet>{functionType}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSBasicTypes