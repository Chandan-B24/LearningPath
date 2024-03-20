import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IconType } from "react-icons";


type FooterLinks = {
    id :number,
    link : string,
    icon :IconType
}

export const footerLinks:FooterLinks[] = [
    {
        id : 1,
        link : 'https://github.com/Chandan-B24',
        icon : FaGithub
    }
,
    {
        id : 2,
        link : 'https://www.linkedin.com/in/chandan-b-2a4b6a225/',
        icon : FaLinkedin
    }
,
    {
        id : 3,
        link : 'chandanb24002@gmail.com',
        icon : IoMdMail
    }
,
    {
        id : 4,
        link : 'https://www.instagram.com/mr__chandu_24/',
        icon : FaInstagram
    }
]