import "./globals.css";
import {Josefin_Sans} from 'next/font/google';

export const metadata = {
  title: "Altmatic Academy",
  description: "Altmatic Academy : Learn togather",
};

const Josef = Josefin_Sans({
  subsets: ['latin'],
  weight: ["100","200", "300", "400", "500", "600", "700"],
  display: "swap"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josef.className}>{children}</body>
    </html>
  );
}
