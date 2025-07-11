interface TasksProps {
    tasks: string[];
}

export const TasksCard = ({tasks}: TasksProps) => {
    return (
        <div>
            {tasks.map((item, index) => (
                <h1 key={index}>{item}</h1>
            ))}
        </div>
    )
}