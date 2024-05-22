import React from 'react'

function page() {
  return (
    <div><div className=" shadow-md sm:rounded-lg">
    <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

<div className='flex justify-around  w-full items-center'>
    <div>
        <select className="p-3  w-full text-sm text-gray-700 bg-gray-200 rounded-md m-3 border-none focus:ring-0" aria-labelledby="dropdownRadioButton">
            <option value="1" className="flex items-center p-2 rounded hover:bg-gray-100">
                <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Categories</span>
            </option>
            <option value="2" className="flex items-center p-2 rounded hover:bg-gray-100" selected>
                <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
            </option>
            <option value="3" className="flex items-center p-2 rounded hover:bg-gray-100">
                <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
            </option>
            <option value="4" className="flex items-center p-2 rounded hover:bg-gray-100">
                <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering</span>
            </option>
            <option value="5" className="flex items-center p-2 rounded hover:bg-gray-100">
                <span className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2 rounded-full"></span>
                <span className="w-full ms-2 text-sm font-medium text-gray-900 rounded">Engineering </span>
            </option>
            </select>
    </div>
        <div>
            <label for="table-search" className="sr-only">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500 " aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                </div>
                <input type="text" id="table-search" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Search for items"/>
            </div>
        </div>
</div>
</div>
<div className='overflow-x-auto'>
<table className="w-full text-sm text-left text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3">
                Application&nbsp;ID
            </th>
            <th scope="col" className="px-6 py-3">
                Applicant&nbsp;Name
            </th>
            <th scope="col" className="px-6 py-3">
                Job&nbsp;Title
            </th>
            <th scope="col" className="px-6 py-3">
                Company&nbsp;Name
            </th>
            <th scope="col" className="px-6 py-3">
                Application&nbsp;Date
            </th>
            <th scope="col" className="px-6 py-3">
                Category
            </th>
            <th scope="col" className="px-6 py-3">
                Country
            </th>
            <th scope="col" className="px-6 py-3">
                Status
            </th>
            <th scope="col" className="px-6 py-3">
                Action
            </th>
        </tr>
    </thead>
    <tbody>
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">1</td>
            <td className="px-6 py-4">John Doe</td>
            <td className="px-6 py-4">Software Engineer</td>
            <td className="px-6 py-4">TechCo Ltd.</td>
            <td className="px-6 py-4">2024-05-15</td>
            <td className="px-6 py-4">Technology</td>
            <td className="px-6 py-4">Canada</td>
            <td className="px-6 py-4">Pending</td>
            <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">2</td>
            <td className="px-6 py-4">Jane Smith</td>
            <td className="px-6 py-4">Graphic Designer</td>
            <td className="px-6 py-4">Creative Designs Inc.</td>
            <td className="px-6 py-4">2024-05-20</td>
            <td className="px-6 py-4">Technology</td>
            <td className="px-6 py-4">Canada</td>
            <td className="px-6 py-4">Approved</td>
            <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">3</td>
            <td className="px-6 py-4">Alice Johnson</td>
            <td className="px-6 py-4">Marketing Manager</td>
            <td className="px-6 py-4">MarketMasters Ltd.</td>
            <td className="px-6 py-4">2024-05-25</td>
            <td className="px-6 py-4">Technology</td>
            <td className="px-6 py-4">Canada</td>
            <td className="px-6 py-4">Rejected</td>
            <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
        </tr>
        <tr className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4">4</td>
            <td className="px-6 py-4">Michael Brown</td>
            <td className="px-6 py-4">Data Analyst</td>
            <td className="px-6 py-4">Data Insights Co.</td>
            <td className="px-6 py-4">2024-05-30</td>
            <td className="px-6 py-4">Engineering</td>
            <td className="px-6 py-4">Canada</td>
            <td className="px-6 py-4">Pending</td>
            <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
        </tr>
        <tr className="bg-white hover:bg-gray-50">
            <td className="px-6 py-4">5</td>
            <td className="px-6 py-4">David Clark</td>
            <td className="px-6 py-4">Customer Support Specialist</td>
            <td className="px-6 py-4">SupportPro Solutions</td>
            <td className="px-6 py-4">2024-06-05</td>
            <td className="px-6 py-4">Technology</td>
            <td className="px-6 py-4">Canada</td>
            <td className="px-6 py-4">Approved</td>
            <td className="px-6 py-4"><a href="#" className="text-blue-600 hover:underline">View Details</a></td>
        </tr>
    </tbody>
</table>
</div>

</div></div>
  )
}

export default page