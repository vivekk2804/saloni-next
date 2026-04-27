import PageBanner from "@/components/BannerPage";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <>
      <PageBanner
        title="Error 404"
        bgImage="/images/Banner/5.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Error 404" }]}
      />
      <main className="pt-[0px]">
        <section
          className="section-full max-w-[1920] min-h-[800px] bg-[#efefef] bg-cover bg-bottom-right bg-no-repeat px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]"
          style={{ backgroundImage: "url('/images/bg-3.jpg')" }}>
          <div className="mx-auto w-full max-w-[1170px]">
            <div className="page-notfound mx-auto w-full max-w-[700px] bg-white px-[50px] py-[100px] text-center max-[640px]:px-[50px] max-[640px]:py-[100px]">
              <form method="post">
                <h3 className="title-style-2 mb-[10px] font-caveat text-[22px] lg:text-[30px] leading-[1.2] text-[#541f5c]">
                  Error
                </h3>

                <strong className="block font-yeseva  sm:text-[150px] font-extrabold leading-[1] font-black text-[#111111] max-[640px]:text-[80px]">
                  404
                </strong>

                <h4 className="title-style-2 mb-5 font-caveat text-[50px] leading-[1.2] text-[#111111] max-[640px]:text-[18px]">
                  Oops! Looks like the page is gone.
                </h4>

                <p className="mx-auto mb-5 max-w-[245px] sm:max-w-[590px] text-[16px]  leading-[1.5] text-[#111111]">
                  This is not the page your are looking for. Reach out with your
                  feelings and try refining your search or return to base.
                </p>

                <div className="error-input mx-auto my-[30px] w-full max-w-[245px] sm:max-w-[470px]">
                  <div className="input-group flex w-full">
                    <input
                      id="seaarch"
                      type="text"
                      name="search"
                      placeholder="Search Here...!"
                      className="form-control h-[50px] w-[149px] sm:w-[373px] border-0 bg-[#efefef] px-[15px] text-[13px] leading-[20px] text-[#5c727d] placeholder:text-[#8d9ba7] focus:outline-none"
                    />

                    <span className="input-group-addon overflow-hidden p-0">
                      <button
                        type="submit"
                        className="error-search-btn h-[50px] w-[95px] cursor-pointer border-0 bg-[#111111] px-5 text-[16px] font-medium text-white transition-colors duration-300 ease-in-out">
                        Search
                      </button>
                    </span>
                  </div>
                </div>

                <Link
                  href="/"
                  className="site-button-secondry inline-block overflow-hidden bg-[#541f5c] px-[40px] py-[15px] text-[14px] tracking-[1px] text-transparent [text-shadow:0_0_0_#fff,400px_0_0_#fff] transition-all duration-200 ease-linear hover:bg-[#dfba9f] hover:[text-shadow:-400px_0_0_#111111,0_0_0_#111111]">
                  GO TO HOME
                </Link>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
