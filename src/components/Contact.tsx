"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [btnText, setBtnText] = useState("Submit");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{9,12}$/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone))
      newErrors.phone = "Please enter a valid phone number (9–12 digits).";
    if (formData.service === "Service Type:" || !formData.service.trim())
      newErrors.service = "Please select a service type.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setBtnText("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
        });
        setErrors({});
        setBtnText("Submit");
        toast.success("Email Sent Successfully!");
      } else {
        setBtnText("Submit");
        toast.error("Error Sending Email!");
      }
    } catch (error) {
      console.error("Error:", error);
      setBtnText("Submit");
      toast.error("Error Sending Email!");
    }
  };

  return (
    <div className="bg-white ">
      <div className="max-w-3xl mx-auto bg-[#F8FAFC] shadow-xl rounded-2xl sm:p-10 p-5">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-900 mb-4">
          Let's Talk Roofing
        </h2>
        <p className="text-gray-700 mb-8">
          Looking to repair, replace, or upgrade your roof? Whether it's a small
          job or a full-scale project, we're here to help. Fill out the form and
          our team will get back to you shortly.
        </p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full px-4 py-3 rounded-md border text-sm shadow-sm text-black focus:outline-none focus:ring-2 ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-yellow-bg-yellow-900"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={`w-full px-4 py-3 rounded-md border text-sm shadow-sm text-black focus:outline-none focus:ring-2 ${
                errors.phone
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-yellow-bg-yellow-900"
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className={`w-full px-4 py-3 rounded-md border text-sm shadow-sm text-black focus:outline-none focus:ring-2 ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-yellow-bg-yellow-900"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-md border text-sm shadow-sm text-black focus:outline-none focus:ring-2 ${
                errors.service
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-yellow-bg-yellow-900"
              }`}
            >
              <option value="Service Type:">Select Service Type</option>
              <option value="Roof Repair">Roof Repair</option>
              <option value="New Roof Installation">New Roof Installation</option>
              <option value="Flat Roofing">Flat Roofing</option>
              <option value="Guttering & Fascias">Guttering & Fascias</option>
              <option value="Chimney Work">Chimney Work</option>
              <option value="Roof Inspection">Roof Inspection</option>
              <option value="Emergency Roofing">Emergency Roofing</option>
            </select>
            {errors.service && (
              <p className="text-red-500 text-xs mt-1">{errors.service}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-800 hover:bg-yellow-900 cursor-pointer text-white font-semibold py-3 rounded-md transition-colors"
          >
            {btnText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
