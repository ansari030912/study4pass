"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const HomeCerts = () => {
  const exams = [
    {
      name: "Developer Associate",
      image: "2",
      perma: "aws-certified-developer-associate-certification",
      vendor: "AWS",
      vendorPerma: "aws",
    },
    {
      name: "Solution Architect Associate",
      perma: "aws-certified-solutions-architect-associate-certification",
      image: "3",
      vendor: "AWS",
      vendorPerma: "aws",
    },
    {
      name: "Solution Architect Professional",
      perma: "aws-certified-solutions-architect-professional-certification",
      image: "6",
      vendor: "AWS",
      vendorPerma: "aws",
    },

    {
      name: "SysOps Administrator - Associate",
      perma: "aws-certified-sysops-administrator-associate-certification",
      image: "7",
      vendor: "AWS",
      vendorPerma: "aws",
    },
    {
      name: "CCNA",
      perma: "ccna",
      image: "11",
      vendor: "Cisco",
      vendorPerma: "cisco",
    },
    {
      name: "CCNP - Enterprise",
      perma: "ccnp-enterprise",
      image: "12",
      vendor: "Cisco",
      vendorPerma: "cisco",
    },
    {
      name: "CCIE - Enterprise Wireless",
      perma: "ccna-enterprise-wireless",
      image: "13",
      vendor: "Cisco",
      vendorPerma: "cisco",
    },

    {
      name: "Azure Solutions Architect Expert",
      perma: "azure-solutions-architect-expert",
      image: "14",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "Azure Fundamentals",
      perma: "azure-fundamentals",
      image: "15",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "Enterprise Administrator - Expert",
      perma: "Microsoft-365-certified-enterprise-administrator-expert",
      image: "16",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "Azure Administrator - Associate",
      perma: "azure-administrator-associate",
      image: "17",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSA Windows Server 2016",
      perma: "mcsa-windows-server-2016",
      image: "18",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSE",
      perma: "mcse-Microsoft-certified-solutions-expert",
      image: "20",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSA Web Applications",
      perma: "mcsa-web-applications",
      image: "21",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSA SQL 2016 Database Administration",
      perma: "mcsa-sql-2016-database-administration",
      image: "22",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSE Core Infrastructure",
      perma: "mcse-core-infrastructure",
      image: "23",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSE Productivity Solutions",
      perma: "mcse-productivity-solutions-expert",
      image: "24",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "MCSE Data Management and Analytics",
      perma: "mcse-data-management-and-analytics",
      image: "25",
      vendor: "Microsoft",
      vendorPerma: "microsoft",
    },
    {
      name: "CompTIA CASP",
      perma: "cmcse-core-infrastructure",
      image: "26",
      vendor: "CompTIA",
      vendorPerma: "comptia",
    },
    {
      name: "CompTIA A+",
      perma: "comptia-a-plus-certification",
      image: "27",
      vendor: "CompTIA",
      vendorPerma: "comptia",
    },
    {
      name: "CompTIA Linux+",
      perma: "comptia-linux-plus-certification",
      image: "28",
      vendor: "CompTIA",
      vendorPerma: "comptia",
    },
    {
      name: "CompTIA Network+",
      perma: "comptia-network",
      image: "29",
      vendor: "CompTIA",
      vendorPerma: "comptia",
    },
    {
      name: "CompTIA Security+",
      perma: "comptia-security",
      image: "30",
      vendor: "CompTIA",
      vendorPerma: "comptia",
    },

    {
      name: "CCA-V Professional Virtualization",
      perma: "cca-v",
      image: "32",
      vendor: "Citrix",
      vendorPerma: "citrix",
    },

    {
      name: "CCP-V Expert Virtualization",
      perma: "ccp-v-certification",
      image: "34",
      vendor: "citrix",
      vendorPerma: "citrix",
    },
    {
      name: "CISM",
      perma: "cism-certification",
      image: "35",
      vendor: "Isaca",
      vendorPerma: "isaca",
    },
    {
      name: "CISSP",
      perma: "cissp-certification",
      image: "37",
      vendor: "Isc",
      vendorPerma: "isc",
    },
    {
      name: "Google Cloud Certified",
      perma: "google-cloud-certified",
      image: "38",
      vendor: "Google",
      vendorPerma: "google",
    },
    {
      name: "Checkpoint CCSA R80",
      perma: "ccsa-r80",
      image: "39",
      vendor: "Checkpoint",
      vendorPerma: "checkpoint",
    },
    {
      name: "CCSE R80",
      perma: "ccse-update",
      image: "40",
      vendor: "Checkpoint",
      vendorPerma: "checkpoint",
    },
    {
      name: "CEH Certified Ethical Hacker",
      perma: "ceh-certification",
      image: "41",
      vendor: "Eccouncil",
      vendorPerma: "eccouncil",
    },
    {
      name: "LPIC Level 1",
      perma: "lpic-level-1",
      image: "42",
      vendor: "Lpi",
      vendorPerma: "lpi",
    },
    {
      name: "LPIC Level 2",
      perma: "lpic-level-2-certification",
      image: "43",
      vendor: "Lpi",
      vendorPerma: "lpi",
    },
    {
      name: "LPIC Level 3",
      perma: "lpic-level-3-certification",
      image: "44",
      vendor: "Lpi",
      vendorPerma: "lpi",
    },
    {
      name: "PCNSE",
      perma: "pcnse",
      image: "45",
      vendor: "Poloalto Networks",
      vendorPerma: "poloalto-networks",
    },
    {
      name: "JNCIA Junos",
      perma: "jncia-junos-certification",
      image: "46",
      vendor: "Juniper",
      vendorPerma: "juniper",
    },
    {
      name: "TOGAF 9 Certified",
      perma: "togaf-9-certified-certification",
      image: "47",
      vendor: "The Open Group",
      vendorPerma: "the-open-group",
    },
    {
      name: "VCAP6-DCV Design",
      perma: "vcap6-dcv-design",
      image: "48",
      vendor: "VMWare",
      vendorPerma: "vmware",
    },
    {
      name: "VCP6.5-DCV",
      perma: "vcp6-5-dcv",
      image: "49",
      vendor: "VMWare",
      vendorPerma: "vmware",
    },
    {
      name: "Project Management Professional",
      perma: "pmp-certification",
      image: "9",
      vendor: "PMP",
      vendorPerma: "pmp",
    },
    {
      name: "ACP",
      perma: "pmi-acp",
      image: "10",
      vendor: "PMP",
      vendorPerma: "pmp",
    },
  ];

  const vendors = [...new Set(exams.map((exam) => exam.vendor))];

  const primaryVendors = ["Microsoft", "Cisco", "AWS"];
  const otherVendors = vendors.filter(
    (vendor) => !primaryVendors.includes(vendor)
  );

  const [selectedVendor, setSelectedVendor] = useState(primaryVendors[0]);

  const filteredExams = exams.filter((exam) => exam.vendor === selectedVendor);

  return (
    <div>
      <section className="py-6 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="lg:flex -mx-4 mb-12">
            <div className="flex">
              {primaryVendors.map((vendor, index) => (
                <div key={index} className="px-10 py-2">
                  <button
                    className={`md:relative font-bold flex items-center justify-center ${
                      selectedVendor === vendor
                        ? "text-blue-500 underline-offset-2 underline"
                        : "text-gray-500"
                    }`}
                    onClick={() => {
                      setSelectedVendor(vendor);
                      //   setSelectedVendor("");
                    }}
                  >
                    <span className="inline-block text-lg uppercase font-heading">
                      {vendor}
                    </span>
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full md:flex md:justify-end px-10">
              <select
                className="font-bold text-gray-500 border-2 px-2 py-2 border-gray-400"
                value={
                  ["AWS", "Cisco", "Microsoft"].includes(selectedVendor)
                    ? ""
                    : selectedVendor
                }
                onChange={(e) => setSelectedVendor(e.target.value)}
              >
                <option disabled value={""}>
                  Select --
                </option>
                {otherVendors.map((vendor, index) => (
                  <option
                    style={{ borderRadius: "0px" }}
                    key={index}
                    value={vendor}
                  >
                    {vendor}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr className="mb-4 pt-8 -py-8 -mt-8" />
          <div className="relative">
            <div className="relative flex flex-wrap -mx-2">
              {filteredExams.map((exam, index) => (
                <div
                  key={index}
                  className="w-full md:w-6/12 lg:w-3/12 px-4 mb-8"
                >
                  <Link
                    className="block p-4 border bg-gray-50 rounded-lg"
                    href={`/study-meterial-certification/${exam?.vendorPerma}/${exam?.perma}`}
                  >
                    <div className="flex justify-between">
                      <span className="flex items-center">
                        <img
                          height={"70px"}
                          width={"70px"}
                          src={`/certs/${exam.image}.png`}
                          alt=""
                        />
                        <h1 className="text-xl ml-3 text-gray-700 font-semibold">
                          {exam.name}
                        </h1>
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCerts;
