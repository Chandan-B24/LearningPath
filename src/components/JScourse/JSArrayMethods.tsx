import React from 'react'
import Heading from '../Heading/Heading'
import SubHeading from '../SubHeading/SubHeading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { shiftingString, stackString, unshiftingString } from '../../constatns/Jscodes/JSarrayMethods'

const JSArrayMethods = () => {
  return (
    <div className='mb-24'>
      <div className='my-5'>
        <Heading>3. Array Methods</Heading>
        <Paragraph>The array has so many built-in methods in order to manipulate. so we provide most of the popular array methods along with example for each</Paragraph>
        <SubHeading>Stack operations(push / pop)</SubHeading>
        <Paragraph>Arrays can also function as a stack. The push and pop methods insert and remove variables from the end of an array.
        </Paragraph>
        <CodeSnippet>{stackString}</CodeSnippet>
      </div>
      <div className='my-5'>
        <SubHeading>Queue operations(unshift / shift)</SubHeading>
        <Paragraph>The shift keyword will remove the variables of the array in the exact order they were inserted in</Paragraph>
        <CodeSnippet>{shiftingString}</CodeSnippet>
        <Paragraph>The unshift method is used to insert a variable at the beginning of an array.</Paragraph>
        <CodeSnippet>{unshiftingString}</CodeSnippet>
      </div>
    </div>
  )
}

export default JSArrayMethods