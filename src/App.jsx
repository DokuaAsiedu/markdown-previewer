import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import { sampleText } from "./utils";
import { Credit, TitleBar } from "./components";

export default function App() {
	const [content, setContent] = useState(sampleText);
	const [editorFullScreen, setEditorFullScreen] = useState(false);
	const [previewerFullScreen, setPreviewerFullScreen] = useState(false);

	const handleChange = (event) => {
		setContent(event.target.value);
	};

	const handleEditor = () => {
		setEditorFullScreen((prev) => !prev);
	};

	const handlePreview = () => {
		setPreviewerFullScreen((prev) => !prev);
	};

	useEffect(() => {
		console.log(editorFullScreen);
	});

	return (
		<div className="flex flex-col items-center justify-start gap-4 py-12 h-full min-h-screen text-black relative">
			{!previewerFullScreen && (
				<div
					className={`w-3/4 md:w-2/5 flex flex-col items-stretch justify-start overflow-y-auto ${
						editorFullScreen ? "flex-1" : ""
					}`}
				>
					<TitleBar title="Editor" handleClick={handleEditor} />
					<textarea
						onInput={handleChange}
						className={`w-full h-full min-h-52 p-2 bg-[#C0D7D8] resize-none rounded-b-md overflow-y-auto ${
							editorFullScreen ? "flex-1" : ""
						}`}
						defaultValue={content}
					></textarea>
				</div>
			)}
			{!editorFullScreen && (
				<div
					className={`w-11/12 md:w-3/5 flex flex-col items-stretch justify-start overflow-y-auto ${
						previewerFullScreen ? "flex-1" : ""
					}`}
				>
					<TitleBar title="Previewer" handleClick={handlePreview} />
					<div
						className={`w-full h-full min-h-60 px-4 pt-2 pb-4 bg-[#C0D7D8] rounded-b-md overflow-y-auto ${
							previewerFullScreen ? "flex-1" : ""
						}`}
						dangerouslySetInnerHTML={{
							__html: DOMPurify.sanitize(marked.parse(content)),
						}}
					></div>
				</div>
			)}
			<Credit />
		</div>
	);
}
