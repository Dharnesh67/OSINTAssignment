import React from 'react'

const JsonData = ({jsonData}:any) => {
  return (
    <div>
         <div className="p-6 bg-gray-900 rounded-lg shadow-lg text-white w-1/2 mx-auto">
            <h2 className="text-2xl font-bold mb-4">User Details</h2>
            <pre className="bg-gray-800 p-4 rounded-lg text-sm overflow-auto">
              {JSON.stringify(jsonData, null, 2)}
            </pre>

          </div>
    </div>
  )
}

export default JsonData