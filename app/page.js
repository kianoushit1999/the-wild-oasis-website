import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto flex justify-center items-center flex-1  mt-24">
        <Image src={bg} className="object-cover" placeholder="blur" fill quality={80} alt="Mountains and forests with two cabins" />

        <div className="relative z-10 text-center">
          <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal [text-shadow:_0_2px_4px_#000] ">
            Welcome to paradise.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
    </>
  );
}
