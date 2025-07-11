interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
    return <input {...props} 
    className="border-1 border-gray-300 mb-2 rounded-sm py-1 px-3 text-black text-sm focus:border-blue-500
    outline-none cursor-pointer" 
    />
}