import React from "react";

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/6 bg-black text-white flex flex-col justify-between">
        <div className="p-6">
          <h2 className="text-lg mb-4">
            <b>MAIN MENU</b>
          </h2>
          <ul>
            <li className="mb-2 relative hover:bg-gray-300 hover:text-black rounded transition-colors duration-200">
              Notification
              <span className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                22
              </span>
            </li>
            <li className="mb-2 hover:bg-gray-300 hover:text-black rounded transition-colors duration-200">
              Ticket
            </li>
          </ul>
        </div>
        <hr className="border-gray-300 mb-[-525px]" />
        <a
          className="p-6 hover:bg-gray-300 hover:text-black rounded transition-colors duration-200"
          href="/logout"
        >
          Logout
        </a>
      </div>
      <div className="w-5/6 flex flex-col">
        <div className="px-6 mt-4">
          <div className="flex justify-between items-center mb-6">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search..."
            />
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-500 mr-4"></div>
              <div className="text-gray-600">
                <b>User Name</b>
                <div className="text-xs text-gray-500">EM Code</div>
              </div>
            </div>
          </div>
          <h2 className="text-lg mb-4 text-black">Ticket List</h2>
          <div className="flex justify-between items-center mb-6">
            <div className="p-2 bg-gray-300 rounded">Conversation</div>
            <button className="p-2 bg-black text-white rounded">
              Submit as Closed
            </button>
          </div>
        </div>
        <hr className="border-gray-300" />
        <div className="p-6 flex flex-1 flex-col">
          <div className="flex flex-1">
            <div className="w-1/4 p-4">
              <input
                className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-4"
                type="search"
                name="search"
                placeholder="Search..."
              />
              {[...Array(9)].map((_, i) => (
                <div key={i} className="flex items-center mb-4 relative">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mr-4"></div>
                  <div className="text-gray-600">
                    <b>User name {i + 1}</b>
                    {i === 0 && (
                      <span className="text-xs absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                        1
                      </span>
                    )}
                    <div className="text-xs text-gray-500">
                      Hey, how about you?
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-3/4 p-4 flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mr-4"></div>
                  <div>
                    <h2 className="text-black">
                      <b>User name 1</b>
                    </h2>
                    <h2 className="text-xs text-gray-600">
                      Today Last Chat at 11:00 PM
                    </h2>
                  </div>
                </div>
                <div className="flex mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500 mr-4"></div>
                  <div className="p-2 bg-blue-200 rounded-l-full rounded-tr-full w-1/2 self-start text-black">
                    Hello
                  </div>
                </div>
                <div className="flex mb-4 justify-end">
                  <div className="p-2 bg-gray-300 rounded-r-full rounded-tl-full w-1/2 self-end text-black">
                    Hi
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black ml-4"></div>
                </div>
              </div>
              <div className="w-full">
                <hr className="border-gray-300 mb-4 w-full" />
                <input
                  className="w-full px-3 py-2 bg-white focus:outline-none"
                  type="text"
                  placeholder="Write your message..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
