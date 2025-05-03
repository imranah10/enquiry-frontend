import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

// const sampleUsers = [
//   {
//     date: '2025-04-30',
//     candidateName: 'Imran Khan',
//     gender: 'male',
//     fatherName: 'Abdul Rahman',
//     motherName: 'Salma Bibi',
//     dob: '1998-06-15',
//     college: 'ABC College',
//     address: 'Bihar, India',
//     phone1: '9876543210',
//     phone2: '1234567890',
//     email: 'imran@example.com',
//     enquiryFor: 'ReactJS',
//     batch: '2025-B1',
//     comeToKnow: 'Instagram Ads',
//   },
//   {
//     date: '2025-04-29',
//     candidateName: 'Ayesha Ali',
//     gender: 'female',
//     fatherName: 'Ali Ahmed',
//     motherName: 'Saira Bano',
//     dob: '1999-09-10',
//     college: 'XYZ Institute',
//     address: 'Delhi, India',
//     phone1: '8765432109',
//     phone2: '',
//     email: 'ayesha@example.com',
//     enquiryFor: 'NodeJS',
//     batch: '2025-B2',
//     comeToKnow: 'Friend',
//   },
// ];




export const Statistics = () => {
  const [enquiries, setEnquiries] = useState([]);
  useEffect(() => {

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/getenquiries');
      setEnquiries(response.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };
  fetchEnquiries();
  },[enquiries]);

const genderData = [
  { name: 'Male', value: enquiries.filter(u => u.gender === 'male').length },
  { name: 'Female', value: enquiries.filter(u => u.gender === 'female').length },
];

const enquiryCourseData = Object.entries(
  enquiries.reduce((acc, user) => {
    acc[user.enquiryFor] = (acc[user.enquiryFor] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name, value }));

const sourceData = Object.entries(
  enquiries.reduce((acc, user) => {
    acc[user.comeToKnow] = (acc[user.comeToKnow] || 0) + 1;
    return acc;
  }, {})
).map(([name, value]) => ({ name, value }));

const COLORS = ['#00C49F', '#FF69B4', '#0088FE', '#FFBB28'];
  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">📊 Enquiry Statistics</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gender Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-center">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={genderData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {genderData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Enquiry For Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold mb-4 text-center">Enquiries by Course</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={enquiryCourseData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Source Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow border col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4 text-center">Sources of Enquiry</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={sourceData}>
              <XAxis dataKey="name" />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#FFBB28" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};
