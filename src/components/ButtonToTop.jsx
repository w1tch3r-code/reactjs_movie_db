import { useEffect, useState } from "react";

const ButtonToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const top = window.scrollY || document.documentElement.scrollTop;
			setIsVisible(top > 100);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			// Cleanup: Remove the event listener when the component is unmounted
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Empty dependency array ensures that the effect is only executed once during mounting and once during dismounting

	return (
		<>
			{/* Scroll-to-Top Button */}
			{isVisible && (
				<button type="button"
					className="button__scroll__to__top"
					onClick={() => {
						window.scrollTo({
							top: 0,
							behavior: "smooth",
						});
					}}>
				</button>
			)}
		</>
	);
};

export default ButtonToTop;
