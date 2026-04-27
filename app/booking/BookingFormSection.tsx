"use client";

import { useEffect, useState } from "react";

type ProductItem = {
  _id: string;
  name?: string;
  title?: string;
  price: number | string;
};

const fieldClass =
  "h-[50px] w-full border-0 bg-[#fff] px-[14px] text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none";

const BookingFormSection = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [modal, setModal] = useState({
    open: false,
    type: "success",
    message: "",
  });

  // ✅ 1. Improved Time Converter
  const convertTo24Hour = (time: string) => {
    // If the slot is "10:00 AM - 11:00 AM", take the first part
    const primaryTime = time.split("-")[0]?.trim().toUpperCase() || "";

    // Support formats like "10:00 AM", "10:00AM", "10:00"
    const match = primaryTime.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)?$/);

    if (!match) return null;

    let [, hourStr, minuteStr, meridiem] = match;
    let hours = parseInt(hourStr, 10);
    const minutes = minuteStr;

    if (meridiem) {
      if (meridiem === "PM" && hours !== 12) hours += 12;
      if (meridiem === "AM" && hours === 12) hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${minutes}:00`;
  };

  // ✅ 2. Fixed UTC Generator (Prevents Timezone Shifting)
  const getUTCDateTime = () => {
    if (!selectedDate || !selectedTime) return null;

    const time24 = convertTo24Hour(selectedTime);
    if (!time24) return null;

    // We manually assemble the string so the "Wall Clock" time
    // chosen by the user is exactly what is sent to the DB.
    return `${selectedDate}T${time24}.000Z`;
  };

  // FETCH SERVICES
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API}/services`);
        const result = await res.json();
        const apiData = result?.services?.data || result?.data || [];
        setProducts(Array.isArray(apiData) ? apiData : []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
  }, []);

  // FETCH SLOTS
  useEffect(() => {
    if (!selectedDate) {
      setSlots([]);
      return;
    }
    const fetchSlots = async () => {
      setLoadingSlots(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API}/bookings/slots?date=${encodeURIComponent(selectedDate)}`,
        );
        const result = await res.json();
        const finalSlots = result?.slots || result || [];
        setSlots(Array.isArray(finalSlots) ? finalSlots : []);
      } catch (error) {
        console.error("Error fetching slots:", error);
      } finally {
        setLoadingSlots(false);
      }
    };
    fetchSlots();
  }, [selectedDate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const form = e.target as any;
      const utcDateTime = getUTCDateTime();

      if (!utcDateTime) throw new Error("Invalid date or time selection");

      const payload = {
        serviceId: form?.productid?.value,
        name: form?.name?.value,
        email: form?.email?.value,
        phone: form?.phone?.value,
        bookingDateTime: utcDateTime,
      };

      const res = await fetch(`${process.env.NEXT_PUBLIC_API}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.message || "Booking failed");

      setModal({
        open: true,
        type: "success",
        message: "Your appointment has been successfully booked!",
      });

      form.reset();
      setSelectedDate("");
      setSelectedTime("");
      setSlots([]);
    } catch (error: any) {
      setModal({
        open: true,
        type: "error",
        message: error.message || "Something went wrong",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-[#fff6ef] px-4 pb-[80px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[40px]">
      <div className="container mx-auto w-full max-w-[1170px]">
        <div className="mx-auto w-full max-w-[780px]">
          <form className="cons-contact-form" onSubmit={handleSubmit}>
            <h2 className="mb-8 text-center font-yeseva text-[42px] text-[#541f5c]">
              Make a Booking
            </h2>

            <div className="grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
              <div className="mb-[25px]">
                <select
                  name="productid"
                  required
                  className={fieldClass}
                  defaultValue="">
                  <option value="" disabled>
                    {loadingProducts ? "Loading plans..." : "Select Plan"}
                  </option>
                  {products.map((product) => (
                    <option key={product._id} value={product._id}>
                      {product.name || product.title} - ₹{product.price}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-[25px]">
                <input
                  name="name"
                  type="text"
                  required
                  className={fieldClass}
                  placeholder="Name"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  name="email"
                  type="email"
                  required
                  className={fieldClass}
                  placeholder="Email"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  name="phone"
                  type="tel"
                  required
                  className={fieldClass}
                  placeholder="Phone"
                />
              </div>

              <div className="mb-[25px]">
                <input
                  type="date"
                  required
                  className={fieldClass}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              <div className="mb-[25px]">
                <select
                  required
                  className={fieldClass}
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  disabled={
                    !selectedDate || loadingSlots || slots.length === 0
                  }>
                  <option value="" disabled>
                    {!selectedDate
                      ? "Select date first"
                      : loadingSlots
                        ? "Loading slots..."
                        : slots.length === 0
                          ? "No slots available"
                          : "Select Time"}
                  </option>
                  {slots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="w-full bg-[#541f5c] text-white px-6 py-4 font-bold hover:bg-[#3d1643] transition-colors">
                  {submitting ? "Processing..." : "Submit Booking"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* MODAL SECTION */}
      {modal.open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="mx-4 w-full max-w-[400px] overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div
              className={`py-6 text-center ${modal.type === "success" ? "bg-[#541f5c]" : "bg-red-600"}`}>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/20">
                {modal.type === "success" ? (
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </div>
            </div>
            <div className="px-8 py-10 text-center">
              <h3 className="mb-2 font-yeseva text-2xl text-[#541f5c]">
                {modal.type === "success"
                  ? "Appointment Confirmed!"
                  : "Booking Failed"}
              </h3>
              <p className="mb-8 text-sm text-gray-600">{modal.message}</p>
              <button
                onClick={() => setModal({ ...modal, open: false })}
                className="w-full rounded-lg bg-[#541f5c] py-3 text-white font-semibold hover:bg-[#3d1643]">
                {modal.type === "success" ? "Close" : "Try Again"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BookingFormSection;
