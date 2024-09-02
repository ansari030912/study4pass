"use client";
/* eslint-disable @next/next/no-img-element */
import { Avatar, Card, IconButton, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [loginResponse, setLoginResponse] = useState(null);
  const [certificationData, setCertificationData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [vendorData, setVendorData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartResponce, setCartResponce] = useState(null);

  const handleSignOut = () => {
    localStorage.removeItem("loginResponse");
    window.location.reload();
  };

  useEffect(() => {
    const fetchCuppon = async () => {
      try {
        const response = await axios.get(`${Base_URL}/v1/coupons`, {
          headers: {
            "x-api-key": X_API_Key,
          },
        });
        localStorage.setItem("coupons", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCuppon();
  }, []);

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("loginResponse");
      if (storedLoginResponse) {
        setLoginResponse(JSON.parse(storedLoginResponse));
      }
    }
    if (typeof localStorage !== "undefined") {
      const storedLoginResponse = localStorage.getItem("CartProducts");
      if (storedLoginResponse) {
        setCartResponce(JSON.parse(storedLoginResponse));
      }
    }
  }, []);

  const fetchData = async () => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const storedExamData = localStorage.getItem("searchData");
        if (storedExamData) {
          setSearchData(JSON.parse(storedExamData));
        } else {
          const examResponse = await axios.get(
            `https://dumpsarena.com/exam-search`
          );
          setSearchData(examResponse.data);
          localStorage.setItem("searchData", JSON.stringify(examResponse.data));
        }

        const storedVendorData = localStorage.getItem("vendorData");
        if (storedVendorData) {
          setVendorData(JSON.parse(storedVendorData));
        } else {
          const vendorResponse = await axios.get(
            `https://dumpsarena.com/vendor-search`
          );
          setVendorData(vendorResponse.data);
          localStorage.setItem(
            "vendorData",
            JSON.stringify(vendorResponse.data)
          );
        }

        const storedCertificationData =
          localStorage.getItem("certificationData");
        if (storedCertificationData) {
          setCertificationData(JSON.parse(storedCertificationData));
        } else {
          const certificationResponse = await axios.get(
            `https://dumpsarena.com/certification-search`
          );
          setCertificationData(certificationResponse.data);
          localStorage.setItem(
            "certificationData",
            JSON.stringify(certificationResponse.data)
          );
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchValue("");
  };

  const handleHover = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const normalizeSearchValue = (value) => {
    return value.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  };

  const filteredData = searchData
    .filter((item) => {
      const normalizedCode = normalizeSearchValue(item.code);
      const normalizedSearchValue = normalizeSearchValue(searchValue);
      return normalizedCode.includes(normalizedSearchValue);
    })
    .slice(0, 30);

  const filteredVendors = vendorData
    .filter((item) => {
      const normalizedSlug = normalizeSearchValue(item.slug);
      const normalizedSearchValue = normalizeSearchValue(searchValue);
      return normalizedSlug.includes(normalizedSearchValue);
    })
    .slice(0, 10);

  const filteredCertifications = certificationData
    .filter((item) => {
      const normalizedSlug = normalizeSearchValue(item.slug);
      const normalizedSearchValue = normalizeSearchValue(searchValue);
      return normalizedSlug.includes(normalizedSearchValue);
    })
    .slice(0, 10);

  const handleExamPage = (exam) => {
    router.push(`/study-meterial/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
    setIsSearchOpen(false);
  };
  const handleVendorPage = (exam) => {
    router.push(`/study-meterial-provider/${exam}`);
    setSearchValue("");
    setIsSearchOpen(false);
  };
  const handleCertificationPage = (exam) => {
    router.push(`/study-meterial-certification/${exam.vendor}/${exam.slug}`);
    setSearchValue("");
    setIsSearchOpen(false);
  };

  return (
    <>
      <section className="text-gray-700 font-heading font-medium relative bg-gray-50 bg-opacity-50">
        <nav className="flex justify-between px-6 lg:px-12 py-6 xl:py-3">
          <div className="flex w-full items-center">
            <Link href="/">
              <img
                className="h-7"
                src="/img/study4paass.com.svg"
                alt="Study 4 Pass"
              />
            </Link>
            <ul className="hidden xl:flex px-4 ml-24">
              <li className="mr-4 relative group">
                <Link
                  className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                  href="/study-meterial-providers"
                >
                  <span>Vendors / Certs</span>
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                  href="/video-courses"
                >
                  Video Courses
                </Link>
              </li>
              <li className="mr-4">
                <Link
                  className="flex items-center bg-blue-50 px-4 rounded-3xl py-2 text-gray-600 hover:text-blue-500"
                  href="/unlimited-access"
                >
                  Unlimited Access
                </Link>
              </li>
            </ul>
            <div className="hidden xl:flex items-center ml-auto">
              <Link
                className={`"text-gray-500 flex hover:text-blue-500"`}
                href="/cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M13.75 9a.75.75 0 0 0-1.5 0v1.25H11a.75.75 0 0 0 0 1.5h1.25V13a.75.75 0 0 0 1.5 0v-1.25H15a.75.75 0 0 0 0-1.5h-1.25z"
                  />
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M1.293 2.751a.75.75 0 0 1 .956-.459l.301.106c.617.217 1.14.401 1.553.603c.44.217.818.483 1.102.899c.282.412.399.865.452 1.362l.011.108H17.12c.819 0 1.653 0 2.34.077c.35.039.697.101 1.003.209c.3.105.631.278.866.584c.382.496.449 1.074.413 1.66c-.035.558-.173 1.252-.338 2.077l-.01.053l-.002.004l-.508 2.47c-.15.726-.276 1.337-.439 1.82c-.172.51-.41.96-.837 1.308c-.427.347-.916.49-1.451.556c-.505.062-1.13.062-1.87.062H10.88c-1.345 0-2.435 0-3.293-.122c-.897-.127-1.65-.4-2.243-1.026c-.547-.576-.839-1.188-.985-2.042c-.137-.8-.15-1.848-.15-3.3V7.038c0-.74-.002-1.235-.043-1.615c-.04-.363-.109-.545-.2-.677c-.087-.129-.22-.25-.524-.398c-.323-.158-.762-.314-1.43-.549l-.26-.091a.75.75 0 0 1-.46-.957M5.708 6.87v2.89c0 1.489.018 2.398.13 3.047c.101.595.274.925.594 1.263c.273.288.65.472 1.365.573c.74.105 1.724.107 3.14.107h5.304c.799 0 1.33-.001 1.734-.05c.382-.047.56-.129.685-.231c.125-.102.24-.26.364-.625c.13-.385.238-.905.4-1.688l.498-2.42v-.002c.178-.89.295-1.482.322-1.926c.026-.421-.04-.569-.101-.65a.561.561 0 0 0-.177-.087a3.17 3.17 0 0 0-.672-.134c-.595-.066-1.349-.067-2.205-.067zM5.25 19.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5m6.75-.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"
                    clip-rule="evenodd"
                  />
                </svg>
                <div className="text-base -mt-2 ">
                  <span
                    style={{
                      paddingLeft: "7px",
                      paddingRight: "8px",
                      paddingBottom: "2px",
                    }}
                    className="rounded-full bg-blue-500 text-white"
                  >
                    {cartResponce ? cartResponce.length : "0"}
                  </span>
                </div>
              </Link>

              {!loginResponse?.is_logged_in ? (
                <>
                  <button className="uppercase ml-4 text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-5 tracking-wide hover:border-gray-300">
                    <span className="block text-gray-600 mt-px">
                      <Link href={"/login"}>Login</Link> /{" "}
                      <Link href={"/register"}>Register</Link>
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <div className="w-px h-8 bg-gray-200 bg-opacity-50 ml-9 mr-6"></div>
                  <div onMouseLeave={handleClose}>
                    <span className="flex items-center mr-6" href="#">
                      <span onMouseEnter={handleHover}>
                        {loginResponse?.name}
                      </span>

                      <img
                        onMouseEnter={handleHover}
                        className="ml-6"
                        src="/avatar-online.png"
                        alt=""
                      />
                      <IconButton
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onMouseEnter={handleHover}
                      >
                        <img
                          className="ml-6"
                          src="/arrow-down-gray.svg"
                          alt=""
                        />
                      </IconButton>
                      <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        className="mt-6"
                      >
                        <Link href={"/account/products"}>
                          <MenuItem onClick={handleClose}>Products</MenuItem>
                        </Link>
                        <Link href={"/account/login-history"}>
                          <MenuItem onClick={handleClose}>
                            Login History
                          </MenuItem>
                        </Link>
                        <Link href={"/account/download-history"}>
                          <MenuItem onClick={handleClose}>
                            Download History
                          </MenuItem>
                        </Link>
                        <Link href={"/account/invoices"}>
                          <MenuItem onClick={handleClose}>Invoices</MenuItem>
                        </Link>
                        <Link href={"/account/setting"}>
                          <MenuItem onClick={handleClose}>Setting</MenuItem>
                        </Link>
                        <div>
                          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                        </div>
                      </Menu>
                    </span>
                  </div>
                </>
              )}

              <button
                className="uppercase text-sm font-bold font-body border-2 border-gray-200 border-opacity-50 rounded-full py-3 px-3 ml-2 tracking-wide hover:border-gray-300"
                onClick={toggleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10 18a7.95 7.95 0 0 0 4.897-1.688l4.396 4.396l1.414-1.414l-4.396-4.396A7.95 7.95 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8s3.589 8 8 8m0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6s-6-2.691-6-6s2.691-6 6-6"
                  />
                </svg>
              </button>
            </div>
          </div>
          <button
            className="navbar-burger self-center xl:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              width="25"
              height="16"
              viewBox="0 0 25 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="25" height="2" fill="currentColor"></rect>
              <rect y="14" width="25" height="2" fill="currentColor"></rect>
            </svg>
          </button>
        </nav>

        {isSearchOpen && (
          <div className="container hidden xl:block mx-auto bg-transparent">
            <div className="flex justify-between items-center px-6 lg:px-12 py-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <IconButton className="ml-4" onClick={toggleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
                  />
                </svg>
              </IconButton>
            </div>
          </div>
        )}

        <div className="container xl:hidden mx-auto w-full bg-transparent">
          <div className="flex justify-between items-center px-6 lg:px-12 py-3">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        <div
          className={`navbar-menu xl:hidden ${
            isMenuOpen ? "" : "hidden"
          } fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50`}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
            onClick={toggleMenu}
          ></div>
          <nav className="relative flex flex-col py-8 h-full w-full bg-white overflow-y-auto">
            <div className="flex items-center pl-6 mb-8">
              <Link className="text-2xl text-gray-800 font-bold" href="/">
                <img
                  className="h-6"
                  src="/img/study4paass.com.svg"
                  alt="Study 4 Pass"
                />
              </Link>
            </div>

            <div>
              <ul>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="/study-meterial-providers"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Vendors & Certifications
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="/video-courses"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Video Courses
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="/unlimited-access"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Unlimited Access
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="/test-engine"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Test Engine
                  </Link>
                </li>

                <li className="pt-3 border-t">
                  <span className="block pl-8 text-body text-xs text-gray-400 rounded-full hover:shadow-2xl">
                    Other Pages
                  </span>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    FAQs
                  </Link>
                </li>
                {loginResponse?.is_logged_in && (
                  <>
                    <li className="pt-3 border-t">
                      <span className="block pl-8 text-body text-xs text-gray-400 rounded-full hover:shadow-2xl">
                        Account
                      </span>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                        href="/account/products"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Products
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                        href="/account/invoices"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Invoices
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                        href="/account/login-history"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login History
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                        href="/account/download-history"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Download History
                      </Link>
                    </li>
                    <li className="mb-1">
                      <Link
                        className="block pl-8 py-4 text-body text-lg rounded-full hover:shadow-2xl"
                        href="/account/update-profile"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li className="mb-1">
                      <div
                        className="block pl-8 py-4 cursor-pointer text-body text-lg rounded-full hover:shadow-2xl"
                        onClick={handleSignOut}
                      >
                        Log Out
                      </div>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="mt-auto px-6">
              {!loginResponse?.is_logged_in ? (
                <button className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
                  <span className="block mt-px">
                    {" "}
                    <Link onClick={() => setIsMenuOpen(false)} href={"/login"}>
                      Login
                    </Link>{" "}
                    /{" "}
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      href={"/register"}
                    >
                      Register
                    </Link>
                  </span>
                </button>
              ) : (
                <button className="py-3 px-5 mt-6 w-full font-body font-bold uppercase tracking-wide text-sm border-2 border-gray-200 hover:border-gray-300 border-opacity-50 rounded-full">
                  <span className="block mt-px">{loginResponse?.name}</span>
                  <span className="block text-xs text-gray-500 mt-px">
                    {loginResponse?.email}
                  </span>
                </button>
              )}
              <p className="mt-6 mb-4 text-center">
                <span className="text-sm text-darkBlueGray-400">
                  2024 © study4pass.com All rights reserved.
                </span>
              </p>
            </div>
          </nav>
          <button
            className="navbar-close absolute top-5 p-6 right-5"
            onClick={toggleMenu}
          >
            <div className="absolute top-3">
              <span className="absolute w-px h-6 bg-black transform -rotate-45"></span>
              <span className="absolute w-px h-6 bg-black transform rotate-45"></span>
            </div>
          </button>
        </div>
        <div className="container mx-20">
          {searchValue && (
            <div>
              <ul
                style={{
                  backgroundColor: "white",
                  color: "gray",
                  padding: "0",
                  margin: "0",
                  listStyle: "none",
                  position: "absolute",
                  left: 0,
                  width: "100%",
                  borderRadius: "0px",
                  zIndex: 1000,
                }}
              >
                <Card
                  sx={{
                    maxHeight: "500px",
                    overflowY: "auto",
                    padding: "10px",
                  }}
                >
                  <li
                    style={{
                      padding: "10px",
                      border: "1px solid #3B82F6",
                      textAlign: "center",
                    }}
                  >
                    <b>See all search for &quot;{searchValue}&quot;</b>
                  </li>
                  <li
                    className="bg-blue-500 text-white font-bold text-xl text-center"
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #3B82F6",
                      borderLeft: "1px solid #3B82F6",
                      borderRight: "1px solid #3B82F6",
                      borderBottom: "1px solid #3B82F6",
                    }}
                  >
                    Exams - {filteredData.length}
                  </li>
                  {filteredData.map((item, index) => (
                    <div
                      key={item.code}
                      onClick={() => handleExamPage(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <li
                        style={{
                          padding: "10px",
                          borderTop: "1px solid #3B82F6",
                          borderLeft: "1px solid #3B82F6",
                          borderRight: "1px solid #3B82F6",
                          borderBottom: "1px solid #3B82F6",
                        }}
                        className="hover:bg-gray-200 flex"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/package-small-min_optimized.png"
                          className="mr-3 mt-1"
                          variant="rounded"
                        />
                        <div>
                          <div className="text-gray-700 font-bold">
                            {item.code} - ({item.code})
                          </div>
                          <div>{item.name}</div>
                        </div>
                      </li>
                    </div>
                  ))}
                  <li
                    className="bg-blue-500 text-white font-bold text-xl text-center"
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #3B82F6",
                      borderLeft: "1px solid #3B82F6",
                      borderRight: "1px solid #3B82F6",
                      borderBottom: "1px solid #3B82F6",
                    }}
                  >
                    Vendors - {filteredVendors.length}
                  </li>
                  {filteredVendors.map((item, index) => (
                    <div
                      key={item.code}
                      onClick={() => handleVendorPage(item.slug)}
                      style={{ cursor: "pointer" }}
                    >
                      <li
                        style={{
                          padding: "10px",
                          borderTop: "1px solid #3B82F6",
                          borderLeft: "1px solid #3B82F6",
                          borderRight: "1px solid #3B82F6",
                          borderBottom: "1px solid #3B82F6",
                        }}
                        className="hover:bg-gray-200 flex"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/img-1.png"
                          className="mr-3 mt-1"
                          variant="rounded"
                        />
                        <div>
                          <div className="text-gray-700 font-bold">
                            {item.slug}
                          </div>
                          <div>{item.name}</div>
                        </div>
                      </li>
                    </div>
                  ))}
                  <li
                    className="bg-blue-500 text-white font-bold text-xl text-center"
                    style={{
                      padding: "10px",
                      borderTop: "1px solid #3B82F6",
                      borderLeft: "1px solid #3B82F6",
                      borderRight: "1px solid #3B82F6",
                      borderBottom: "1px solid #3B82F6",
                    }}
                  >
                    Certifications - {filteredCertifications.length}
                  </li>
                  {filteredCertifications.map((item, index) => (
                    <div
                      key={item.code}
                      onClick={() => handleCertificationPage(item)}
                      style={{ cursor: "pointer" }}
                    >
                      <li
                        style={{
                          padding: "10px",
                          borderTop: "1px solid #3B82F6",
                          borderLeft: "1px solid #3B82F6",
                          borderRight: "1px solid #3B82F6",
                          borderBottom: "1px solid #3B82F6",
                        }}
                        className="hover:bg-gray-200 flex"
                      >
                        <Avatar
                          alt="Remy Sharp"
                          src="/package-small-min_optimized.png"
                          className="mr-3 mt-1"
                          variant="rounded"
                        />
                        <div>
                          <div className="text-gray-700 font-bold">
                            {item.slug}
                          </div>
                          <div>{item.name}</div>
                        </div>
                      </li>
                    </div>
                  ))}
                </Card>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default NavBar;
