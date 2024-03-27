import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import SubHeading from '../SubHeading/SubHeading'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSconstantexports, TSdefaultexports } from '../../constatns/TScodes/TSmodules'


const TSimportExport = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>8. Importing and Exporting modules</Heading>
            <Paragraph>TypeScript follows the ES6 module system, using import and export statements to share code between different files. Here's a brief overview of how this works:</Paragraph>
            <SubHeading>1. Constant exports</SubHeading>
            <CodeSnippet>{TSconstantexports}</CodeSnippet>
            <SubHeading>2. Default exports</SubHeading>
            <CodeSnippet>{TSdefaultexports}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSimportExport