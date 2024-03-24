import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { tsIntersection, tsUnions, tstypeExpCode } from '../../constatns/TScodes/TStypes'
import SubHeading from '../SubHeading/SubHeading'

const TStypes = () => {
  return (
    <div className='mb-24'>
      <div className="my-5">
        <Heading>4. Types</Heading>
        <Paragraph>Very similar to interfaces , types let you aggregate data together.</Paragraph>
        <CodeSnippet>{tstypeExpCode}</CodeSnippet>
        <Paragraph>But they let you do a few other things.</Paragraph>
        <SubHeading>4.1. Unions</SubHeading>
        <Paragraph>Lets say you want to print the id of a user, which can be a number or a string.</Paragraph>
        <Paragraph>You can not do this using interfaces</Paragraph>
        <CodeSnippet>{tsUnions}</CodeSnippet>
        <SubHeading>4.2 Intersections</SubHeading>
        <Paragraph>What if you want to create a type that has every property of multiple types/ interfaces (you cannot do this using interface)</Paragraph>
        <CodeSnippet>{tsIntersection}</CodeSnippet>
      </div>
    </div>
  )
}

export default TStypes