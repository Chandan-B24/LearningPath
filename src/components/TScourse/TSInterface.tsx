import React from 'react'
import Heading from '../Heading/Heading'
import SubHeading from '../SubHeading/SubHeading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { tsimplement, tsinterfaceobj, tsinterfacetypeobj, tsisLegalSolution, tsreacttodo } from '../../constatns/TScodes/Tsinterface'

const TSInterface = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>3. Interfaces</Heading>
            <SubHeading className='mt-8'>3.1 What are interfaces</SubHeading>
            <Paragraph>It's a feature of TypeScript that allows us to define the structure or shape of an object and specify the properties and methods that an object has or should have.</Paragraph>
            <Paragraph>Let us go with an example there is a object and we need to assign type for it</Paragraph>
            <CodeSnippet>{tsinterfaceobj}</CodeSnippet>
            <Paragraph>To assign a type to the user object, you can use interfaces</Paragraph>
            <CodeSnippet>{tsinterfacetypeobj}</CodeSnippet>
            <Paragraph>Assignment #1 - Create a function isLegal that returns true or false if a user is above 18. It takes a user as an input.</Paragraph>
            <CodeSnippet>{tsisLegalSolution}</CodeSnippet>
            <Paragraph>Assignment #2 - Create a React component that takes todos as an input and renders them</Paragraph>
            <CodeSnippet>{tsreacttodo}</CodeSnippet>
            <SubHeading>3. 2 Implementing interfaces</SubHeading>
            <Paragraph>Interfaces have another special property. You can implement interfaces as a class.</Paragraph>
            <Paragraph>Let’s say you have an personinterface - </Paragraph>
            <Paragraph>You can create a class which implements this interface.</Paragraph>
            <CodeSnippet>{tsimplement}</CodeSnippet>
            <Paragraph>This is useful since now you can create multiple variants of a person (Manager, CEO …)</Paragraph>
            <SubHeading>Summary</SubHeading>
            <Paragraph>1. You can use interfaces to aggregate data</Paragraph>
            <Paragraph>2. You can use interfaces to implement classes from</Paragraph>
        </div>
    </div>
  )
}

export default TSInterface