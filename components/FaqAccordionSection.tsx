"use client";

import { useEffect, useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

type FaqApiItem = {
  _id?: string;
  id?: string | number;
  question?: string;
  answer?: string;
  faq_question?: string;
  faq_answer?: string;
  sortOrder?: number;
};

type FaqApiResponse = {
  message?: string;
  success?: boolean;
  data?: FaqApiItem[];
};

const FaqAccordionSection = () => {
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const skeletonItems = Array.from({ length: 4 }, (_, index) => index);

  useEffect(() => {
    let isMounted = true;

    const fetchFaqs = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_API?.trim();

        if (!baseUrl) {
          throw new Error("NEXT_PUBLIC_API is not configured");
        }

        const normalizedBaseUrl = baseUrl.endsWith("/")
          ? baseUrl.slice(0, -1)
          : baseUrl;

        const response = await fetch(`${normalizedBaseUrl}/faqs/`);
        const result = (await response
          .json()
          .catch(() => null)) as FaqApiResponse | null;

        if (!response.ok) {
          throw new Error(result?.message || "Failed to fetch FAQs");
        }

        const apiFaqs = Array.isArray(result?.data) ? result.data : [];
        const mappedFaqs = apiFaqs
          .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
          .map((item, index) => {
            const question = (item.question || item.faq_question || "").trim();
            const answer = (item.answer || item.faq_answer || "").trim();
            const id = item._id || String(item.id || `faq-${index + 1}`);

            if (!question || !answer) return null;

            return { id, question, answer };
          })
          .filter((item): item is FaqItem => item !== null);

        if (!isMounted) return;

        setFaqs(mappedFaqs);
        setActiveId(mappedFaqs[0]?.id || "");
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        if (!isMounted) return;
        setFaqs([]);
        setActiveId("");
      } finally {
        if (!isMounted) return;
        setLoading(false);
      }
    };

    void fetchFaqs();

    return () => {
      isMounted = false;
    };
  }, []);

  const toggleItem = (id: string) => {
    setActiveId((current) => (current === id ? "" : id));
  };

  return (
    <section className="  bg-[#fff6ef] px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
      <div className="container mx-auto w-full  max-w-[1140px]">
        <div className="section-content">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10 col-md-12 col-sm-12 w-full mx-auto max-w-[950px]">
              <div className="wt-accordion acc-bg-white" id="accordion5">
                {loading ? (
                  skeletonItems.map((item) => (
                    <div
                      key={`faq-skeleton-${item}`}
                      className="panel wt-panel mb-[12px] border-0">
                      <div className="acod-head">
                        <div className="relative block w-full bg-[#fff] py-[15px] pl-[18px] pr-[80px] max-[767px]:py-[14px] max-[767px]:pr-[64px]">
                          <div className="h-[28px] w-[72%] animate-pulse rounded bg-[#f1e2d7] max-[767px]:h-[24px]" />
                          <span className="absolute right-0 top-0 flex h-full w-[66px] items-center justify-center bg-[#541f5c] text-white max-[767px]:w-[56px]">
                            <i
                              className="fa text-[48px] not-italic leading-none max-[767px]:text-[34px]"
                              aria-hidden="true">
                              +
                            </i>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : faqs.length === 0 ? (
                  <p className="bg-[#fff] px-[20px] py-[16px] text-[16px] text-[#541f5c]">
                    No FAQs available.
                  </p>
                ) : (
                  faqs.map((item) => {
                    const isOpen = activeId === item.id;

                    return (
                      <div
                        key={item.id}
                        className="panel wt-panel mb-[12px] border-0">
                        <div
                          className={`acod-head ${isOpen ? "acc-actives" : ""}`}>
                          <h4 className="acod-title m-0">
                            <button
                              type="button"
                              aria-expanded={isOpen}
                              aria-controls={item.id}
                              onClick={() => toggleItem(item.id)}
                              className={`relative block w-full bg-[#fff] py-[15px] pl-[18px] pr-[80px] text-left font-yeseva text-[22px] leading-[1.2] transition-colors duration-300 max-[767px]:py-[14px] max-[767px]:pr-[64px] max-[767px]:text-[20px] max-[540px]:text-[22px] ${
                                isOpen
                                  ? "text-[#0f1221] bg-[#fff]"
                                  : "text-[#541f5c] hover:text-[#0f1221]"
                              }`}>
                              {item.question}
                              <span className="indicator absolute right-0 top-0 flex h-full w-[66px] items-center justify-center bg-[#541f5c] text-white max-[767px]:w-[56px]">
                                <i
                                  className="fa text-[48px] not-italic leading-none max-[767px]:text-[34px]"
                                  aria-hidden="true">
                                  {isOpen ? "-" : "+"}
                                </i>
                              </span>
                            </button>
                          </h4>
                        </div>

                        <div
                          id={item.id}
                          className={`acod-body overflow-hidden transition-all duration-300 ease-linear ${
                            isOpen
                              ? "max-h-[500px] opacity-100"
                              : "max-h-0 opacity-0"
                          }`}>
                          <div className="acod-content p-a20 bg-[#fff] sm:w-[690px] lg:w-[920px] px-[20px] pb-5 pt-[10px] text-[16px] leading-[1.4] text-[#111111] max-[767px]:px-[18px] max-[767px]:pb-[18px] max-[767px]:text-[16px]">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;
