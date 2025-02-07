"use client";
import { Twitter, Instagram, Send, Mail } from "lucide-react";
import Image from "next/image";
import Fade from "@/components/Fade";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createWaitlistEntry } from "@/sanity/lib/joinWaitlist/joinWaitlist";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await createWaitlistEntry(email);
      if (res) {
        alert("Successfully subscribed to the waitlist!");
        setEmail("");
      }
    } catch (error) {
      console.error("Error creating waitlist entry:", error);
      alert("An error occurred. Please try again later.");
      return;
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#020420] relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={`absolute bg-white/60 rounded-full duration-300 ${
              Math.random() > 0.5 ? "animate-twinkle" : ""
            }`}
            style={{
              width: `${Math.random() * 2 + 1}px`, // 1-3px size
              height: `${Math.random() * 2 + 1}px`, // 1-3px size
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 2 + 1.5}s`, // 1.5s - 3.5s
            }}
          />
        ))}
      </div>
      {/* Floating planet images - Adjusted for mobile */}
      <div className="absolute left-[5%] top-[15%] w-[100px] h-[100px] md:left-[10%] md:top-[20%] md:w-[200px] md:h-[200px]">
        <Image
          src="https://res.cloudinary.com/dscq2qcch/image/upload/v1738852781/hackops/5_ix4jb5.png"
          alt="Floating planet"
          width={200}
          height={200}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-[5%] top-[10%] w-[80px] h-[80px] md:right-[15%] md:top-[30%] md:w-[150px] md:h-[150px]">
        <Image
          src="https://res.cloudinary.com/dscq2qcch/image/upload/v1738852779/hackops/3_dbdssm.png"
          alt="Floating planet"
          width={150}
          height={150}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute left-[8%] bottom-[40%] w-[90px] h-[90px] md:left-[20%] md:bottom-[20%] md:w-[180px] md:h-[180px]">
        <Image
          src="https://res.cloudinary.com/dscq2qcch/image/upload/v1738852786/hackops/2_ysml4a.png"
          alt="Floating planet"
          width={180}
          height={180}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="container mx-auto px-4 py-4 md:py-8 relative z-10 flex flex-col gap-2 min-h-screen">
        {/* Logo */}
        <Fade duration={500}>
          <div className="flex items-center gap-2 mb-20 md:mb-0">
            <Image
              src="/Logo.png"
              alt="Devarmy logo"
              width={50}
              height={50}
              className="md:w-[60px] md:h-[60px] w-[90px] h-[90px] cursor-pointer"
            />
          </div>
        </Fade>

        <div className="max-w-2xl mx-auto flex flex-col justify-between h-full flex-1 text-center">
          {/* Hero Image */}
          <Fade duration={500}>
            <div className="mb-3 md:mb-5">
              <Image
                src="https://res.cloudinary.com/dscq2qcch/image/upload/v1738856244/hackops/Untitled_design_19_ob0euk.png"
                alt="Hero illustration"
                width={500}
                height={300}
                className="mx-auto w-[280px] md:w-[500px]"
                priority
              />
            </div>
            <h2 className="text-white text-2xl md:text-3xl font-bold tracking-[0.2em] mb-3 md:mb-5">
              Coming Soon
            </h2>
          </Fade>

          {/* Subscription form */}
          <Fade duration={500}>
            <div className="mt-8 mb-8">
              <p className="text-gray-500 mb-2 text-lg tracking-wider">
                Join the Waitlist
              </p>
              <div className="flex flex-col md:flex-row gap-2 max-w-md mx-auto">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/30 rounded-xl text-white px-4 py-4 backdrop-blur-md"
                />
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-pink-800 to-purple-800  font-semibold hover:brightness-110 duration-500 rounded-xl"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </Fade>

          <Fade duration={500}>
            <div className="flex flex-col gap-4">
              {/* Social links */}
              <div className="flex items-center justify-center gap-4 md:gap-6 mt-4 md:mt-8 mb-2 md:mb-4">
                <a
                  href="http://thedevarmy.com/wa/"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
                  </svg>
                </a>
                <a
                  href="http://thedevarmy.com/discord/"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                  </svg>
                </a>
                <a
                  href="http://instagram.com/the.devarmy/"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                    viewBox="0 0 24 24"
                  >
                    <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/thedevarmy"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/theDevArmy"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                    viewBox="0 0 50 50"
                  >
                    <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                  </svg>
                </a>
                <a
                  href="mailto:hackops@thedevarmy.com"
                  className="text-white/70 hover:text-white p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md duration-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="20"
                    height="20"
                    className="text-white fill-white strok"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                  </svg>
                </a>
              </div>

              {/* Copyright */}
              <p className="text-white text-xs md:text-sm">
                © 2024 Hackops, All rights reserved.
              </p>
            </div>
          </Fade>
        </div>
      </div>

      {/* Bottom full-width image */}
      <div className="absolute -bottom-0 md:-bottom-48 left-0 w-full">
        <Image
          src="https://res.cloudinary.com/dscq2qcch/image/upload/v1738852810/hackops/Untitled_design_20_chjwub.png"
          alt="Galaxy landscape"
          width={1920}
          height={300}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </div>
  );
}
