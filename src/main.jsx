import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const seniorData = [
	{
		name: "Test Name",
		link: "/",
		gender: "M",
		custom_award_title: "Test",
	},
	{
		name: "Kushal Kumar",
		link: "/kushal-kumar",
		gender: "M",
		custom_award_title: "The Everyday Hero",
	},
	{
		name: "Ayush Agarwal",
		link: "/ayush-agarwal",
		gender: "M",
		custom_award_title: "The Helping Hand",
	},
	{
		name: "Arunabh Gupta",
		link: "/arunabh-gupta",
		gender: "M",
		custom_award_title: "The Game (Literally) Changer",
	},
	{
		name: "Divyansh Srivastava",
		link: "/divyansh-srivastava",
		gender: "M",
		custom_award_title: "Gonna Take My Fache to NYT",
	},
	{
		name: "Devansh Mishra",
		link: "/devansh-mishra",
		gender: "M",
		custom_award_title: "Most Kanpuriya",
	},
	{
		name: "Yash Shimpi",
		link: "/yash-shimpi",
		gender: "M",
		custom_award_title: "Fachiyon ki Hero",
	},
	{
		name: "Prakhar Agarwal",
		link: "/prakhar-agarwal",
		gender: "M",
		custom_award_title: "The DEV Gawd",
	},
	{
		name: "Anshuman Maurya",
		link: "/anshuman-maurya",
		gender: "M",
		custom_award_title: "The Heart Breaker",
	},
	{
		name: "Eshwar S",
		link: "/eshwar-s",
		gender: "M",
		custom_award_title: "The Best Hecker",
	},
	{
		name: "Utkarsh Kumar Sahu",
		link: "/utkarsh-kumar-sahu",
		gender: "M",
		custom_award_title: "The ML Guru",
	},
	{
		name: "Aditya Kumar Singh",
		link: "/aditya-kumar-singh",
		gender: "M",
		custom_award_title: "The Best Diplomat",
	},
	{
		name: "Aadeesh Oswal",
		link: "/aadeesh-oswal",
		gender: "M",
		custom_award_title: "Sweetest Smile Ever",
	},
	{
		name: "Ankur Ashok Patil",
		link: "/ankur-ashok-patil",
		gender: "M",
		custom_award_title: "The Ladies Man",
	},
	{
		name: "Thakur Abhishek Aman",
		link: "/thakur-abhishek-aman",
		gender: "M",
		custom_award_title: "The CP God",
	},
	{
		name: "Shubhangi",
		link: "/shubhangi",
		gender: "F",
		custom_award_title: "Swiftie of the Year",
	},
	{
		name: "Saumya Kushwaha",
		link: "/saumya-kushwaha",
		gender: "F",
		custom_award_title: "Always There for You",
	},
	{
		name: "Eshaan Agarwal",
		link: "eshan-agarwal",
		gender: "M",
		custom_award_title: "Apun Mast Aadmi",
	},
	{
		name: "Vaibhav Tripathi",
		link: "/vaibhav-tripathi",
		gender: "M",
		custom_award_title: "Biz Wiz",
	},
	{
		name: "Debarati Bandopadhyay",
		link: "/debarati-bandopadhyay",
		gender: "F",
		custom_award_title: "Miss Talented",
	},
	{
		name: "Niyati Srivastava",
		link: "/niyati-srivastava",
		gender: "F",
		custom_award_title: "Always Wore It Best",
	},
	{
		name: "Utkarsh Pandey",
		link: "/utkarsh-pandey",
		gender: "M",
		custom_award_title: "The Powerhouse",
	},
	{
		name: "Ashlesha Dixit",
		link: "/ashlesha-dixit",
		gender: "F",
		custom_award_title: "Breathtaking Voice",
	},
	{
		name: "Puranjay Khanijo",
		link: "/puranjay-khanijo",
		gender: "M",
		custom_award_title: "Always Acing It",
	},
	{
		name: "Ravi Dev Pandey",
		link: "/raiv-dev-pandey",
		gender: "M",
		custom_award_title: "Chandler Bing IRL",
	},
	{
		name: "Bhardwaj Bhaskar",
		link: "/bhardwaj-bhaskar",
		gender: "M",
		custom_award_title: "The MVP",
	},
	{
		name: "Paarth Agarwal",
		link: "/paarth-agarwal",
		gender: "M",
		custom_award_title: "OpenSource GodFather",
	},
	{
		name: "Manan Rathi",
		link: "/manan-rathi",
		gender: "M",
		custom_award_title: "The Chillax Dude",
	},
];

const router = createBrowserRouter(
	seniorData.map((s) => ({
		path: s.link,
		element: <App senior={s} />,
	}))
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
