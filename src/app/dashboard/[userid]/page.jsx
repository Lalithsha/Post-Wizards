"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// import Image from "next/image";
import { useState } from "react";

// import { sidebar } from "lucide-react";
import { useAuth } from "@clerk/nextjs";

import dynamic from 'next/dynamic'



const Link = dynamic(() => import("next/link"));
const Image  = dynamic(()=> import("next/image"));


import { useAppContext } from '@/contexts/DashboardContext';
// import ReactMarkdown from 'react-markdown'

import { encryptData, decryptData } from '@/utils/encryption';



export default function Home() {

  const { userId } = useAuth();

  const { state, dispatch } = useAppContext();


  const handleRadioChange = (value) => {
    // setSelected(value);
    dispatch({ type: 'SELECT', payload: value });
    // console.log(value);
  };

  const handleTopicInputChange = (event) => {
    // setTopicValue(event.target.value);
    dispatch({ type: "SET_TOPIC", payload: event.target.value }); // maybe here is the issue.
  };

  const handleReset = () => {
    // setSelected(null);
    // setTopicValue("");
    // setGeneratedText("");
    dispatch({ type: 'RESET' });
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!userId || userId === undefined || userId.length == 0) {
      alert("userId required.");
      return;
    }

    // !state.generatedText


    // console.log(userId, " User id ");
    // console.log(decryptData(state.generatedText), "decrypted Data")

    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ userId, post: decryptData(state.generatedText) }),
      });

      if (res.ok) {
        // router.push("/");
        alert("Encrypted data saved successfully 💾 ")

      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const generateText = () => {
    // console.log("Generating text...")

    // console.log(state.selected, "selected value");
    // console.log(state.topicValue, " topic value");

    if (!state.selected || !state.topicValue) {
      // setErrorMessage("Please select a social media platform and enter the topic");
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: "Please select a social media platform and enter the topic" });
      console.log("empty radio")

    } else {
      // setErrorMessage("")
      dispatch({ type: 'SET_ERROR_MESSAGE', payload: "" });
      window.scrollBy({
        top: 130,
        behavior: "smooth",
      });
      const text = "Generating...";
      // setGeneratedText(text);
      dispatch({ type: 'SET_GENERATED_TEXT', payload: text });
      contentGenerator();
    }
  };


  const contentGenerator = async () => {
    try {

      // Access selected and topicValue from the context state
      const { selected, topicValue } = state;

      const platformToWordCount = {
        twitter: 280,
        linkedin: 1300,
        instagram: 2200,
        facebook: 800,
        threads: 500,
      };

      const wordCount = platformToWordCount[selected] || 1000;

      // console.log(state.selected, "selected value from generator");
      // console.log(state.topicValue, " topic value from generator ");
      // console.log(wordCount, " word Count value from generator ");

      // setLoading(true);
      const response = await fetch("/api/generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({ selected, topicValue, wordCount }),
        body: JSON.stringify({ selected: state.selected, topicValue: state.topicValue }),

      });

      if (response.ok) {
        const jsonResponse = await response.json();


        // Check if the response contains the 'tweet' property
        if (jsonResponse.hasOwnProperty("tweet")) {
          // console.log(jsonResponse.tweet, "json response ")

          // Convert jsonResponse.tweet array to string
          const joinedTweet = jsonResponse.tweet.join("");
          // console.log(joinedTweet, "Converted response")

          // // Update generatedText in the context API
          // dispatch({ type: 'SET_GENERATED_TEXT', payload: jsonResponse.tweet });

          // Update generatedText in the context API
          // dispatch({ type: 'SET_GENERATED_TEXT', payload: joinedTweet });

          // Encrypt the tweet
          const encryptedTweet = encryptData(joinedTweet);
          // Update generatedText in the context API
          dispatch({ type: 'SET_GENERATED_TEXT', payload: encryptedTweet });
          console.log(encryptedTweet, "encrypted Data 💪🏻")



        } else {
          // Handle invalid response
          dispatch({ type: 'SET_ERROR_MESSAGE', payload: "Invalid response from the server" });
        }
      } else {
        // Handle non-OK response (e.g., 500 Internal Server Error)
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: "Failed to generate text. Please try again later." });
      }


    } catch (error) {
      // Handle errors
      console.error(error);
    }
  }


  const renderRadio = (id, label, value, svg) => {
    return (
      <label
        htmlFor={id}
        className={` cursor-pointer bg-white p-6 rounded-lg border shadow-md block ${state.selected === value ? "border border-blue-500" : ""
          }`}
      >
        <div className="flex justify-start items-start">
          <div>
            <h3
              className={`text-xl font-semibold mb-2 ${state.selected === value ? "text-blue-500" : ""
                }`}
            >
              {label} {svg}
            </h3>
            <p className="text-gray-600">
              Generate the best content on {label.toLowerCase()} on your
              preferred topic
            </p>
          </div>
          <input
            type="radio"
            id={id}
            name="generatorType"
            value={value}
            className="mt-1"
            checked={state.selected === value}
            onChange={() => handleRadioChange(value)}
          />
        </div>
      </label>
    );
  };


  return (


    <>
      <div className="container w-full flex justify-start flex-col ">
        <h2 className="text-gray-900 font-bold text-2xl mb-4 mt-7">
          Social Content Generation
        </h2>
        <h3 className="text-gray-600 font-medium text-sm mb-2">
          Select Platform
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {renderRadio("twitter", "Twitter", "twitter")}
          {renderRadio("instagram", "Instagram", "instagram")}
          {renderRadio("facebook", "Facebook", "facebook")}
          {renderRadio("threads", "Threads", "threads")}
          {renderRadio("linkedin", "LinkedIn", "linkedin")}
        </div>

        {/* input */}
        <div className="w-full mt-6">

          {/* <Input type="text" className=" block w-full p-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none 
          focus:border-blue-500 " ></Input> */}


          <Input type="text" className="block w-full p-2 border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Write your topic here" value={state.topicValue}
            onChange={handleTopicInputChange} >
          </Input>


        </div>

        {/*must use this  */}
        {state.errorMessage && (
          <div className="text-red-500 text-sm mt-2">{state.errorMessage}</div>
        )}

        <div className="flex justify-between w-full mt-4">

          <Button className="text-xs md:text-sm w-auto mx-3"
            onClick={handleSave}
          >
            Save Post</Button>

          <Button
            className="bg-rose-100 hover:bg-rose-300 text-rose-600 font-metropolis font-semibold md:text-lg py-2 px-4 
            rounded-lg border border-rose-500 flex justify-between items-center gap-2 text-xs  w-auto mx-4 "
            onClick={handleReset}
          >
            Reset{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_60_1878)">
                <path
                  d="M3.26807 12.043C3.70503 13.4661 4.58328 14.7134 5.77583 15.6045C6.96839 16.4956 8.41345 
                  16.9843 9.90207 17C11.624 17.0212 13.2936 16.4081 14.5925 15.2774C15.8914 14.1466 16.7288 12.5775 16.9451 
                  10.869C17.1578 9.16051 16.7335 7.43354 15.7531 6.01821C14.7728 4.60289 13.3053 3.59848 11.6311 3.197C9.95648 
                  2.79194 8.19141 3.01674 6.67182 3.82863C5.15223 4.64052 3.9842 5.9828 3.39007 7.6"
                  stroke="#FF6060"
                  strokeWidth="2"
                  strokeLinecap="round"
                  // stroke-linejoin="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3 4V8H7"
                  stroke="#FF6060"
                  strokeWidth="2"
                  strokeLinecap="round"
                  // stroke-linejoin="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_60_1878">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>



          <Button
            className="text-xs md:w-auto text-white md:text-lg font-extrabold leading-[1.245rem] rounded-[0.5rem] bg-[#FFBF00] py-2 px-4 hover:bg-blue-700
            transform hover:scale-110 motion-reduce:transform-none ... "
            onClick={generateText}
          >
            Generate 💡
          </Button>
        </div>

        <div className="output-section mt-4">
          {state.generatedText && (
            <div className="mt-6">
              <div className="bg-white rounded-lg p-4 shadow-md border">
                <h4 className="text-lg font-semibold mb-2">Generated Text</h4>
                <div className="text-gray-700 animate-fade-in">
                  {/* {
                    state.generatedText === "Generating..." ? (
                      <Image src="/1476.gif" alt="Loading" width={26} height={26} />
                    ) : (
                      ""
                    )
                  } */}
                  {/* <ReactMarkdown> */}
                  {/* {state.generatedText} */}

                  {state.generatedText === "Generating..." ?
                    <Image src="/1476.gif" alt="Loading" width={26} height={26} /> :
                    decryptData(state.generatedText)
                  }

                  {/* </ReactMarkdown> */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>

  )
}



