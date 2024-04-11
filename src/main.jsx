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
	},
	{
		name: "Kushal Kumar",
		link: "/kushal-kumar",
		gender: "M",
	},
	{
		name: "Ayush Agarwal",
		link: "/ayush-agarwal",
		gender: "M",
	},
	{
		name: "Arunabh Gupta",
		link: "/arunabh-gupta",
		gender: "M",
	},
	{
		name: "Divyansh Srivastava",
		link: "/divyansh-srivastava",
		gender: "M",
	},
	{
		name: "Devansh Mishra",
		link: "/devansh-mishra",
		gender: "M",
	},
	{
		name: "Yash Shimpi",
		link: "/yash-shimpi",
		gender: "M",
	},
	{
		name: "Prakhar Agarwal",
		link: "/prakhar-agarwal",
		gender: "M",
	},
	{
		name: "Anshuman Maurya",
		link: "/anshuman-maurya",
		gender: "M",
	},
	{
		name: "Eshwar S",
		link: "/eshwar-s",
		gender: "M",
	},
	{
		name: "Utkarsh Kumar Sahu",
		link: "/utkarsh-kumar-sahu",
		gender: "M",
	},
	{
		name: "Aditya Kumar Singh",
		link: "/aditya-kumar-singh",
		gender: "M",
	},
	{
		name: "Aadeesh Oswal",
		link: "/aadeesh-oswal",
		gender: "M",
	},
	{
		name: "Ankur Ashok Patil",
		link: "/ankur-ashok-patil",
		gender: "M",
	},
	{
		name: "Thakur Abhishek Aman",
		link: "/thakur-abhishek-aman",
		gender: "M",
	},
	{
		name: "Shubhangi",
		link: "/shubhangi",
		gender: "F",
	},
	{
		name: "Saumya Kushwaha",
		link: "/saumya-kushwaha",
		gender: "F",
	},
	{
		name: "Eshaan Agarwal",
		link: "eshan-agarwal",
		gender: "M",
	},
	{
		name: "Vaibhav Tripathi",
		link: "/vaibhav-tripathi",
		gender: "M",
	},
	{
		name: "Debarati Bandopadhyay",
		link: "/debarati-bandopadhyay",
		gender: "F",
	},
	{
		name: "Niyati Srivastava",
		link: "/niyati-srivastava",
		gender: "F",
	},
	{
		name: "Utkarsh Pandey",
		link: "/utkarsh-pandey",
		gender: "M",
	},
	{
		name: "Ashlesha Dixit",
		link: "/ashlesha-dixit",
		gender: "F",
	},
	{
		name: "Puranjay Khanijo",
		link: "/puranjay-khanijo",
		gender: "M",
	},
	{
		name: "Ravi Dev Pandey",
		link: "/raiv-dev-pandey",
		gender: "M",
	},
	{
		name: "Bhardwaj Bhaskar",
		link: "/bhardwaj-bhaskar",
		gender: "M",
	},
	{
		name: "Paarth Agarwal",
		link: "/paarth-agarwal",
		gender: "M",
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
