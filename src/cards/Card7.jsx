import React from "react";

const Card7 = ({ page, handlePrev }) => {
	return (
		<div className={`perspective-1 ${page > 7 && "w-0 h-0"} absolute`}>
			<div
				className={` transition-all duration-1000 origin-left overflow-hidden w-80 h-[500px] relative bg-[#f95d42] flex flex-col justify-center items-center`}
				onClick={() => {
					page > 7 && handlePrev();
				}}>
				{page == 7 && (
					<>
						<div className="p-9 ">
							<div className="text-5xl space-x-3 font-bold font-sans z-10 relative top-2 left-2 ">
								<span
									className="
                  text-green-400
                  relative -left-3
                  [word-spacing:5px]">
									Download this app to know more.
								</span>
							</div>
						</div>

						<div className="absolute bottom-4 text-red-500 font-sans">
							<span className="font-bold text-lg"> COPS </span> <span> Farewell 2k24 </span>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card7;
