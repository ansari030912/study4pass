"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Box, Button, Card, CircularProgress, Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const AllTeAccesExamsList = () => {
  const [data, setData] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 10;
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const fetchData = async (letter = "A") => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${Base_URL}/v1/all-exam-codes/${letter}`,
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(selectedLetter);
  }, [selectedLetter]);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setCurrentPage(1);
    fetchData(letter);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedVendors = data.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(data.length / itemsPerPage);

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
          <div className="mt-6  text-lg lg:text-3xl font-bold text-blue-500 border-b pb-8">
            <h2>All Test Engine Unlimited Access Exams List</h2>
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
                <div className="pb-4 text-gray-500 font-semibold max-w-xl">
                  When you buy Test Engine Unlimited Access you will get all
                  vendors exams access
                </div>
                <div className="pb-4 text-red-500 font-semibold max-w-xl mt-2">
                  You can Easily Search Vendors Exams by their Name First
                  Alphabet.
                </div>

                <div className="text-red-500 font-semibold max-w-xl mt-2 mb-6">
                  Currently Searched Vendors Exams with Letter:{" "}
                  <span className="text-green-500">{selectedLetter}</span>
                </div>
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

      <>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          className="container mx-auto"
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
        <section className="pb-4">
          <div className="container mx-auto">
            <div className="px-4 pb-12 bg-white rounded-xl">
              {selectedVendors?.map((vendor, index) => (
                <div key={index} className="mb-6">
                  <h3 className="mb-6 text-3xl border-b-2 pb-5 font-semibold border-gray-200 text-blue-700">
                    {vendor.vendor_title}
                  </h3>
                  <Grid container spacing={3}>
                    {vendor.exams.map((exam, examIndex) => (
                      <Grid item xs={12} md={6} lg={4} key={examIndex}>
                        <Card
                          sx={{
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            marginBottom: "20px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%", // Ensures card takes full height
                          }}
                        >
                          <div>
                            <div className="text-blue-600 text-2xl font-bold">
                              {exam.exam_code}
                            </div>
                            <div className="text-gray-500 font-semibold my-4">
                              {exam.exam_name}
                            </div>
                          </div>
                          <div className="mt-auto flex justify-between">
                            <div className="text-green-600 text-base font-bold">
                              Questions
                            </div>
                            <div className="text-gray-500 font-semibold">
                              {exam.exam_questions}
                            </div>
                          </div>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              ))}

              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <div>
                  Showing {startIndex + 1} to{" "}
                  {Math.min(startIndex + itemsPerPage, data.length)} of{" "}
                  {data.length} exams
                </div>
                <div>
                  <Button
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                    variant="outlined"
                    size="small"
                  >
                    Previous
                  </Button>
                  <Button
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                    variant="outlined"
                    size="small"
                    sx={{ ml: 2 }}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default AllTeAccesExamsList;
