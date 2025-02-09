import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HackOps - The Coder's Battlefield By theDevArmy",
  description: "Hackops is a community-run hackathon organized by theDevArmy. It is a 36 hours of coffee-fueled competition, focused on solving real-world challenges with incubators and accelerators.",
  author: "theDevArmy",
  keywords: "Free hackathon, Devfolio, coding, Ahmedabad, AIML, Tech, Smart India Hackathon",
  // Open Graph metadata
  openGraph: {
    type: "website", // or "article" depending on content
    title: "HackOps - The Coder's Battlefield",
    description: "Hackops is a community-run hackathon organized by theDevArmy. It is a 36 hours of coffee-fueled competition, focused on solving real-world challenges with incubators and accelerators.",
    url: "https://www.hackops.dev/", // Replace with the actual URL
    images: [
      {
        url: 'https://res.cloudinary.com/dscq2qcch/image/upload/v1739086327/Pitch_ka_final_wala_deck_nuqsg1.png',
        width: 1200,
        height: 630,
        alt: "HackOps Logo - Coder's Battlefield",
      },
    ],
    site_name: "HackOps",
  },

  // Twitter metadata
  twitter: {
    card: "summary_large_image", // For large image preview
    title: "HackOps - The Coder's Battlefield",
    description: "Hackops is a community-run hackathon organized by theDevArmy. It is a 36 hours of coffee-fueled competition, focused on solving real-world challenges with incubators and accelerators.",
    image: "https://res.cloudinary.com/dscq2qcch/image/upload/v1739086327/Pitch_ka_final_wala_deck_nuqsg1.png", // Replace with the image URL
    creator: "@theDevArmy", // Replace with Twitter handle
  },

}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
