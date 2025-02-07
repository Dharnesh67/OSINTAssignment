import React from "react";

type GithubResult = string;

type SkypeResult = {
  avatar: string;
  username: string;
  name: string;
  country?: string;
  state?: string;
  city?: string;
  contactType: string;
};

type ModuleData = {
  module: string;
  result: GithubResult[] | SkypeResult[];
};

type JsonDataProps = {
  jsonData: {
    count: number;
    credit_returned: boolean;
    data: ModuleData[];
  };
};

const JsonData: React.FC<JsonDataProps> = ({ jsonData }) => {
  if (!jsonData?.data) return <p className="text-center text-gray-500">No data available</p>;

  // Extracting the required statistics
  const totalSourcesScanned = jsonData.count;
  const totalNames = jsonData.data.reduce((acc, module) => {
    return acc + (module.module === "skype" ? (module.result as SkypeResult[]).length : 0);
  }, 0);
  
  const totalUsernames = jsonData.data.reduce((acc, module) => {
    return acc + (module.module === "skype" ? (module.result as SkypeResult[]).filter(user => user.username).length : 0);
  }, 0);

  const totalAccountsPercentage = "95%"; // Assuming it's a fixed value

  const totalCountries = new Set(
    jsonData.data
      .flatMap(module => module.module === "skype" ? (module.result as SkypeResult[]).map(user => user.country).filter(Boolean) : [])
  ).size;

  const totalCountriesPercentage = `${Math.round((totalCountries / totalNames) * 100)}%`;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">User Data Overview</h1>

      <div className="grid grid-cols-2 gap-4 text-center text-lg font-semibold">
        <div className="p-4 bg-blue-100 rounded-md">🔍 Sources Scanned: <span className="text-blue-700">{totalSourcesScanned}</span></div>
        <div className="p-4 bg-green-100 rounded-md">👥 Names: <span className="text-green-700">{totalNames}</span></div>
        <div className="p-4 bg-yellow-100 rounded-md">💰 Usernames: <span className="text-yellow-700">{totalUsernames}</span></div>
        <div className="p-4 bg-purple-100 rounded-md">✅ Total Accounts: <span className="text-purple-700">{totalAccountsPercentage}</span></div>
        <div className="p-4 bg-red-100 rounded-md">🌍 Countries: <span className="text-red-700">{totalCountriesPercentage}</span></div>
      </div>

      {jsonData.data.map((moduleItem, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl font-semibold mb-2 capitalize">{moduleItem.module} Data</h2>
          <div className="space-y-4">
            {moduleItem.module === "github" ? (
              (moduleItem.result as GithubResult[]).map((email, idx) => (
                <p key={idx} className="bg-gray-100 p-3 rounded-md">{email}</p>
              ))
            ) : (
              (moduleItem.result as SkypeResult[]).map((user, idx) => (
                <div key={idx} className="flex items-center bg-gray-100 p-4 rounded-md shadow-sm">
                  <img src={user.avatar} alt={user.username} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">{user.name} ({user.username})</p>
                    {user.country && <p className="text-gray-600 text-sm">{user.city ? `${user.city}, ` : ""}{user.state ? `${user.state}, ` : ""}{user.country}</p>}
                    <p className="text-gray-500 text-sm">{user.contactType}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JsonData;
