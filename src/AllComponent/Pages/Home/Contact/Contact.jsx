import React from "react";
import Cover from "../../../Layout/SharedRoute/Cover/Cover";
import contimg from "../../../../assets/assets/contact/banner.jpg";
import SectionTittle from "../../../SectionTittle/SectionTittle";
import { FaPhoneAlt } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const ContactCards = () => {
  return (
    <main className="flex flex-wrap justify-center gap-8 py-10">
      {/* Card 1: Phone */}
      <section className="w-[350px] h-[300px] border-2 rounded-2xl shadow-md overflow-hidden">
        <div className="bg-yellow-600 flex justify-center items-center h-[80px]">
          <FaPhoneAlt className="w-8 h-8 text-white" />
        </div>
        <div className="bg-slate-100 flex flex-col justify-center items-center h-[220px]">
          <h1 className="text-2xl font-serif">PHONE</h1>
          <p className="text-xl mt-3 font-serif">01404253544035</p>
        </div>
      </section>

      {/* Card 2: Address */}
      <section className="w-[350px] h-[300px] border-2 rounded-2xl shadow-md overflow-hidden">
        <div className="bg-yellow-600 flex justify-center items-center h-[80px]">
          <CiLocationOn className="w-8 h-8 text-white" />
        </div>
        <div className="bg-slate-100 flex flex-col justify-center items-center h-[220px]">
          <h1 className="text-2xl font-serif">ADDRESS</h1>
          <p className="text-xl mt-3 font-serif text-center">
            Dhanmondi, Dhaka, Bangladesh
          </p>
        </div>
      </section>

      {/* Card 3: Working Hours */}
      <section className="w-[350px] h-[300px] border-2 rounded-2xl shadow-md overflow-hidden">
        <div className="bg-yellow-600 flex justify-center items-center h-[80px]">
          <IoTimeOutline className="w-8 h-8 text-white" />
        </div>
        <div className="bg-slate-100 flex flex-col justify-center items-center h-[220px]">
          <h1 className="text-2xl font-serif">WORKING HOURS</h1>
          <p className="text-xl mt-3 font-serif">Mon–Fri: 8.00–22.00</p>
          <p className="text-xl mt-1 font-serif">Sat–Sun: 10.00–23.00</p>
        </div>
      </section>
    </main>
  );
};

// ✅ Main Contact Component
const Contact = () => {
  return (
    <div>
      <Cover img={contimg} title="CONTACT US" />
      <SectionTittle SubHading="---Visit Us---" heading="OUR LOCATION" />

      {/* Contact Info Cards */}
      <ContactCards />

      <SectionTittle SubHading="---Send Us a Message---" heading="CONTACT FORM" />

      {/* Contact Form */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-md shadow-md mb-10">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name*
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message*
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              className="w-full px-4 py-2 h-40 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-800 transition-all flex items-center gap-2 mx-auto"
            >
              Send Message <IoIosSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
