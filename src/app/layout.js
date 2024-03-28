import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Wiki Twitch",
  description: "Wiki about Twitcch Streamers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
