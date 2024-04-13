import React from "react";
import { IoOpenOutline } from "react-icons/io5";

const Card4 = ({ page, handleNext, handlePrev }) => {
	return (
		<div
			className={`perspective-4 ${page > 4 && "w-0 h-0"} absolute cursor-default`}
			onClick={() => page <= 4 && handleNext()}>
			<div
				className={`pt-2 transition-all duration-1000 origin-left ${page > 4 && "rotate-y-135"} ${
					page == 4 && "rotate-y-20"
				} overflow-hidden w-72 h-[500px] relative bg-[#fc618a] flex flex-col justify-start items-center`}
				onClick={() => {
					page > 4 && handlePrev();
				}}>
				{page == 4 && (
					<>
						<div className="bg-[#fce501] w-12 h-12 rounded-br-full absolute top-0 left-0"></div>

						<div className="relative top-12">
							<div className="bg-[#fce501] w-48 h-48 rounded-full absolute -top-24 -right-24"></div>
							<div className="bg-[#fc618a] w-24 h-24 rounded-bl-full absolute top-0 right-0"></div>
							<img src="/tanish.avif" alt="" className="w-[250px] h-[250px]" />
						</div>

						<div className="pl-5 pr-3 relative h-full flex flex-col justify-center">
							<div className="flex flex-col ">
								<div className="text-4xl space-x-3 font-bold font-sans">
									<span className="text-[#fce501]">Address: Tanish Cafe </span>
									<a
										href="https://maps.app.goo.gl/ersVG3wZDZdH1WbT7"
										className="inline-block ml-4 relative top-1 text-[#1b97bf]"
										target="_blank">
										<IoOpenOutline />
									</a>
								</div>
								<span className="text-[#fce501] text-xl font-medium">at 6 PM, 17 April</span>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Card4;
