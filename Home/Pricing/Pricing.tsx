"use client";

import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import Image from "next/image";

type PriceItem = {
  name: string;
  description: string;
  price: number;
};

export default function PricingSection() {
  const [leftData, setLeftData] = useState<PriceItem[]>([]);
  const [rightData, setRightData] = useState<PriceItem[]>([]);
  const [loading, setLoading] = useState(true);

  //  API CALL
  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/services`); //  change if needed
        const priceData = await res.json();

        const finalData: PriceItem[] = priceData?.services?.data || [];
        console.log(finalData);

        // ✅ SPLIT DATA INTO TWO HALVES
        const half = Math.ceil(finalData.length / 2);

        setLeftData(finalData.slice(0, half));
        setRightData(finalData.slice(half));
      } catch (error) {
        console.error("Error fetching pricing:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPricing();
  }, []);

  //  Loading UI
  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-[var(--color-foreground)] text-lg">
          Loading pricing...
        </p>
      </section>
    );
  }

  return (
    <section className="relative w-full bg-[#fff6ef] py-[8px] sm:py-[50px] overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[60%] lg:w-[50%] z-0 pointer-events-none">
        <Image
          src="/images/brush-left.png"
          alt="bg"
          width={400}
          height={300}
          className="w-[82%] h-[70%]"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADING */}
        <Heading
          subtitle="Cutting and styling"
          title="Our Pricing"
          bgTitle="Pricing"
        />

        {/* GRID */}
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-9 px-6">
          {/* LEFT COLUMN */}
          <div className="bg-[var(--color-background)] p-2.5">
            <Image
              src="/images/sep-leaf-left.png"
              alt=""
              width={60}
              height={60}
              className="mb-1"
            />

            {leftData.map((item, index) => (
              <div
                key={index}
                className="py-6 border-b border-dashed border-gray-400 last:border-none">
                <div className="flex justify-between items-start">
                  {/* TEXT */}
                  <div>
                    <h3 className="text-[30px] font-yeseva text-[#541f5c]">
                      {item.name}
                    </h3>
                    <p className="text-[var(--color-foreground)] mt-1 text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="text-[28px] font-yeseva text-[var(--color-foreground)] whitespace-nowrap">
                    ${item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="bg-[var(--color-background)] p-2.5">
            <Image
              src="/images/sep-leaf-left.png"
              alt=""
              width={60}
              height={60}
              className="mb-1"
            />

            {rightData.map((item, index) => (
              <div
                key={index}
                className="py-6 border-b border-dashed border-gray-400 last:border-none">
                <div className="flex justify-between items-start">
                  {/* TEXT */}
                  <div>
                    <h3 className="text-[30px] font-yeseva text-[#541f5c]">
                      {item.name}
                    </h3>
                    <p className="text-[var(--color-foreground)] mt-1 text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  {/* PRICE */}
                  <div className="text-[28px] font-yeseva text-[var(--color-foreground)] whitespace-nowrap">
                    ${item.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
