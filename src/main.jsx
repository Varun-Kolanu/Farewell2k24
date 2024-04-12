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
    custom_award_title: "Test",
  },
  {
    name: "Ayush Agarwal",
    link: "/ayush-agarwal",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Arunabh Gupta",
    link: "/arunabh-gupta",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Divyansh Srivastava",
    link: "/divyansh-srivastava",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Devansh Mishra",
    link: "/devansh-mishra",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Yash Shimpi",
    link: "/yash-shimpi",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Prakhar Agarwal",
    link: "/prakhar-agarwal",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Anshuman Maurya",
    link: "/anshuman-maurya",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Eshwar S",
    link: "/eshwar-s",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Utkarsh Kumar Sahu",
    link: "/utkarsh-kumar-sahu",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Aditya Kumar Singh",
    link: "/aditya-kumar-singh",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Aadeesh Oswal",
    link: "/aadeesh-oswal",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Ankur Ashok Patil",
    link: "/ankur-ashok-patil",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Thakur Abhishek Aman",
    link: "/thakur-abhishek-aman",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Shubhangi",
    link: "/shubhangi",
    gender: "F",
    custom_award_title: "Test",
  },
  {
    name: "Saumya Kushwaha",
    link: "/saumya-kushwaha",
    gender: "F",
    custom_award_title: "Test",
  },
  {
    name: "Eshaan Agarwal",
    link: "eshan-agarwal",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Vaibhav Tripathi",
    link: "/vaibhav-tripathi",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Debarati Bandopadhyay",
    link: "/debarati-bandopadhyay",
    gender: "F",
    custom_award_title: "Test",
  },
  {
    name: "Niyati Srivastava",
    link: "/niyati-srivastava",
    gender: "F",
    custom_award_title: "Test",
  },
  {
    name: "Utkarsh Pandey",
    link: "/utkarsh-pandey",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Ashlesha Dixit",
    link: "/ashlesha-dixit",
    gender: "F",
    custom_award_title: "Test",
  },
  {
    name: "Puranjay Khanijo",
    link: "/puranjay-khanijo",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Ravi Dev Pandey",
    link: "/raiv-dev-pandey",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Bhardwaj Bhaskar",
    link: "/bhardwaj-bhaskar",
    gender: "M",
    custom_award_title: "Test",
  },
  {
    name: "Paarth Agarwal",
    link: "/paarth-agarwal",
    gender: "M",
    custom_award_title: "Test",
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
