"use client";

import { useState } from "react";

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    id: "collapseOne5",
    question: "What is your cancellation policy?",
    answer:
      'Providing outstanding service is the core of our business. Because spa services are reserved especially for you, we ask that you notify us 24 hours in advance to change or cancel appointments without penalty. Without 24 hour notice, we will charge a fee of 50% of the price of the cancelled service, and 100% of the service in the event of a "no-show." We thank you in advance for your cooperation and understanding. Spa packages and groups must give a minimum 48 hour cancellation notice.',
  },
  {
    id: "collapseTwo5",
    question: "What are your hours?",
    answer: "Monday - Friday: 9 to 7pm Saturday: 8 to 6pm Sunday: Closed",
  },
  {
    id: "collapseThree5",
    question: "How do I schedule an appointment?",
    answer:
      "You can schedule your appointment by phone, in person or online. Reservations for your appointment are held with a credit card or gift certificate.",
  },
  {
    id: "collapseFour5",
    question: "What should I wear for a spa or salon treatment?",
    answer:
      "No special clothing is required; come as you are! If you are enjoying several services, you will be provided with a robe and slippers. Towels for the eucalyptus steam shower are available. Your personal comfort is always most important to us!",
  },
  {
    id: "collapseFive5",
    question: "What if I have lost my gift certificate?",
    answer:
      "Your certificate is considered the same as cash. It is necessary to keep track of this valuable property.",
  },
];

const FaqAccordionSection = () => {
  const [activeId, setActiveId] = useState<string>(faqItems[0].id);

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
                {faqItems.map((item) => {
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
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;
