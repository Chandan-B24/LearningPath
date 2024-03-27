import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import { TSpickCode } from '../../constatns/TScodes/TSpick'

const TSPick = () => {
  return (
    <div className='mb-24'>
        <div className="my-5">
            <Heading>10 . Pick in typescript</Heading>
            <Paragraph>Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).</Paragraph>
            <Paragraph>Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.</Paragraph>
            <CodeSnippet>{TSpickCode}</CodeSnippet>
        </div>
    </div>
  )
}

export default TSPick