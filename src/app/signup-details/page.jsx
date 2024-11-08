// pages/signup-details.js
"use client";

import { useState } from "react";

export default function SignupDetails() {
  const [formData, setFormData] = useState({
    image: null,
    aadhaar: "",
    panCard: "",
    vehicleRc: "",
    vendorCode: "",
    userId: "",
    isIocl: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-500">
      <div className="wrapper bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 mb-4">
          Complete Your Signup Details
        </h2>

        <form className="w-full space-y-4" onSubmit={handleSubmit}>
          {/* Image Upload */}
          <div className="field">
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          {/* Aadhaar Number */}
          <div className="field">
            <input
              type="text"
              name="aadhaar"
              value={formData.aadhaar}
              onChange={handleChange}
              placeholder="Aadhaar Card Number"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          {/* Pan Card Number */}
          <div className="field">
            <input
              type="text"
              name="panCard"
              value={formData.panCard}
              onChange={handleChange}
              placeholder="Pan Card Number"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          {/* Vehicle RC */}
          <div className="field">
            <input
              type="text"
              name="vehicleRc"
              value={formData.vehicleRc}
              onChange={handleChange}
              placeholder="Vehicle Registration Number"
              className="w-full p-3 border border-gray-300 rounded-md text-black"
              required
            />
          </div>

          {/* IOCL or Non-IOCL */}
          <div className="field">
            <label>
              Are you IOCL?
              <input
                type="checkbox"
                checked={formData.isIocl}
                onChange={(e) =>
                  setFormData({ ...formData, isIocl: e.target.checked })
                }
              />
            </label>
          </div>

          {/* IOCL Vendor Code / Non-IOCL User ID */}
          {formData.isIocl ? (
            <div className="field">
              <input
                type="text"
                name="vendorCode"
                value={formData.vendorCode}
                onChange={handleChange}
                placeholder="Vendor Code"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
          ) : (
            <div className="field">
              <input
                type="text"
                name="userId"
                value={formData.userId}
                onChange={handleChange}
                placeholder="User ID"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
                required
              />
            </div>
          )}

          {/* Submit Button */}
          <div className="field">
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
