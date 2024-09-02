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
  Grid,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";

const UnlimitedTeAccessPage = ({ params }) => {
  const router = useRouter();

  const [unlimitedTeAccess, setUnlimitedTeAccess] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [activationKeys, setActivationKeys] = useState([]);
  const [noKeysMessage, setNoKeysMessage] = useState(""); // New state for handling no keys
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Snackbar state
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
        `${Base_URL}/v1/account/te-unlimited-access/${params.id_one}/${params.id_two}/${letter}`,
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

  const handleGetKey = async (exam) => {
    setDialogOpen(true);
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    try {
      const response = await axios.get(
        `${Base_URL}${exam.activation_keys_url}`,
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${loginResponse._token}`,
          },
        }
      );
      if (response.data.length === 0) {
        setNoKeysMessage(
          "For Activation Key. Must have to download TEST ENGINE file first."
        );
      } else {
        setNoKeysMessage(""); // Clear message if keys are found
        setActivationKeys(response.data);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setActivationKeys([]);
    setNoKeysMessage(""); // Clear message when dialog is closed
  };

  const handleCopyToClipboard = (keys) => {
    navigator.clipboard.writeText(keys);
    setSnackbarOpen(true); // Show snackbar on copy
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
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

      <Dialog fullWidth open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle className="text-blue-500">
          Activation & Purchase Keys
        </DialogTitle>
        <DialogContent>
          {noKeysMessage && (
            <Typography variant="body1" color="error" mb={2}>
              {noKeysMessage}
            </Typography>
          )}
          {activationKeys[0]?.purchase_key ? (
            activationKeys?.map((key, index) => (
              <Box key={index} width="100%" mb={2} mt={3}>
                <TextField
                  variant="outlined"
                  size="medium"
                  fullWidth
                  value={`${key.purchase_key}|${key.activation_key}`}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() =>
                            handleCopyToClipboard(
                              `${key.purchase_key}|${key.activation_key}`
                            )
                          }
                        >
                          <Icon icon="akar-icons:copy" />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            ))
          ) : (
            <div className="text-red-500 text-sm font-bold">
              For Activation Key. Must have to download TEST ENGINE file first.
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <button
            className="py-1 text-white font-bold rounded-md px-2 bg-red-500"
            onClick={handleCloseDialog}
          >
            Close
          </button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for copy confirmation */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Key copied to clipboard!
        </Alert>
      </Snackbar>

      <section className="px-4 bg-white">
        <div className="container mx-auto">
          <div className="mt-6 text-3xl font-bold text-blue-500 border-b pb-8">
            <h2>Unlimited Test Engine Access</h2>
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
                <div
                  variant="body1"
                  className="pb-4 text-gray-500 font-semibold max-w-xl"
                >
                  You have unlimited access to Test Engine Dumps files.
                </div>
                <div
                  variant="body1"
                  className="pb-4 text-red-500 font-semibold max-w-xl mt-2"
                >
                  You have downloaded: {unlimitedTeAccess?.total_downloaded}
                </div>
                <div
                  variant="body1"
                  className="pb-4 text-blue-500 font-semibold max-w-xl mt-2"
                >
                  Monthly Download Limit: {unlimitedTeAccess?.total_limit}
                </div>
                <div
                  variant="body1"
                  className=" text-red-500 font-semibold max-w-xl mt-2 mb-6"
                >
                  (Each download of a different or the same Test Engine file
                  will affect the download limit)
                </div>
                <div
                  variant="body1"
                  className=" text-red-500 font-semibold max-w-xl mt-2 mb-6"
                >
                  (For Activation Key. Must have to download TEST ENGINE file
                  first.)
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

      {unlimitedTeAccess?.purchase_valid &&
        !unlimitedTeAccess?.purchase_approved && (
          <section className="p-6 container mx-auto bg-white">
            <div className="text-center">
              <div role="alert">
                <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                  Unlimited Test Engine Access!
                </div>
                <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                  <p>
                    Your Unlimited Test Engine access is not approved yet. We
                    are checking your payment so this might take a few hours.
                    Please contact our sales chat support or send an email to{" "}
                    <Link
                      href="mailto:sales@examprince.com"
                      className="text-blue-600"
                    >
                      sales@examprince.com
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
                              minHeight: "235px",
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
                            <div>
                              <div className="text-red-500 w-full flex mb-3 border-b pb-1 justify-between font-semibold mt-2">
                                <div className="text-gray-500">Questions</div>
                                <div>{exam.exam_questions}</div>
                              </div>
                              <Link
                                href={`https://certsgang.com${exam.download_url}`}
                                className="flex w-full items-center px-4 py-2 justify-center font-medium text-sm text-white bg-green-500 hover:bg-green-600 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1.4em"
                                  height="1.4em"
                                  className="mr-2"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493zh9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1z"
                                  />
                                </svg>
                                Download Test Engine
                              </Link>
                              <button
                                onClick={() => handleGetKey(exam)}
                                className="flex w-full items-center px-4 py-2 justify-center mt-3 font-medium text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="1.4em"
                                  height="1.4em"
                                  className="mr-2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M9.41 20H6.5c-1.5 0-2.82-.5-3.89-1.57C1.54 17.38 1 16.09 1 14.58q0-1.95 1.17-3.48a5.25 5.25 0 0 1 3.08-1.95c.42-1.53 1.25-2.77 2.5-3.72C9 4.5 10.42 4 12 4c1.95 0 3.61.68 4.96 2.04C18.32 7.39 19 9.05 19 11c1.15.13 2.11.63 2.86 1.5c.64.73 1 1.56 1.1 2.5H18a5.01 5.01 0 0 0-4-2c-2.8 0-5 2.2-5 5c0 .72.15 1.39.41 2M23 17v2h-2v2h-2v-2h-2.2c-.4 1.2-1.5 2-2.8 2c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.3 0 2.4.8 2.8 2zm-8 1c0-.5-.4-1-1-1s-1 .5-1 1s.4 1 1 1s1-.5 1-1"
                                  />
                                </svg>
                                Get Activation Key
                              </button>
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
                    {Math.min(
                      startIndex + itemsPerPage,
                      unlimitedTeAccess?.vendors.length
                    )}{" "}
                    of {unlimitedTeAccess?.vendors.length} exams
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
      )}
    </>
  );
};

export default withAuth(UnlimitedTeAccessPage);
