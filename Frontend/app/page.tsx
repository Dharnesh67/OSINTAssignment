"use client";
import { useState } from "react";
import { Header } from "@/components/Header";
import UI from "@/components/UI";
import { Input } from "@/components/ui/input";

export default function Home() {
  const data = {
    count: 4,
    credit_returned: false,
    data: [
      {
        module: "github",
        result: ["pathakorama1@gmail.com"],
      },
      {
        module: "skype",
        result: [
          {
            avatar: "https://avatar.skype.com/v1/avatars/y2kedar/public",
            username: "y2kedar",
            name: "Kedar",
            country: "United States",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedar7yadav/public",
            username: "live:kedar7yadav",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:parmarkeval32/public",
            username: "live:parmarkeval32",
            name: "KEDAR",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarked/public",
            username: "kedarked",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Pune",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.97ffc02fbafecf4b/public",
            username: "live:.cid.97ffc02fbafecf4b",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarkul/public",
            username: "kedarkul",
            name: "kedar",
            country: "United States",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedar.bailur/public",
            username: "kedar.bailur",
            name: "Kedar",
            country: "India",
            city: "Bangalore",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedarchin22/public",
            username: "live:kedarchin22",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/slykedi/public",
            username: "slykedi",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedar.adlservices/public",
            username: "kedar.adlservices",
            name: "Kedar",
            country: "India",
            city: "Jaipur",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:keewah1ne/public",
            username: "live:keewah1ne",
            name: "Kedar .",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarkus/public",
            username: "kedarkus",
            name: "Kedar",
            country: "Nepal",
            state: "Bagmati zone",
            city: "Bhaktapur",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarraghavarao/public",
            username: "kedarraghavarao",
            name: "Kedar",
            country: "India",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.c3ff942eaf0c81d1/public",
            username: "live:.cid.c3ff942eaf0c81d1",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:vkedar/public",
            username: "live:vkedar",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/kedarjujaray/public",
            username: "kedarjujaray",
            name: "kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.1cca80517cb0a5d4/public",
            username: "live:.cid.1cca80517cb0a5d4",
            name: "kedar .",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kedarpgiri_1/public",
            username: "live:kedarpgiri_1",
            name: "kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:.cid.352600750bbce092/public",
            username: "live:.cid.352600750bbce092",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:ad12d7d8d024a552/public",
            username: "live:ad12d7d8d024a552",
            name: "Kedar",
            contactType: "Skype4Consumer",
          },
          {
            avatar: "https://avatar.skype.com/v1/avatars/live:kd.hole36/public",
            username: "live:kd.hole36",
            name: "Kedar",
            country: "India",
            state: "Maharashtra",
            city: "Mumbai",
            contactType: "Skype4Consumer",
          },
        ],
      },
    ],
  };
  
  const [isUser, setIsUser] = useState(false);
  const [input, setInput] = useState({ datatype: "", value: "" });
  const [userData, setUserData] = useState(data); // Store API response data
  const [Username, setUsername] = useState("")
  
  const FetchData = async () => {
    setIsUser(true);
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
        setIsUser(true);
      } else {
        console.error("Error:", value.message);
      }

      if (value && Object.keys(value).length > 0) {
        setUserData(value);
      } else {
        console.error("Received empty or invalid data:", value);
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
