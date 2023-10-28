/** @format */

import  { useState } from "react";

const Navbar = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav
			className="p-4 md:p-8 fixed top-0 w-full border-b-2 border-black bg-opacity-100 z-50"
			style={{ fontFamily: "Volkhov" }}
		>
			<div className="container mx-auto">
				<div className="flex items-center justify-between">
					<div className="text-black text-xl md:text-2xl font-semibold">
						Dynie M.
					</div>
					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-xl text-black hover:text-gray-200"
						onClick={toggleMobileMenu}
					>
						☰
					</button>
					{/* Mobile Dropdown Menu */}
					{isMobileMenuOpen && (
						<ul className="md:hidden absolute top-16 right-4 bg-white border border-black p-4 rounded shadow">
							<li>
								<a href="#about" className="block hover:text-gray-500">
									about
								</a>
							</li>
							<li>
								<a href="#work" className="block hover:text-gray-500">
									work
								</a>
							</li>
							<li>
								<a href="#experience" className="block hover:text-gray-500">
									experience
								</a>
							</li>
							<li>
								<a href="#projects" className="block hover:text-gray-500">
									projects
								</a>
							</li>
							<li>
								<a
									href="https://drive.google.com/file/d/18ALg-i8XOepfkyXHtAp3HGqfUuxOfzhW/view?usp=share_link"
									target="_blank"
									rel="noreferrer"
								>
									resume
								</a>
							</li>
						</ul>
					)}
					{/* Desktop Menu */}
					<ul className="hidden md:flex space-x-7 text-lg text-black">
						<li>
							<a href="#about" className="hover:text-gray-200">
								about
							</a>
						</li>
						<li>
							<a href="#experience" className="block hover:text-gray-500">
								experience
							</a>
						</li>
						<li>
							<a href="#projects" className="hover:text-gray-200">
								projects
							</a>
						</li>
						<li>
							<a
								href="https://drive.google.com/file/d/18ALg-i8XOepfkyXHtAp3HGqfUuxOfzhW/view?usp=share_link"
								target="_blank"
								rel="noreferrer"
								className="hover:text-gray-200"
							>
								resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
