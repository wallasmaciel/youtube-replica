import { Slot } from "@radix-ui/react-slot"
import { forwardRef, InputHTMLAttributes, ReactNode } from "react" 

type Props = {
    children: ReactNode
} 

type CustomClassProps = Props & {
    customClassName?: string
}
function Content({ customClassName, children }: CustomClassProps) {
    return (
        <div className={ "flex bg-zinc-900 px-3 focus-within:ring-[0.06rem] focus-within:ring-cyan-500 ring-zinc-500 ring-[0.02rem] rounded-full " + customClassName }>
            { children }
        </div>
    )
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ ...inputProps }: InputProps, ref?: React.Ref<HTMLInputElement>) => {
    return ref? 
        <input type="text" ref={ ref } { ...inputProps } className="w-[200px] flex-1 bg-transparent text-state-100 placeholder:text-zinc-500 outline-none" />
        :
        <input type="text" { ...inputProps } className="w-[200px] flex-1 bg-transparent text-state-100 placeholder:text-zinc-500 outline-none" />
})

function Icon({ customClassName, children }: CustomClassProps) {
    return (
        <Slot>
            <span className={ `flex cursor-pointer opacity-40 hover:opacity-100 justify-center items-center px-1 ${customClassName}`} >
                { children }
            </span>
        </Slot>
    )
}

export const TextInput = { 
    Content, 
    Input, 
    Icon
}