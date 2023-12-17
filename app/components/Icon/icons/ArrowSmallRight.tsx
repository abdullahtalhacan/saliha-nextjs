import { SVGPropsElement } from "../types"

export const ArrowSmallRight:React.FC<SVGPropsElement> = (props) => (
	<svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
)

