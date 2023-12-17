import { SVGPropsElement } from "../types"

export const ChevronDown:React.FC<SVGPropsElement> = (props) => (
    <svg {...props} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  
)