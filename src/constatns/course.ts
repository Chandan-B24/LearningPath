import jsImage from '../assets/js.png'
import tsImage from '../assets/ts.png'

type Course = {
    id : number,
    name : string,
    description : string,
    path : string,
    image : string
}

export const course:Course[] = [
    {
        id : 1,
        name : 'Javascript',
        description : ' JavaScript from basics to advanced concepts with this comprehensive learning path.',
        path : '/js',
        image : jsImage
    },
    {   
        id : 2,
        name : 'Typescript',
        description : 'Learn about strongly typed languages, Typescript and how you can integrate into your existing javascript codebase',
        path : '/ts',
        image : tsImage
    },
]
