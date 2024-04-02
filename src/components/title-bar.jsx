import { FaFreeCodeCamp } from "react-icons/fa";
import { TfiFullscreen } from "react-icons/tfi";
import PropTypes from "prop-types";

export function TitleBar({ title, handleClick }) {
	return (
		<div className="w-full h-min flex flex-row items-end justify-start gap-2 bg-[#4AA3A3] p-2 rounded-t-md font-extrabold">
			<FaFreeCodeCamp />
			<span className="inline-block align-bottom">{title}</span>
			<TfiFullscreen className="ms-auto" onClick={handleClick} />
		</div>
	);
}

TitleBar.propTypes = {
	title: PropTypes.string,
	handleClick: PropTypes.func,
};
