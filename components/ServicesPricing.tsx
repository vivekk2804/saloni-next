import Link from "next/link";

type PricingPlan = {
  name: string;
  price: number;
  description: string;
  highlight?: boolean;
  className?: string;
};

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Basic",
    price: 29,
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor",
  },
  {
    name: "Standard",
    price: 49,
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor",
    highlight: true,
  },
  {
    name: "Advanced",
    price: 99,
    description:
      "Tempo sit amet ipsum dolor, consecter adipisi cing elit, lorem do incididu eiusmod tempor dolor",
  },
];

const ServicesPricing = ({ className }: any) => {
  return (
    <section
      className={`section-full bg-[#fff] px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px] ${className ?? ""} `}>
      <div className="container mx-auto w-full max-w-[1140px]">
        <div className="section-content">
          <div className="section-content">
            <div className="pricingtable-row no-col-gap px-[15px]">
              <div className="row d-flex grid grid-cols-1 justify-center gap-y-[30px] md:grid-cols-2 md:gap-x-[30px] lg:grid-cols-3 lg:gap-x-0 lg:gap-y-0">
                {PRICING_PLANS.map((plan, index) => {
                  const isHighlight = !!plan.highlight;

                  return (
                    <div
                      key={plan.name}
                      className="col-lg-4 col-md-6 col-sm-12 m-b30">
                      <div
                        className={`pricingtable-wrapper ${
                          index > 0 ? "lg:ml-[-1px]" : ""
                        }`}>
                        <div
                          className={`pricingtable-inner overflow-hidden border border-[#e9e9e9] text-center ${
                            isHighlight
                              ? "pricingtable-highlight relative z-10 bg-[#fff6ef]"
                              : "bg-[#fff]"
                          }`}>
                          <div className="pricing-table-top-section relative overflow-hidden">
                            <div className="pricingtable-title m-[-1px] px-[20px] pt-[40px]">
                              <h2
                                className={`title-style-2 m-0 font-caveat text-[42px] font-[500] leading-[1.2] ${
                                  isHighlight
                                    ? "text-[#111111]"
                                    : "text-[#541f5c]"
                                }`}>
                                {plan.name}
                              </h2>
                            </div>

                            <div className="pricingtable-price relative m-[-1px] p-[10px]">
                              <h2
                                className={`pricingtable-bx m-0 font-yeseva text-[72px] leading-none font-bold ${
                                  isHighlight
                                    ? "text-[#541f5c]"
                                    : "text-[#0f1221]"
                                }`}>
                                <sup
                                  className={`pricingtable-sign relative top-0 align-top text-[72px] leading-none font-bold ${
                                    isHighlight
                                      ? "text-[#541f5c]"
                                      : "text-[##0f1221]"
                                  }`}>
                                  $
                                </sup>
                                {plan.price}
                              </h2>
                              <span
                                className={`pricingtable-type mt-[20px] block text-[14px] tracking-[4px] uppercase ${
                                  isHighlight
                                    ? "text-[#111111]"
                                    : "text-[#0f1221]"
                                }`}>
                                Monthly Package
                              </span>
                            </div>
                          </div>

                          <ul className="pricingtable-features m-0 list-none p-0 text-[#000000]">
                            <li className="px-[20px] py-[20px] text-[16px] leading-[1.45] text-[#111111]">
                              {plan.description}
                            </li>
                          </ul>

                          <div className="pricingtable-footer mt-[-1px] px-[20px] pb-[32px] pt-[20px]">
                            <div className="mt-[32px]">
                              <Link
                                href="/HeroForm"
                                className={`site-btn-effect inline-flex min-w-[154px] items-center justify-center 
              px-[40px] py-[15px] text-[14px] font-medium tracking-[1px] 
              text-transparent overflow-hidden
              transition-all duration-300
              [text-shadow:0_0_0_#fff,400px_0_0_#fff]
              hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]
              ${
                isHighlight
                  ? "site-button-secondry bg-[#541f5c] hover:bg-[#dfba9f]"
                  : "site-button bg-[#111111] hover:bg-[#541f5c]"
              }`}>
                                Select
                              </Link>
                            </div>
                          </div>
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

export default ServicesPricing;
