const TeamSingleAppointmentSection = () => {
  return (
    <section className="bg-[#feede7] px-4 pb-[50px] pt-[80px] max-[767px]:pb-[30px] max-[767px]:pt-[30px]">
      <div className="container mx-auto w-full max-w-[1170px]">
        <div className="section-content">
          <div className="section-content">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8 col-md-12 col-sm-12 mx-auto w-full max-w-[780px]">
                <div className="home-contact-section m-b30 mb-[30px]">
                  <form
                    className="cons-contact-form"
                    method="post"
                    action="https://thewebmax.org/saloni/phpmailer/mail.php">
                    <h2 className="mb-8 font-yeseva text-[42px] leading-[1.1] text-[#541f5c] max-[540px]:text-[30px]">
                      Make an Appointment
                    </h2>

                    <div className="row grid grid-cols-1 gap-x-[30px] md:grid-cols-2">
                      <div className="col-md-6 col-sm-6">
                        <div className="form-group mb-[25px]">
                          <input
                            name="username"
                            type="text"
                            required
                            className="form-control h-[60px] w-full border-0 bg-[#fff] px-[14px] text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none"
                            placeholder="Name"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group mb-[25px]">
                          <input
                            name="email"
                            type="text"
                            required
                            className="form-control h-[60px] w-full border-0 bg-[#fff] px-[14px] text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group mb-[25px]">
                          <input
                            name="phone"
                            type="text"
                            required
                            className="form-control h-[60px] w-full border-0 bg-[#fff] px-[14px] text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none"
                            placeholder="Phone"
                          />
                        </div>
                      </div>

                      <div className="col-md-6 col-sm-6">
                        <div className="form-group mb-[25px]">
                          <input
                            name="subject"
                            type="text"
                            required
                            className="form-control h-[60px] w-full border-0 bg-[#fff] px-[14px] text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none"
                            placeholder="Subject"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 md:col-span-2">
                        <div className="form-group mb-[25px]">
                          <textarea
                            name="message"
                            rows={4}
                            className="form-control min-h-[120px] w-full resize-y border-0 bg-[#fff] px-[14px] py-3 text-[13px] leading-[20px] text-[#111111] placeholder:text-[#111111] focus:outline-none"
                            placeholder="Message"
                          />
                        </div>
                      </div>

                      <div className="col-md-12 md:col-span-2">
                        <button
                          type="submit"
                          className="site-button inline-block overflow-hidden bg-[#111111] px-[40px] py-[15px] text-[14px] tracking-[1px] text-transparent [text-shadow:0_0_0_#fff,400px_0_0_#fff] transition-all duration-300 ease-linear hover:bg-[#541f5c] hover:[text-shadow:-400px_0_0_#fff,0_0_0_#fff]">
                          Send us a message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSingleAppointmentSection;
