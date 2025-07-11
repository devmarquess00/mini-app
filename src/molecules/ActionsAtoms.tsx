'use client';
import { useState } from 'react';
import { FaNoteSticky } from 'react-icons/fa6';

import { Button } from "@/atoms/Button";
import { Input } from "@/atoms/Input";
import { Textarea } from "@/atoms/Textarea"; 
import { TitleForm } from '@/atoms/TitleForm';

interface ActionsProps {
    tasks: string[];
    setTasks: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ActionsAtoms = ({tasks, setTasks}: ActionsProps) => {
    const [titleTask, setTitleTask] = useState('');
    const [descTask, setDescTasks] = useState('');

    const handleClick = () => {
        if (!titleTask || !descTask) return;

        setTasks((prev) => [...prev, titleTask, descTask]);

        setTitleTask('');
        setDescTasks('');
    }

    return (
        <div className='bg-white w-100 flex flex-col py-5 px-8 rounded-sm shadow-sm'>
            <TitleForm title='Adicionar tarefa' icon={<FaNoteSticky />} />
            <Input
            placeholder='Título da Task'
            value={titleTask}
            onChange={(e) => setTitleTask(e.target.value)}
            />
            <Textarea
            placeholder='Descrição da sua Task...'
            value={descTask}
            onChange={(e) => setDescTasks(e.target.value)}
            />
            <Button text='Adicionar' onClick={handleClick}></Button>
        </div>
    )   
}