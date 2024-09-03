"use client";
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import axios from "axios";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const AllComments = ({ examData }) => {
  const router = useRouter();
  const [comments, setComments] = useState({
    comments: [],
  });
  const [userIP, setUserIP] = useState();
  const [showMore, setShowMore] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${Base_URL}/v1/exam_comments/${examData?.exam_perma}?page=${1}`,
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );

      setComments({
        total_pages: response.data.total_pages,
        current_page: response.data.current_page,
        comments: response.data.comments,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await fetch("/api/get-client-ip");
        const data = await response.json();
        setUserIP(data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    fetchIp();
  }, [examData]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const decodeHtmlEntities = (text) => {
    return text
      .replace(/&amp;/g, "&")
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&nbsp;/g, " ")
      .replace(/&iexcl;/g, "¡")
      .replace(/&cent;/g, "¢")
      .replace(/&pound;/g, "£")
      .replace(/&curren;/g, "¤")
      .replace(/&yen;/g, "¥")
      .replace(/&brvbar;/g, "¦")
      .replace(/&sect;/g, "§")
      .replace(/&uml;/g, "¨")
      .replace(/&copy;/g, "©")
      .replace(/&ordf;/g, "ª")
      .replace(/&laquo;/g, "«")
      .replace(/&not;/g, "¬")
      .replace(/&shy;/g, "­")
      .replace(/&reg;/g, "®")
      .replace(/&macr;/g, "¯")
      .replace(/&deg;/g, "°")
      .replace(/&plusmn;/g, "±")
      .replace(/&sup2;/g, "²")
      .replace(/&sup3;/g, "³")
      .replace(/&acute;/g, "´")
      .replace(/&micro;/g, "µ")
      .replace(/&para;/g, "¶")
      .replace(/&middot;/g, "·")
      .replace(/&cedil;/g, "¸")
      .replace(/&sup1;/g, "¹")
      .replace(/&ordm;/g, "º")
      .replace(/&raquo;/g, "»")
      .replace(/&frac14;/g, "¼")
      .replace(/&frac12;/g, "½")
      .replace(/&frac34;/g, "¾")
      .replace(/&iquest;/g, "¿")
      .replace(/&Agrave;/g, "À")
      .replace(/&Aacute;/g, "Á")
      .replace(/&Acirc;/g, "Â")
      .replace(/&Atilde;/g, "Ã")
      .replace(/&Auml;/g, "Ä")
      .replace(/&Aring;/g, "Å")
      .replace(/&AElig;/g, "Æ")
      .replace(/&Ccedil;/g, "Ç")
      .replace(/&Egrave;/g, "È")
      .replace(/&Eacute;/g, "É")
      .replace(/&Ecirc;/g, "Ê")
      .replace(/&Euml;/g, "Ë")
      .replace(/&Igrave;/g, "Ì")
      .replace(/&Iacute;/g, "Í")
      .replace(/&Icirc;/g, "Î")
      .replace(/&Iuml;/g, "Ï")
      .replace(/&ETH;/g, "Ð")
      .replace(/&Ntilde;/g, "Ñ")
      .replace(/&Ograve;/g, "Ò")
      .replace(/&Oacute;/g, "Ó")
      .replace(/&Ocirc;/g, "Ô")
      .replace(/&Otilde;/g, "Õ")
      .replace(/&Ouml;/g, "Ö")
      .replace(/&times;/g, "×")
      .replace(/&Oslash;/g, "Ø")
      .replace(/&Ugrave;/g, "Ù")
      .replace(/&Uacute;/g, "Ú")
      .replace(/&Ucirc;/g, "Û")
      .replace(/&Uuml;/g, "Ü")
      .replace(/&Yacute;/g, "Ý")
      .replace(/&THORN;/g, "Þ")
      .replace(/&szlig;/g, "ß")
      .replace(/&agrave;/g, "à")
      .replace(/&aacute;/g, "á")
      .replace(/&acirc;/g, "â")
      .replace(/&atilde;/g, "ã")
      .replace(/&auml;/g, "ä")
      .replace(/&aring;/g, "å")
      .replace(/&aelig;/g, "æ")
      .replace(/&ccedil;/g, "ç")
      .replace(/&egrave;/g, "è")
      .replace(/&eacute;/g, "é")
      .replace(/&ecirc;/g, "ê")
      .replace(/&euml;/g, "ë")
      .replace(/&igrave;/g, "ì")
      .replace(/&iacute;/g, "í")
      .replace(/&icirc;/g, "î")
      .replace(/&iuml;/g, "ï")
      .replace(/&eth;/g, "ð")
      .replace(/&ntilde;/g, "ñ")
      .replace(/&ograve;/g, "ò")
      .replace(/&oacute;/g, "ó")
      .replace(/&ocirc;/g, "ô")
      .replace(/&otilde;/g, "õ")
      .replace(/&ouml;/g, "ö")
      .replace(/&divide;/g, "÷")
      .replace(/&oslash;/g, "ø")
      .replace(/&ugrave;/g, "ù")
      .replace(/&uacute;/g, "ú")
      .replace(/&ucirc;/g, "û")
      .replace(/&uuml;/g, "ü")
      .replace(/&yacute;/g, "ý")
      .replace(/&thorn;/g, "þ")
      .replace(/&yuml;/g, "ÿ");
  };

  return (
    <section className="bg-blueGray-100 bg-gray-50 overflow-hidden">
      <div className="container px-12 mx-auto">
        <div className="flex flex-wrap -mx-2 mb-14">
          <div className="w-full xl:w-3/5 px-2 mb-4 xl:mb-0"></div>
          <div className="w-full md:w-1/2 xl:w-1/5 px-2 mb-4 md:mb-0"></div>
          <div className="w-full md:w-1/2 xl:w-1/5 px-2"></div>
        </div>
        <a
          className="inline-block mb-14 text-xl font-heading font-medium underline hover:text-darkBlueGray-700"
          href="#"
        >
          Recent Comments
        </a>
        {comments?.comments?.slice(0, 10).map((item, index) => {
          const { date, name, country, comment } = item;
          const decodedComment = decodeHtmlEntities(comment);
          return (
            <div
              key={index}
              className="my-4 shadow-lg rounded-tr-3xl rounded-b-3xl overflow-hidden"
            >
              <div className=" px-4 md:px-8 bg-blue-100 bg-opacity-40">
                <div className="flex  py-3 items-center">
                  <img
                    className="mr-6 h-12 rounded-full"
                    src="/img/user.jpg"
                    alt=""
                  />
                  <h4 className="w-full md:w-auto text-xl font-heading font-medium">
                    {name}{" "}
                  </h4>
                  <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200"></div>
                  <span className="mr-4 text-xl font-heading font-medium text-gray-400">
                    {country}
                  </span>
                </div>
              </div>
              <div className="px-4 overflow-hidden md:px-8 py-4 bg-white">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-10/12 mb-6 md:mb-0">
                    <p className="max-w-7xl text-darkBlueGray-400 leading-loose">
                      {decodedComment}
                    </p>
                  </div>
                  <div className="w-full md:w-2/12 text-right">
                    <p className="mb-8 text-sm text-gray-300">
                      {" -- "} {moment(date).format("LL")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="text-right my-3">
          <button className="inline-block w-full md:w-auto h-full py-2 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
            See all
          </button>
        </div>
      </div>
    </section>
  );
};

export default AllComments;
