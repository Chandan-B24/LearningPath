import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSPartialCode } from '../../constatns/TScodes/TSpartial'
import partialimage from '../../assets/partial.png'
import Image from '../Image/Image'

const TSPartial = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>9. Partial in Typescript</Heading>
            <Paragraph>Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.</Paragraph>
            <Image source={partialimage} className='w-100 h-100'/>
            <Paragraph>Specifically useful when you want to do updates</Paragraph>
            <CodeSnippet>{TSPartialCode}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSPartial