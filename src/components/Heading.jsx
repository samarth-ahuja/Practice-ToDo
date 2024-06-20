import './Heading.css';
export default function Heading({children}){
    return (
        <h1 className='text-2xl text-center uppercase'>{children}</h1>
    )
}