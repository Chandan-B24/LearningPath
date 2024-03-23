import React from 'react'
import CodeSnippet from '../CodeSnippet/CodeSnippet'
import Heading from '../Heading/Heading';
import Paragraph from '../Paragraph/Paragraph';
import SubHeading from '../SubHeading/SubHeading';
import { helloWorldString,typeString,nullString,undefinedString } from '../../constatns/Jscodes/Jsintroduction';

const JSIntroduction = () => {

  return (
    <div className='mb-24'>
        <div className='my-5'>
            <Heading>1.Introduction</Heading>
            <Paragraph>Welcome to the Daily Tracker learning path.</Paragraph>
            <Paragraph>Whether you are an experienced programmer or not, this website is intended for everyone who wishes to learn the JavaScript programming language.</Paragraph>
            <Paragraph>JavaScript is a very powerful language. It can be used within any browser in the world. On top of that, it can be used to write server-side code using node.js.</Paragraph>
            <Paragraph>Let's start coding our first javscript as hello world program.</Paragraph>
        </div>
            <CodeSnippet >
                {helloWorldString}
            </CodeSnippet>
            <div className='my-5'>
                <Heading>1.1 Variables & Types</Heading>
                <Paragraph>Javascipt is a dynamic language, & it is also called as "duck-typed" language, and therefore every variable is defined using the var keyword, and can contain all types of variables.</Paragraph>
                <SubHeading >Types in Javascipt are :</SubHeading>
                <CodeSnippet>
                {typeString}
                </CodeSnippet>
                <Heading>1.2 Undefined & Null Types</Heading>
                <Paragraph>When a variable is used without first defining a value for it, it is equal to undefined</Paragraph>
                <CodeSnippet>{undefinedString}</CodeSnippet>
                <Paragraph>However, the null value is a different type of value, and is used when a variable should be marked as empty. undefined can be used for this purpose, but it should not be used.</Paragraph>
                <CodeSnippet>{nullString}</CodeSnippet>    
            </div>
    </div>
  )
}

export default JSIntroduction