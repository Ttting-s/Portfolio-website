"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import Image from "next/image";

import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
export default function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(() => {
      console.log("SUCCESS!");
      alert("Message sent!");
      e.target.reset();
    })
    .catch((error) => {
      console.error("FAILED...", error);
      alert("Failed to send message.");
    });
  };

 return (
    <section className="grid md:grid-cols-2 my-12 md:my-16 py-24 gap-4 relative">
      <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full blur-lg top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com" target="_blank" rel="noreferrer">
            <Image src={GithubIcon} alt="Github" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Image src={LinkedinIcon} alt="LinkedIn" />
          </Link>
        </div>
      </div>

      <div>
        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your name"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="border border-[#33353F] bg-[#18191E] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
              rows={6}
              required
            />
          </div>

          <input type="hidden" name="time" value={new Date().toLocaleString()} />

          <div className="mb-6">
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
