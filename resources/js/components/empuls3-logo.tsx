import { SVGAttributes } from 'react';

export default function Empuls3Logo(props: SVGAttributes<SVGElement>) {
    return (
        <img 
            src="/images/emp-logo.svg" 
            alt="Empuls3 Logo" 
            className={`h-12 ${props.className || ''}`} 
        />
    );
}
