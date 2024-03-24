import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoClipboardOutline } from "react-icons/io5";
import { BsClipboardCheck } from "react-icons/bs";
import Button from '../Buttons/Button';




interface Code{
    children : string
}

const CodeSnippet:React.FC<Code> = ({children}) => {
 
  const [copy,setCopy] = useState<boolean>(false)

  const handleCopyClipBoard = ():void => {
    navigator.clipboard.writeText(children);
    setCopy(true)
    setTimeout(()=>{
      setCopy(false)
    },3000)
  }


  return (
        <>
          <div className='mzx-w-2xl bg-[#3a404d] rounded-md overflow-hidden my-4'>
            <div className='flex justify-between px-4 text-white text-xs item-center py-2'>
              <p className='text-sm font-poppins'>Example Code</p>
            { copy ? 
             ( 
             <Button clasName='inline-flex items-center gap-1 font-poppins'>
                <span className='text-base '><BsClipboardCheck/></span>
                Copied
            </Button>)
            : 
            (<Button clasName='inline-flex items-center gap-1 font-poppins' handelClick={()=>{handleCopyClipBoard()}}>
                <span className='text-base '><IoClipboardOutline/></span>
                Copy code
              </Button>)
              }
            </div>
            <SyntaxHighlighter language="javascript" style={atomOneDark} wrapLongLines={true} className='text-sm md:text-lg lg:text-lg'>
                {children}
            </SyntaxHighlighter>
          </div>
        </>
  )
}

export default CodeSnippet