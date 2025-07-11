interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string,
}

export const Button = ({text, ...props}: ButtonProps) => {
    return <button {...props}
    className="bg-blue-500 py-2 px-4 rounded-sm text-sm hover:cursor-pointer hover:bg-blue-600 duration-150"
    >{text}</button>
}