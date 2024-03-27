import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSMapCode, TSobjectCode, TSrecordCode } from '../../constatns/TScodes/TSrecordCode'
import SubHeading from '../SubHeading/SubHeading'

const TSRecord = () => {
  return (
    <div className='mb-24'>
      <div className='my-5'>
        <Heading>12 . Record and Map</Heading>
        <Paragraph>Record let’s you give a cleaner type to objects</Paragraph>
        <Paragraph>You can type objects like follows - </Paragraph>
        <CodeSnippet>{TSobjectCode}</CodeSnippet>
        <Paragraph>or use record</Paragraph>
        <CodeSnippet>{TSrecordCode}</CodeSnippet>
        <SubHeading>Map</SubHeading>
        <Paragraph>maps gives you an even fancier way to deal with objects. Very similar to Maps in C++</Paragraph>
        <CodeSnippet>{TSMapCode}</CodeSnippet>
      </div>
    </div>
  )
}

export default TSRecord