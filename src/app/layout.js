import { Jost } from "next/font/google";
import "../app/assets/styles/page.module.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Wiki Twitch",
  description: "Wiki about Twitcch Streamers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={jost.className}>{children}</body>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Orbitron:wght@400..900&display=swap" rel="stylesheet" />
    </html>
  );
}
