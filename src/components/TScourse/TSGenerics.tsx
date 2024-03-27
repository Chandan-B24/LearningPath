import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSTypePrblm, TSgenericsPrblm, TSgenericsPrblmApproach, TSsolutionExample, TSsolutionToOriginalProblem } from '../../constatns/TScodes/TSgenerics'

const TSGenerics = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>7. Generics</Heading>
            <Paragraph>Generics are a language independent concept (exist in C++ as well)</Paragraph>
            <Paragraph>Let’s learn it via an example</Paragraph>
            <SubHeading className='mt-5'>1. Problem Statement</SubHeading>
            <Paragraph>Let’s say you have a function that needs to return the first element of an array. Array can be of type either string or integer.</Paragraph>
            <Paragraph>How would you solve this problem?</Paragraph>
            <CodeSnippet>{TSgenericsPrblm}</CodeSnippet>
            <SubHeading>What is the problem in this approach?</SubHeading>
            <Paragraph>User can send different types of values in inputs, without any type errors</Paragraph>
            <CodeSnippet>{TSgenericsPrblmApproach}</CodeSnippet>
            <Paragraph>Typescript isn’t able to infer the right type of the return type</Paragraph>
            <CodeSnippet>{TSTypePrblm}</CodeSnippet>
            <SubHeading>2. Solution - Generics</SubHeading>
            <Paragraph>Generics enable you to create components that work with any data type while still providing compile-time type safety.</Paragraph>
            <Paragraph>Simple example</Paragraph>
            <CodeSnippet>{TSsolutionExample}</CodeSnippet>
            <SubHeading>3. Solution to original problem</SubHeading>
            <Paragraph>Can you modify the code of the original problem now to include generics in it?</Paragraph>
            <CodeSnippet>{TSsolutionToOriginalProblem}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSGenerics