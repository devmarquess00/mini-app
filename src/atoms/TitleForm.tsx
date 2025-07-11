import { ReactNode } from 'react';

interface TitleProps {
    title: string,
    icon: ReactNode,
}

export const TitleForm = ({title, icon}: TitleProps) => {
    return (
        <div className='flex gap-1 items-center mb-2'>
            <h1 className='text-gray-900 font-bold'>{title}</h1>
            <span className='text-gray-900'>{icon}</span>
        </div>
    )
}