import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { tsEnums, tsEnumsDefault } from '../../constatns/TScodes/TSenums'

const TSEnums = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>6. Enums</Heading>
            <Paragraph>Enums (short for enumerations) in TypeScript are a feature that allows you to define a set of named constants.</Paragraph>
            <Paragraph>The concept behind an enumeration is to create a human-readable way to represent a set of constant values, which might otherwise be represented as numbers or strings.</Paragraph>
            <CodeSnippet>{tsEnums}</CodeSnippet>
            <Paragraph>By default, Red is 0, Green is 1, and so on. You can also manually set values.</Paragraph>
            <CodeSnippet>{tsEnumsDefault}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSEnums