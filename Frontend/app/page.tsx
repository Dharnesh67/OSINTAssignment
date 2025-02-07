"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import UI from "@/components/UI";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [isUser, setIsUser] = useState(false);
  const [input, setInput] = useState({ datatype: "", value: "" });
  const [userData, setUserData] = useState(null); // Store API response data
  const [Username, setUsername] = useState("")
  const FetchData = async () => {
    console.log("Input Data:", input);

    try {
      const response = await fetch("http://localhost:5000/api/getinfo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input), // Send {type, value}
      });

      const value = await response.json(); // Parse response JSON

      if (response.ok) {
        console.log("API Response:", value);
        setUserData(value); // Store API response in state
        setIsUser(true);
      } else {
        console.error("Error:", value.message);
      }
    } catch (error) {
      console.error("Error From Backend:", error);
    }
  };

  return (
    <>
      <div className="text-white">
        <Header />
        {!isUser ? (
          <div className="form">
            <div className="flex flex-col gap-4 items-center justify-center">
              <div className="text-4xl font-bold">Welcome to the Assignment</div>
              <div className="text-2xl font-bold">Select input type and enter your details</div>

              <div className="flex gap-4">
                <select
                  onChange={(e) => setInput({ ...input, datatype: e.target.value })}
                  value={input.datatype}
                  className="p-2 rounded-lg bg-[#5925DC]"
                >
                  <option value="">Select Type</option>
                  <option value="username">Username</option>
                </select>

                <Input
                  placeholder={`Enter your ${input.datatype}`}
                  onChange={(e) => setInput({ ...input, value: e.target.value })}
                  value={input.value}
                  disabled={!input.datatype}
                />

                <button
                  className="bg-[#5925DC] px-4 py-2 rounded-lg"
                  onClick={FetchData}
                  disabled={!input.datatype || !input.value} // Disable button if no datatype or value is entered
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        ) : (
          
          <UI  userData={userData} Username={input} />
        )}
      </div>
    </>
  );
}

// export default function Home() {
//   const [isUser, setIsUser] = useState(false);
//   const [input, setInput] = useState("");

//   const FetchData = async () => {
//     console.log(input);

//     try {
//       const response = await fetch("http://localhost:5000/api/getinfo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ value: input }), // Send {type, value}
//       });
//       // console.log(response.data);

//       const value = await response.json(); // Parse the response JSON
//       // console.log(value);

//       if (response.ok) {
//         console.log(value); // Log the response value
//         setIsUser(true);
//       } else {
//         console.error("Error:", value.message); // Handle errors from backend
//       }
//     } catch (error) {
//       console.log("Error From Backend", error);
//     }
//   };
//   return (
//     <>
//       <div className="text-white">
//         <Header />
//         {!isUser ? (
//           <div className="form">
//             <div className="flex flex-col gap-4 items-center justify-center">
//               <div className="text-4xl font-bold">Welcome to the Assignment</div>
//               <div className="text-2xl font-bold">Enter your username</div>
//               <div className="flex gap-4">
//                 <Input
//                   placeholder="Username"
//                   onChange={(e) => {
//                     setInput(e.target.value);
//                   }}
//                 />
//                 <button
//                   className="bg-blue-500 px-4 py-2 rounded-lg"
//                   onClick={FetchData}
//                   disabled={!input}
//                 >
//                   Search
//                 </button>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <UI data={input} />
//         )}
//       </div>
//     </>
//   );
// }
