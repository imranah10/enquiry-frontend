import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AllEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const fetchEnquiries = async () => {
    try {
     const response = await axios.get('https://enquiry-backend-4.onrender.com/api/getenquiries');

      setEnquiries(response.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  useEffect(() => {
   fetchEnquiries();
  }, [enquiries]);

  return (
    <div className="p-4 md:p-8 bg-gradient-to-b from-blue-50 via-white to-purple-100 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-sky-800 drop-shadow">
        📋 AIT, Ludhiana - All Enquiries
      </h2>

      <div className="overflow-auto rounded-xl shadow-xl border border-gray-300 backdrop-blur bg-white bg-opacity-80">
        <table className="min-w-[1200px] w-full text-sm text-left">
          <thead className="bg-sky-700 text-white sticky top-0 z-10">
            <tr>
              <th className="p-4">Date</th>
              <th className="p-4">Name</th>
              <th className="p-4">Gender</th>
              <th className="p-4">Father</th>
              <th className="p-4">Mother</th>
              <th className="p-4">DOB</th>
              <th className="p-4">College</th>
              <th className="p-4">Address</th>
              <th className="p-4">Phone 1</th>
              <th className="p-4">Phone 2</th>
              <th className="p-4">Email</th>
              <th className="p-4">Enquiry For</th>
              <th className="p-4">Batch</th>
              <th className="p-4">Source</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {enquiries.map((user, index) => (
              <tr
                key={index}
                className={`transition-all duration-200 ease-in-out hover:bg-sky-100 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                }`}
              >
                <td className="p-3 border-t">{user.date}</td>
                <td className="p-3 border-t font-medium">{user.candidateName}</td>
                <td className="p-3 border-t capitalize">{user.gender}</td>
                <td className="p-3 border-t">{user.fatherName}</td>
                <td className="p-3 border-t">{user.motherName}</td>
                <td className="p-3 border-t">{user.dob}</td>
                <td className="p-3 border-t">{user.college}</td>
                <td className="p-3 border-t">{user.address}</td>
                <td className="p-3 border-t">{user.phone1}</td>
                <td className="p-3 border-t">{user.phone2 || 'N/A'}</td>
                <td className="p-3 border-t">{user.email}</td>
                <td className="p-3 border-t">{user.enquiryFor}</td>
                <td className="p-3 border-t">{user.batch}</td>
                <td className="p-3 border-t">{user.comeToKnow}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
