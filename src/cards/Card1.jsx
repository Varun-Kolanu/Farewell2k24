import React from "react";

const Card1 = ({ page, handleNext, handlePrev }) => {
	return (
		<div className={`perspective-1 ${page > 1 && "w-0 h-0"} absolute`}>
			<div
				className={` transition-all duration-1000 origin-left ${page > 1 && "rotate-y-135"} ${
					page == 1 && "rotate-y-20"
				} overflow-hidden w-80 h-[500px] relative bg-[#c5efc9] flex flex-col justify-center items-center`}
				onClick={() => {
					page > 1 && handlePrev();
				}}>
				{page == 1 && (
					<>
						<div className="bg-red-500 w-80 h-80 rounded-full absolute -top-28 -left-40"></div>
						<div className="bg-red-500 w-16 h-16 rounded-bl-full absolute top-0 right-0"></div>
						<div className="bg-red-500 w-40 h-40 rounded-full absolute -bottom-12 -right-28"></div>

						<div className="p-9 ">
							<div className="text-5xl space-x-3 font-bold font-sans z-10 relative top-2 left-3">
								<span className="text-[#c5efc9]">Ar</span>
								<span className="text-red-500 relative -left-3 [word-spacing:5px]">
									e you ready to dive into nostalgia?
								</span>
							</div>
						</div>

						<button
							onClick={handleNext}
							className="bg-red-500 text-[#c5efc9] px-3 py-1 rounded-md relative top-6">
							Yes! Tell me more..
						</button>

						<div className="absolute bottom-4 text-red-500 font-sans">
							<span className="font-bold text-lg"> COPS </span> <span> Farewell 2k24 </span>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card1;
