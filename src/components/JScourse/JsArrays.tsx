import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { addressingString, arrayElementsString, declareArrayString } from '../../constatns/Jscodes/Jsarrays'
import SubHeading from '../SubHeading/SubHeading'

const JsArrays = () => {
  return (
    <div className='mb-24'>
      <div className='my-5'>
        <Heading>2. Arrays</Heading>
        <Paragraph>JavaScript can hold an array of variables in an Array object. In JavaScript, an array also functions as a list, a stack or a queue.
        </Paragraph> 
        <Paragraph>To define an array, either use the brackets notation or the Array object notation:</Paragraph>
        <CodeSnippet>{declareArrayString}</CodeSnippet>
        <SubHeading>Addressing</SubHeading>
        <Paragraph>We can use the brackets [] operator to address a specific cell in our array. Addressing uses zero-based indices, so for example, in myArray the 2nd member can be addressed with index 1. One of the benefits of using an array datastructure is that you have constant time look-up, if you already know the index of the element you are trying to access.
        </Paragraph> 
        <CodeSnippet>{addressingString}</CodeSnippet>
        <SubHeading>Array Elements</SubHeading>
        <Paragraph>Because JavaScript Arrays are just special kinds of objects, you can have elements of different types stored together in the same array. The example below is an array with a string, a number, and an empty object.</Paragraph>
        <CodeSnippet>{arrayElementsString}</CodeSnippet>
      </div>
    </div>
  )
}

export default JsArrays