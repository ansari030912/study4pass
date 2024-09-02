"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import withAuth from "@/app/auth/RouterAuth";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  IconButton,
  Tooltip,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const UnlimitedPDFPage = ({ params }) => {
  const router = useRouter();

  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
    fetchData(letter);
  };

  const fetchData = async (letter = "A") => {
    setLoading(true);
    try {
      const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
      if (!loginResponse?._token) {
        return router.push("/sign-in");
      }
      const response = await axios.get(
        `${Base_URL}/v1/account/pdf-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      setUnlimitedTeAccess(response.data);
      setTotalPages(Math.ceil(response.data.vendors.length / itemsPerPage));
      setLoading(false);
    } catch (error) {
      console.error("Error:", error.message);
      setLoading(false);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  useEffect(() => {
    fetchData(selectedLetter);
  }, [params.id_one, params.id_two]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVendors = unlimitedTeAccess?.vendors?.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <CircularProgress />
        </Box>
      )}

      <section className="px-4 bg-white">
        <div className="container mx-auto">
          <div className="mt-6 text-3xl font-bold text-blue-500 border-b pb-8">
            <h2>Unlimited PDF Access</h2>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:hidden lg:w-4/12 p-4">
              <div className="flex justify-center">
                <div
                  className="relative overflow-hidden rounded-xl transition duration-200"
                  style={{
                    height: "270px",
                    width: "270px",
                  }}
                >
                  <img
                    className="absolute inset-0 rounded-xl w-full h-full transform group-hover:scale-105 transition duration-200"
                    src="/PDF-TE.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full lg:w-8/12 p-4">
              <div className="p-5 lg:pt-16">
                <Typography
                  variant="body1"
                  className="pb-4 text-gray-500 font-semibold max-w-xl"
                >
                  You have unlimited access to PDF Dumps files.
                </Typography>
                <Typography
                  variant="body1"
                  className="pb-4 text-blue-500 font-semibold max-w-xl mt-2"
                >
                  You have downloaded: {unlimitedTeAccess?.total_downloaded}
                </Typography>
                <Typography
                  variant="body1"
                  className="pb-4 text-green-500 font-semibold max-w-xl mt-2"
                >
                  Monthly Download Limit: {unlimitedTeAccess?.total_limit}
                </Typography>
                <Typography
                  variant="body1"
                  className=" text-gray-500 font-semibold max-w-xl mt-2 mb-6"
                >
                  (Each download of a different or the same PDF file will affect
                  the download limit)
                </Typography>
              </div>
            </div>
            <div className="w-full hidden lg:block lg:w-4/12 p-4">
              <div className="flex justify-center">
                <div
                  className="relative overflow-hidden rounded-xl transition duration-200"
                  style={{
                    height: "270px",
                    width: "270px",
                  }}
                >
                  <img
                    className="absolute inset-0 rounded-xl w-full h-full transform group-hover:scale-105 transition duration-200"
                    src="/PDF-TE.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="container mx-auto" />

      {unlimitedTeAccess?.purchase_valid &&
        !unlimitedTeAccess?.purchase_approved && (
          <section className="p-6 container mx-auto bg-white">
            <div className="text-center">
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Unlimited PDF Access!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Your Unlimited PDF access is not approved yet. We are
                    checking your payment so this might take a few hours. Please
                    contact our sales chat support or send an email to{" "}
                    <Link
                      href="mailto:sales@study4pass.com"
                      className="text-blue-600"
                    >
                      sales@study4pass.com
                    </Link>{" "}
                    for fast approval. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      {unlimitedTeAccess?.purchase_approved && (
        <>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="container mx-auto"
            mb={-8}
            sx={{
              flexWrap: "wrap",
              gap: 1,
              padding: { xs: "10px", sm: "15px", md: "20px" },
            }}
          >
            {alphabet.map((letter) => (
              <Button
                key={letter}
                variant={selectedLetter === letter ? "contained" : "outlined"}
                onClick={() => handleLetterClick(letter)}
                sx={{
                  margin: "0 5px",
                  padding: { xs: "5px 10px", sm: "7px 15px", md: "10px 20px" },
                  minWidth: { xs: "30px", sm: "40px", md: "50px" },
                  fontSize: { xs: "12px", sm: "14px", md: "16px" },
                }}
              >
                {letter}
              </Button>
            ))}
          </Box>
          <section className="pb-4 bg-blueGray-50">
            <div className="container mx-auto">
              <div className="my-6 text-3xl font-bold text-blue-500 border-b pb-8">
                <h2>Unlimited PDF Access</h2>
              </div>
              <div className="px-4 pb-12 bg-white rounded-xl">
                {selectedVendors?.map((vendor, index) => (
                  <div key={index}>
                    <div className="mb-1 mt-3 text-2xl font-bold text-blue-700">
                      {vendor.vendor_title}
                    </div>
                    <Card
                      sx={{
                        padding: "15px",
                        borderRadius: "10px",
                        boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.1)",
                        marginBottom: "20px",
                      }}
                    >
                      {vendor?.exams.map((exam, index) => (
                        <Grid
                          container
                          key={index}
                          spacing={2}
                          sx={{
                            padding: "16px",
                            borderBottom:
                              index !== vendor.exams.length - 1
                                ? "1px solid #e0e0e0"
                                : "none",
                          }}
                        >
                          <Grid
                            item
                            xs={12}
                            md={7}
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                          >
                            <Typography
                              variant="body1"
                              className="text-blue-600"
                              fontWeight="bold"
                            >
                              {exam.exam_code}
                            </Typography>
                            <Typography
                              variant="body2"
                              className="text-green-500"
                              fontWeight="bold"
                              sx={{ marginTop: "4px" }}
                            >
                              {exam.exam_name}
                            </Typography>
                          </Grid>

                          <Grid
                            item
                            xs={12}
                            md={5}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                          >
                            <Typography
                              variant="body1"
                              className="text-red-500 font-bold"
                              sx={{
                                textAlign: {
                                  xs: "center",
                                  md: "left",
                                },
                                marginBottom: {
                                  xs: "8px",
                                  md: "0",
                                },
                              }}
                            >
                              {exam.exam_questions}{" "}
                              <span className="text-gray-500">Questions</span>
                            </Typography>
                            <Tooltip title="Download Premium PDF File">
                              <Link
                                href={`https://certsgang.com${exam.download_url}`}
                              >
                                <IconButton className="bg-green-400 h-10 w-10 hover:bg-green-500">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="2em"
                                    height="2em"
                                    viewBox="0 0 32 32"
                                  >
                                    <path
                                      fill="white"
                                      d="M6 3v26h20V9.6l-.3-.3l-6-6l-.3-.3zm2 2h10v6h6v16H8zm12 1.4L22.6 9H20zM15 13v5h-3l4 4l4-4h-3v-5zm-3 10v2h8v-2z"
                                    />
                                  </svg>
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      ))}
                    </Card>
                  </div>
                ))}

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4">
                  <div>
                    Showing {startIndex + 1} to{" "}
                    {Math.min(
                      startIndex + itemsPerPage,
                      unlimitedTeAccess?.vendors.length
                    )}{" "}
                    of {unlimitedTeAccess?.vendors.length} exams
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outlined"
                      onClick={handlePreviousPage}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outlined"
                      onClick={handleNextPage}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default withAuth(UnlimitedPDFPage);
