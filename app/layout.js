import { Inter } from "next/font/google";

import Aos from "./_providers/aos";

import "@/styles/index.scss";
import ScrollToTop from "@/components/ScrollTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HopeHaven Token: Bringing Relief & Hope to Gaza Amidst Adversity",
  description:
    "Join the movement with HopeHaven Token, a charitable initiative supporting Gaza residents affected by conflict. Contribute to rebuilding lives, fostering hope, and creating a haven of support. Every transaction makes a difference.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Aos />
        <ScrollToTop />
      </body>
    </html>
  );
}
