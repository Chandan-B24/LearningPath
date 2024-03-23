import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import tsimage from '../../assets/typescript1.png'
import tscompileimage from '../../assets/typescriptcompile.png'
import Image from '../Image/Image'
import SubHeading from '../SubHeading/SubHeading'

const TSintroduction = () => {
  return (
    <div className='mb-24'>
        <div className='my-5'>
            <Heading>1. Introduction</Heading>
            <Paragraph>TypeScript is a strict syntactical superset of JavaScript, adding optional static typing. Developed and maintained by Microsoft, it allows developers to use the latest ECMAScript features and compile the code to plain JavaScript, which can be run in any browser or Node.js environment.</Paragraph>
            <Paragraph>The major advantage of using TypeScript is its static typing feature, which helps catch errors early during the development phase. This can be invaluable for larger projects where catching bugs early can save a significant amount of time and money.</Paragraph>
            <Image source={tsimage} className='w-[25%] h-[25%]'/>
            <SubHeading>Where/How does typescript code run?</SubHeading>
            <Paragraph>Typescript code never runs in your browser. Your browser can only understand javascript.</Paragraph>
            <Paragraph>1. Javascript is the runtime language (the thing that actually runs in your browser/nodejs runtime)</Paragraph>
            <Paragraph>2. Typescript is something that compiles down to javascript</Paragraph>
            <Paragraph>3. When typescript is compiled down to javascript, you get type checking (similar to C++). If there is an error, the conversion to Javascript fails. </Paragraph>
            <Image source={tscompileimage} className='w-full h-full'/>
            <SubHeading>Typescript compiler</SubHeading>
            <Paragraph>tsc is the official typescript compiler that you can use to convert Typescript code into Javascript</Paragraph>
            <Paragraph>There are many other famous compilers/transpilers for converting Typescript to Javascript. Some famous ones are - </Paragraph>
            <Paragraph>1. esbuild</Paragraph>
            <Paragraph>2. swc</Paragraph>
        </div>
    </div>
  )
}

export default TSintroduction