/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const page = async () => {
  const bannerResponec = await fetch(`${Base_URL}/v1/banner`, {
    headers: {
      "x-api-key": X_API_Key,
    },
  });

  const imageUrl = await bannerResponec.json();

  return (
    <>
      <section className="pt-6 px-6 bg-white">
        <Link href={imageUrl?.banner_link} className="flex justify-center mb-4">
          <img src={imageUrl?.banner_src} alt={imageUrl?.banner_website} />
        </Link>
      </section>
      <section
        className="py-4 bg-white"
        style={{
          backgroundImage: `url('/pattern-white.png')`,
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -mx-4">
            <div className="w-full md:w-12/12 px-4">
              <div className="inline-block py-1 px-3 mb-6 text-xs leading-5 text-blue-500 font-medium uppercase bg-blue-100 rounded-full shadow-sm">
                Study4Pass.com Terms and Conditions
              </div>
              <h2 className="mb-4 text-2xl md:text-3xl  leading-tight text-gray-800 font-bold tracking-tighter">
                Important Information Regarding Study4Pass.com Terms And
                Conditions
              </h2>

              <p className="mb-4 text-lg md:text-xl font-medium text-gray-500">
                Exams Questions Provided By IT Professional.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:flex-1 px-4">
              <p className="mb-4 text-lg font-base text-gray-500">
                Study4Pass.com (referred to as the &quot;Company&quot;,
                &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) operates the
                website https://study4pass.com, including all subsidiary pages
                (collectively referred to as the &quot;Website&quot;). The
                registered office of the Company is located at 171-75 Shelton
                Street, London, United Kingdom, WC2H 9JQ.
              </p>
              <p className="mb-4 text-lg font-base text-gray-500">
                Below are the legal agreements binding between the Company and
                you (referred to as the &quot;User&quot;). Please read these
                Terms carefully as they govern your interaction with the
                Website, including information shared on our social media
                profiles and all products and services accessed through the
                Website. The Terms of Use apply to all kinds of Website usage,
                whether as a registered customer or a guest. The Company
                reserves the right to change these Terms and Conditions without
                prior notice, and you are responsible for regularly reviewing
                them.
              </p>
              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Product Descriptions
              </h3>
              <p className="pb-4 text-lg text-gray-500 border-gray-100">
                The Company strives to provide accurate descriptions of its
                products. However, we do not warrant that product descriptions
                or other content on this site are accurate, complete, reliable,
                current, or error-free. If a product purchased is not as
                described, please contact our support team immediately.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Privacy Policy
              </h3>
              <p className="mb-4 pb-4 text-lg text-gray-500 border-b border-gray-100">
                Please review our Privacy Policy, which is incorporated into
                these Terms and Conditions by reference. By using this site, you
                acknowledge that you have read and understood the Privacy Policy
                in detail.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Copyright and Intellectual Property
              </h3>
              <p className="mb-4 text-lg text-gray-500">
                All content on this site, including text, graphics, logos,
                button icons, images, audio clips, digital downloads, and data
                compilations, is the property of the Company or its content
                suppliers and is protected by domestic and international
                copyright laws. The compilation of all content on this site is
                the exclusive property of the Company. All software used on this
                site is the property of the Company or its software suppliers
                and is also protected by domestic and international copyright
                laws.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                License and Site Access
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                The Company grants you a limited license to access and use this
                site for personal use only. This license does not allow for
                downloading (other than page caching), modifying, reproducing,
                duplicating, copying, or creating derivative works from the site
                or its contents without prior written consent from the Company.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Fraudulent Activity
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                You agree to cooperate fully with the Company in any
                investigation regarding fraudulent or improper activity related
                to the use of this site, including but not limited to fraudulent
                chargebacks and false claims regarding non-receipt of products.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Third-Party Sites
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                This site may include links to Internet sites maintained by
                third parties. The Company does not operate or control any
                information, products, or services offered through these
                third-party sites and is not responsible for examining or
                evaluating these sites. The Company assumes no responsibility or
                liability for any actions, products, or content related to these
                third-party sites.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Indemnification
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                You agree to indemnify and hold the Company and its officers,
                directors, agents, and employees harmless from any claims,
                demands, losses, or costs, including reasonable attorneys fees,
                due to or arising out of your use of this site, your breach of
                these Terms and Conditions, or your violation of any law or
                rights of a third party.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Governing Law and Jurisdiction
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                These Terms and Conditions and your agreement to be bound by
                them are governed by the laws of the United Kingdom, without
                regard to its conflicts of law rules. In the event of any
                dispute relating to these Terms and Conditions or your use of
                this site, you consent to the personal jurisdiction of the U.K.
                and federal courts located within the jurisdiction of the court.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Notices
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                You consent to receive notices from us via e-mail, by mail at
                the addresses included in the contact information you provide to
                the Company, or by posting notices on this site. Notices posted
                on this site shall be considered received 24 hours after
                posting. Notices sent by e-mail shall be considered received
                immediately unless the Company receives notice that the e-mail
                was not delivered. Notices sent by mail shall be considered
                received three business days after mailing.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Waiver
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                The failure of the Company to enforce any provision of these
                Terms and Conditions shall not be construed as a waiver or
                limitation of the Company&apos;s right to enforce and compel
                strict compliance with every provision of these Terms and
                Conditions.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Remedies
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                You acknowledge that violation of these Terms and Conditions
                could cause irreparable harm for which monetary damages may be
                inadequate. Therefore, the Company shall be entitled to seek and
                obtain injunctive relief for any violation of these Terms and
                Conditions without the necessity of posting any bond or surety.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Severability
              </h3>
              <p className="mb-4 text-base md:text-lg text-gray-500">
                If any term or provision of these Terms and Conditions is found
                to be invalid or unenforceable by a court of competent
                jurisdiction, such term or provision shall be deemed modified to
                the extent necessary to make it valid and enforceable. If it
                cannot be modified, it shall be deemed stricken and shall not
                affect the validity or enforceability of the remainder of these
                Terms and Conditions.
              </p>

              <h3 className="mb-4 text-xl md:text-2xl font-bold text-gray-700">
                Entire Agreement
              </h3>
              <p className="mb-4 text-base md:text-lg font-medium text-gray-500">
                These Terms and Conditions constitute the entire agreement
                between you and the Company regarding the subject matter hereof.
                For any inquiries, please contact us at sales@study4pass.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;

export async function generateMetadata() {
  return {
    title: `Study4Pass Terms & Conditions`,
   description: `Study4Pass is a premium provider of Real and Valid Study Meterial of IT certification Exams. Pass your certification exam easily with pdf and test engine dumps in 2024.`,
   robots: {
      index: true,
    },
    alternates: {
      canonical: "https://study4pass.com/terms-and-conditions",
    },
  };
}
