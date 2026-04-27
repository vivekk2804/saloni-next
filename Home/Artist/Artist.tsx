"use client";
import Image from "next/image";
import Link from "next/link";
type TeamMember = {
  name: string;
  role: string;
  image: string;
};

type ArtistProps = {
  data: TeamMember[];
};

const Artist = ({ data }: ArtistProps) => {
  return (
    <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
      {data.map((member, index) => {
        const isLastOddCard =
          data.length % 2 !== 0 && index === data.length - 1;

        return (
          <div
            key={index}
            className={`group relative ${
              isLastOddCard
                ? "md:col-span-2 md:mx-auto md:w-full md:max-w-[400px] lg:col-span-1 lg:mx-0 lg:max-w-none"
                : ""
            }`}>
            {/* IMAGE */}
            <div className="relative overflow-hidden group">
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={500}
                className="w-full h-[420px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-[#fff6efcc] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out flex items-center justify-between px-6 hover:mx-3 hover:mt-3 hover:mb-18">
                <Link
                  href="/team/single"
                  type="button"
                  className="absolute top-0 right-0 bg-[#541f5c] px-7 py-4 text-[13px] font-medium tracking-[1px] text-white transition-colors duration-300 hover:bg-[#dfba9f]">
                  Book Now
                </Link>

                <div className="absolute left-0 bottom-10 flex flex-col gap-2">
                  {[
                    { name: "FACEBOOK", url: "https://facebook.com" },
                    { name: "INSTAGRAM", url: "https://instagram.com" },
                    { name: "X", url: "https://twitter.com" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center group/item cursor-pointer">
                      <span className="h-[2px] w-0 bg-black transition-all duration-500 group-hover/item:w-6"></span>

                      <span className="bg-black text-white px-4 py-1 text-xs ml-0 transition-all duration-500 group-hover/item:ml-2">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* INFO CARD */}
            <div className="bg-[#fff] text-center py-6 px-4 -mt-16 mx-6 relative z-10 shadow-2xl">
              <h3 className="text-[28px] font-yeseva text-[#541f5c]">
                {member.name}
              </h3>
              <p className="text-[28px] font-caveat mt-2 text-black">
                {member.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Artist;
