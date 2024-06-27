import { useState, useCallback } from "react";
import { useEffect } from "react";
import logo from "../images/logo.png";
import Facebook from "../images/facebook.png";
import Google from "../images/googlepic.png";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onImageClick = useCallback(() => {
    // Please sync "Home Page" to the project
  }, []);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.includes("@")) {
      setEmailError("Email must contain '@'");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-[58px] px-24 pb-[27px] box-border gap-[169px] leading-[normal] tracking-[normal] mq450:gap-[42px] mq450:pl-5 mq450:pr-5 mq450:box-border mq950:gap-[84px] mq950:pl-12 mq950:pr-12 mq950:box-border">
      <img
        className="w-[190px] h-[38px] relative object-contain cursor-pointer"
        loading="lazy"
        alt=""
        src={logo}
        onClick={onImageClick}
      />
      <main className="self-stretch flex flex-row items-start justify-center max-w-full">
        <section className="w-[960px] flex flex-col items-start justify-start gap-[266px] max-w-full text-center text-[64px] text-black font-questrial mq700:gap-[66px] mq975:gap-[133px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full mq700:gap-[21px]">
            <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <h1 className="m-0 w-96 relative text-inherit leading-[28px] font-normal font-inherit inline-block shrink-0 whitespace-nowrap max-w-full mq450:text-[38px] mq450:leading-[17px] mq950:text-[51px] mq950:leading-[22px]">
                Sign Up
              </h1>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xl">
              <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-11 mq450:pl-5 mq450:box-border">
                <div className="relative leading-[28px] mq450:text-base mq450:leading-[22px]">
                  <p className="m-0">
                    <span className="whitespace-pre-wrap">{`Already have an account?  `}</span>
                    <span className="[text-decoration:underline]">
                      <span className="text-cornflowerblue">Log In</span>
                      <span className="text-black">{` `}</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq950:flex-wrap mq950:justify-center">
                <div className="w-96 flex flex-col items-start justify-start py-0 pr-24 pl-0 box-border gap-[27px] max-w-full mq450:pr-5 mq450:box-border">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                    <label className="[text-decoration:none] w-[163px] relative leading-[28px] text-[inherit] inline-block mq450:text-base mq450:leading-[22px]">
                      Email
                    </label>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                      <input
                        className="w-full [border:none] [outline:none] text-xl bg-[transparent] h-[21px] flex flex-row items-start justify-start py-0 px-[5px] box-border"
                        type="text"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <hr className="w-full border-t-2 border-gray-300 my-4" />
                      {emailError && (
                        <span className="text-red-500 text-sm">{emailError}</span>
                      )}
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-3 gap-[26px]">
                    <label className="w-[210px] relative leading-[28px] inline-block mq450:text-base mq450:leading-[22px]">
                      Choose a password
                    </label>
                    <input
                      className="w-full [border:none] [outline:none] text-xl bg-[transparent] h-[21px] flex flex-row items-start justify-start py-0 px-[5px] box-border"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <hr className="w-full border-t-2 border-gray-300 my-4" />
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[26px]">
                    <label className="w-[210px] relative leading-[28px] inline-block mq450:text-base mq450:leading-[22px]">
                      Confirm password
                    </label>
                    <input
                      className="w-full [border:none] [outline:none] text-xl bg-[transparent] h-[21px] flex flex-row items-start justify-start py-0 px-[5px] box-border"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <hr className="w-full border-t-2 border-gray-300 my-4" />
                  </div>
                  <button className="cursor-pointer [border:none] pt-2 px-[11px] pb-1 bg-[transparent] w-[126px] flex flex-row items-start justify-start box-border relative whitespace-nowrap">
                    <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5px] bg-cornflowerblue" />
                    <a className="[text-decoration:none] flex-1 relative text-xl leading-[28px] font-questrial text-white text-center z-[1]">
                      Sign Up
                    </a>
                  </button>
                </div>
                <div className="h-96 flex flex-col items-center justify-between gap-[20px] bg-black border-2 border-red">
                  <div className="self-stretch w-full flex flex-row items-start justify-center">
                    <div className="w-full border-t border-darkslateblue bg-black" />
                  </div>
                  <div className="relative text-5xl text-black">or</div>
                  <div className="self-stretch w-full flex flex-row items-start justify-center">
                    <div className="w-full border-t border-black" />
                  </div>
                </div>
                <div className="h-[269px] w-96 flex flex-col items-start justify-start max-w-full text-center text-cornflowerblue">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[35px] mq450:gap-[17px]">
                    <div className="self-stretch h-[59px] bg-white flex flex-row items-start justify-start pt-0 pb-[23px] pr-0 pl-0.5 box-border relative gap-[7px]">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] bg-gainsboro box-border border-[1px] border-solid border-cornflowerblue" />
                      <div className="h-[60px] w-[65px] flex flex-row items-start justify-start gap-[2px]">
                        <div className="h-[57px] flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src={Google}
                          />
                        </div>
                        <div className="self-stretch w-px relative box-border z-[1] border-r-[1px] border-solid border-cornflowerblue" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="self-stretch relative mt-2 leading-[28px] z-[1] mq450:text-base mq450:leading-[22px]">
                          Continue with Google
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-[59px] bg-white flex flex-row items-start justify-start pt-0 pb-[23px] pr-0 pl-0.5 box-border relative gap-[7px]">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[-2px] bottom-[-2px] left-[0px] bg-gainsboro box-border border-[1px] border-solid border-cornflowerblue" />
                      <div className="h-[60px] w-[65px] flex flex-row items-start justify-start gap-[2px]">
                        <div className="h-[57px] flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <img
                            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                            loading="lazy"
                            alt=""
                            src={Facebook}
                          />
                        </div>
                        <div className="self-stretch w-px relative box-border z-[1] border-r-[1px] border-solid border-cornflowerblue" />
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="self-stretch mt-2 relative leading-[28px] z-[1] mq450:text-base mq450:leading-[22px]">
                          Continue with Facebook
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-row items-start justify-center py-0 px-5 text-center text-base text-cornflowerblue font-questrial">
            <div className="h-14 w-[428px] relative leading-[28px] inline-block">
              <p className="m-0">
                <span>
                  <span className="[text-decoration:underline]">
                    Terms of use
                  </span>
                  {`   `}
                  <span className="[text-decoration:underline]">
                    Privacy Policy
                  </span>
                </span>
              </p>
              <p className="m-0 text-black">
                <span>2024@Utsav Dodiya Rights Preserved</span>
                <a
                  className="text-[inherit] whitespace-pre-wrap"
                  href="https://eduwol.com/"
                  target="_blank"
                >
                  <span>notex.com</span>
                </a>
              </p>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default SignUpPage;
