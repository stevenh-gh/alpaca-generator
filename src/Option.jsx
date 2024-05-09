function Option({ text, setFocus, setStyle, isStyle }) {

	function choose(text) {
		if (isStyle) {
			setStyle(text);
		} else {
			setFocus(text);
		}
	}

	return (
		<button className="capitalize bg-blue-400 rounded-lg p-2 text-white hover:bg-blue-500 focus:bg-blue-700"
			onClick={() => choose(text)}>
			{text}
		</button>
	)
}

export default Option;