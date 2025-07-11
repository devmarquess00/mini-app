'use client'
import { useState } from 'react';

import { ActionsAtoms } from "@/molecules/ActionsAtoms"
import { TasksCard } from "@/organisms/TasksCard"

export default function Tasks () {

    const [tasks, setTasks] = useState<string[]>([]);

    return (
        <div className="min-h-screen bg-gray-50">
            <ActionsAtoms tasks={tasks} setTasks={setTasks} />
            <TasksCard tasks={tasks} />
        </div>
    )
}