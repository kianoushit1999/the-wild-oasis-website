import { Josefin_Sans } from "next/font/google";
import "@/app/_styles/global.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",

})

export const metadata = {
  title: {
    template: "%s The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurios cabin hotel, located in the heart of the Itailan Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-primary-900 text-primary-100 min-h-screen flex flex-col`}>
        <Header  />
        <main className="flex justify-center items-center flex-1 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
