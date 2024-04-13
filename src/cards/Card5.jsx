import React from "react";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaGlassCheers } from "react-icons/fa";

const Card5 = ({ page, handleNext, handlePrev }) => {
	return (
		<div
			className={`perspective-5 ${page > 5 && "w-0 h-0"} absolute cursor-default`}
			onClick={() => page <= 5 && handleNext()}>
			<div
				className={`transition-all duration-1000 origin-left ${page > 5 && "rotate-y-135"} ${
					page == 5 && "rotate-y-20"
				} overflow-hidden w-72 h-[500px] relative bg-[#2f46ba] flex flex-col justify-start items-center z-40`}
				onClick={() => {
					page > 5 && handlePrev();
				}}>
				{page == 5 && (
					<>
						<div className="text-[#1ed760] font-sans mt-4">
							<span className="font-bold text-lg"> COPS </span> <span> Farewell 2k24 </span>
						</div>

						<div className="relative w-full h-1/2 pl-12 top-16">
							<img
								src="/invitation.jpg"
								className="w-48 h-36 skew-y-12 shadow-md shadow-green-200 absolute z-30 rounded-md"
							/>
							<img
								src="/invitation.jpg"
								className="w-48 h-36 skew-y-12 shadow-md shadow-green-200 absolute z-20 left-8 rounded-md opacity-80"
							/>
							<img
								src="/invitation.jpg"
								className="w-48 h-36 skew-y-12 shadow-md shadow-green-200 absolute z-10 left-16 rounded-md opacity-60"
							/>
						</div>

						<div className="w-full z-30 flex flex-col items-center text-lg">
							<span className="flex justify-center z-30 pl-4 pr-1 text-[#1ed760] font-bold relative">
								Do not forget to carry your plane ticket and the puzzle piece with it! It's going to
								be a fun ride!
							</span>
						</div>

						<MdOutlineFlightTakeoff className="text-[#1ed760] w-10 h-10 -rotate-12 absolute bottom-2 left-2" />

						<div className="rounded-full border-[#1ed760] w-8 h-8 border-2 absolute -bottom-4"></div>
						<div className="rounded-full border-[#1ed760] w-12 h-12 border-2 absolute -bottom-6"></div>
						<div className="rounded-full border-[#1ed760] w-16 h-16 border-2 absolute -bottom-8"></div>
						<div className="rounded-full border-[#1ed760] w-20 h-20 border-2 absolute -bottom-10"></div>
						<div className="rounded-full border-[#1ed760] w-24 h-24 border-2 absolute -bottom-12"></div>
						<div className="rounded-full border-[#1ed760] w-28 h-28 border-2 absolute -bottom-14"></div>
						<div className="rounded-full border-[#1ed760] w-32 h-32 border-2 absolute -bottom-16"></div>
						<div className="rounded-full border-[#1ed760] w-36 h-36 border-2 absolute -bottom-[72px]"></div>
						<div className="rounded-full border-[#1ed760] w-40 h-40 border-2 absolute -bottom-20"></div>

						<FaGlassCheers className="text-[#1ed760] w-10 h-10 absolute bottom-2 right-2" />
					</>
				)}
			</div>
		</div>
	);
};

export default Card5;
