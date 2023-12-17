import { SVGPropsElement } from "../types"

export const ArabicFlag:React.FC<SVGPropsElement> = (props) => (
	<svg {...props} viewBox="0 0 1990 1050">
		<g>
			<g>
			<path d="m0,0h1990v1050H0V0Z"/>
				<path className="fill-[#fff]" d="m0,0h1990v700H0V0Z"/>
				<path className="fill-[#d21034]" d="m0,0h1990v350H0V0Z"/>
				<path className="fill-[#007229]" d="m0,0l700,525L0,1050V0Z"/>
			</g>
		</g>
	</svg>
)