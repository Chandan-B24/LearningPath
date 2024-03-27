import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSreadonlyCode } from '../../constatns/TScodes/TSreadonly'

const TSReadonly = () => {
  return (
    <div className='mb-24'>
        <div className='my-5'>
            <Heading>11. Readonly</Heading>
            <Paragraph>When you have a configuration object that should not be altered after initialization, making it Readonly ensures its properties cannot be changed.</Paragraph>
            <CodeSnippet>{TSreadonlyCode}</CodeSnippet>
            <Paragraph>note : This is compile time checking, not runtime (unlike const)</Paragraph>
        </div>
    </div>
  )
}

export default TSReadonly