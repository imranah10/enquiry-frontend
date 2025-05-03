import React, { useState } from 'react';
import { Calendar, User, Users, Phone, Mail, BookOpen, MapPin, BookmarkPlus, Clock, HelpCircle } from 'lucide-react';
import logo from '../assets/logo.png';
import axios from 'axios';
const CandidateEnquiryForm = () => {
  const [formdata, setFormdata] = useState({
    date: '',
    candidateName: '',
    gender: '',
    fatherName: '',
    motherName: '',
    dob: '',
    college: '',
    address: '',
    phone1: '',
    phone2: '',
    email: '',
    enquiryFor: '',
    batch: '',
    comeToKnow: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
    console.log(formdata,'formdata');
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://enquiry-backend-lg9v.onrender.com/api/enquiry', formdata);
      if (response.status === 201) {
        alert('Form submitted successfully!');
        setFormdata({
          date: '',
          candidateName: '',
          gender: '',
          fatherName: '',
          motherName: '',
          dob: '',
          college: '',
          address: '',
          phone1: '',
          phone2: '',
          email: '',
          enquiryFor: '',
          batch: '',
          comeToKnow: '',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    }
  };
  

  return (
    <div className="min-h-screen py-10 px-3 bg-gradient-to-br from-gray-600 via-gray-600 to-gray-400">
      {/* Header with Logo */}
      <div className="max-w-4xl mx-auto mb-8 bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-101 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white font-bold rounded-2xl w-24 h-24 flex items-center justify-center text-3xl">
              <img src={logo} alt="AIT"className='rounded-lg' />
            </div>
            <div className="hidden md:block h-16 w-1 bg-gradient-to-b from-blue-400 to-purple-600 rounded-full"></div>
          </div>
          <div className="text-center md:text-right mt-4 md:mt-0">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AIT, LUDHIANA</h2>
            <p className="text-lg text-yellow-500 font-bold uppercase tracking-wider">Candidate Enquiry Form</p>
            <p className="text-sm text-gray-500 mt-1 font-medium">SCF-4, 3rd Floor, Model Town Ext. D-Block,</p>
          </div>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="p-8 max-w-4xl mx-auto bg-gray-300 shadow-2xl rounded-2xl relative overflow-hidden backdrop-blur-sm">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 opacity-50 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 opacity-50 rounded-tr-full"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-100 opacity-30 rounded-full"></div>
        
        {/* Form Content */}
        <div className="relative z-10">
          {/* Date Field */}
          <div className="w-full md:w-1/2 lg:w-1/3 mx-auto text-center mb-8 bg-blue-50 p-4 rounded-lg shadow-md">
            <label htmlFor="date" className="text-gray-700 font-semibold flex items-center justify-center gap-2">
              <Calendar size={18} className="text-blue-600" />
              <span>Date</span>
            </label>
            <input
              type="date"
              name="date"
              id="date"
              required
              value={formdata.date}
              onChange={handleChange}
              className="bg-white border-2 border-blue-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
            />
          </div>

          {/* Section Header - Personal Details */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-blue-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-xl text-white font-bold rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <User size={20} />
                  <span>CANDIDATE DETAILS</span>
                </div>
              </span>
            </div>
          </div>

          {/* Personal Details Fields */}
          <div className="space-y-6">
            {/* Name and Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  <span>Name of the candidate</span>
                </label>
                <input
                  type="text"
                  name="candidateName"
                  id="name"
                  value={formdata.candidateName}
                  onChange={handleChange}
                  placeholder="Enter candidate name"
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="gender" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <Users size={18} className="text-blue-600" />
                  <span>Gender</span>
                </label>
                <select
                  name="gender"
                  id="gender"
                  value={formdata.gender}
                  onChange={handleChange}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Parents' Names */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fatherName" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  <span>Father's Name</span>
                </label>
                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  value={formdata.fatherName}
                  onChange={handleChange}
                  placeholder="Enter father's name"
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400"
                />
              </div>
              <div>
                <label htmlFor="motherName" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <User size={18} className="text-blue-600" />
                  <span>Mother's Name</span>
                </label>
                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  value={formdata.motherName}
                  onChange={handleChange}
                  placeholder="Enter mother's name"
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* DOB and College */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="dob" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span>Date of Birth</span>
                </label>
                <input
                  type="date"
                  name="dob"
                  id="dob"
                  value={formdata.dob}
                  onChange={handleChange}
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium"
                />
              </div>
              <div>
                <label htmlFor="college" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-600" />
                  <span>College Name</span>
                </label>
                <input
                  type="text"
                  name="college"
                  id="college"
                  value={formdata.college}
                  onChange={handleChange}
                  placeholder="Enter college name"
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" />
                <span>Address</span>
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formdata.address}
                onChange={handleChange}
                placeholder="Enter address"
                className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* Section Header - Contact Information */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-green-300"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 text-xl text-white font-bold rounded-full shadow-lg">
                <div className="flex items-center gap-2">
                  <Phone size={20} />
                  <span>CONTACT INFORMATION</span>
                </div>
              </span>
            </div>
          </div>

          {/* Contact Information Fields */}
          <div className="space-y-6">
            {/* Phone Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone1" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-green-600" />
                  <span>Phone 1</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="phone1"
                    id="phone1"
                    required
                    value={formdata.phone1}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400 font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone2" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-green-600" />
                  <span>Phone 2 (Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="phone2"
                    id="phone2"
                    value={formdata.phone2}
                    onChange={handleChange}
                    placeholder="Enter alternate phone number"
                    className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400 font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                <Mail size={18} className="text-green-600" />
                <span>Email ID</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="w-5 h-5 text-gray-500" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400 font-medium placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Enquiry For and Batch */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="enquiry-for" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <BookmarkPlus size={18} className="text-green-600" />
                  <span>Enquiry For</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <BookmarkPlus className="w-5 h-5 text-gray-500" />
                  </div>
                  <select
                    name="enquiryFor"
                    id="enquiry-for"
                    value={formdata.enquiryFor}
                    onChange={handleChange}
                    className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400 font-medium"
                  >
                    <option value="">Select</option>
                    <option value="course">Course</option>
                    <option value="service">Service</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="preferred-batch" className="text-gray-700 font-semibold block mb-2 flex items-center gap-2">
                  <Clock size={18} className="text-green-600" />
                  <span>Preferred Batch</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Clock className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    name="batch"
                    id="preferred-batch"
                    value={formdata.batch}
                    onChange={handleChange}
                    placeholder="Enter preferred batch"
                    className="bg-gray-50 border-2 border-gray-200 rounded-lg p-3 pl-10 w-full focus:outline-none focus:ring-2 focus:ring-green-400 font-medium placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* How did you hear about us */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl shadow-md">
              <label className="text-gray-700 font-semibold block mb-3 flex items-center gap-2">
                <HelpCircle size={18} className="text-purple-600" />
                <span>How did you come to know about us?</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {["Teacher", "Friend", "Social Media", "Website", "Other"].map((option) => (
                  <label key={option} className="flex items-center p-3 bg-white border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 hover:shadow-md transition-all duration-200">
                    <input
                      type="radio"
                      name="comeToKnow"
                      value={option}
                      checked={formdata.comeToKnow === option}
                      onChange={handleChange}
                      className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-gray-700 font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button 
              onClick={handleSubmit}
              className="w-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-lg py-4 font-bold text-lg tracking-wide shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              SUBMIT ENQUIRY
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="max-w-4xl mx-auto mt-6 text-center font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-white to-purple-200 ">
        © {new Date().getFullYear()} AIT Ludhiana. All rights reserved.
      </div>
    </div>
  );
};

export default CandidateEnquiryForm;