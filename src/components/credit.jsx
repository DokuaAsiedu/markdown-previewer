import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Credit() {
	return (
		<div className="flex flex-col justify-center align-center gap-2">
			<p>Coded By Dokua</p>
			<div className="container flex flex-row justify-center align-center gap-2 text-2xl">
				<a href="https://github.com/DokuaAsiedu">
					<FaGithub />
				</a>
				<a href="https://www.linkedin.com/in/a-dokua-asiedu-123224132/">
					<FaLinkedin />
				</a>
			</div>
		</div>
	);
}
