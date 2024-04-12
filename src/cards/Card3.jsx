import React from "react";

const Card3 = ({ page, handleNext, handlePrev }) => {
	return (
		<div className={`perspective-3 ${page > 3 && "w-0 h-0"} absolute`}>
			<div
				className={`py-2 transition-all duration-1000 origin-left ${page > 3 && "rotate-y-135"} ${
					page == 3 && "rotate-y-20"
				} overflow-hidden w-80 h-[500px] relative bg-red-500 flex flex-col justify-around items-center`}
				onClick={() => {
					page > 3 && handlePrev();
				}}>
				{page == 3 && (
					<>
						<div className="pl-5 pr-3 relative mb-2">
							<div className="flex flex-col">
								<span
									className="
                    text-white
                  text-4xl space-x-3 font-bold font-sans">
									In your honour, we have decided to host a dinner
								</span>
							</div>
						</div>

						<div className="w-full h-full flex justify-center items-center">
							<img src="/dinner.jpg" className="rounded-full w-56 h-56" />
						</div>

						<button
							onClick={handleNext}
							className="bg-white text-red-500 px-3 py-1 rounded-md w-20 h-8 m-2">
							Next
						</button>

						<div className="text-white font-mono">
							<span className="font-bold text-lg"> COPS </span> <span> Farewell 2k24 </span>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card3;
