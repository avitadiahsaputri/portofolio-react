// import React from 'react'
import Header from "../componets/Header/Header";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="py-10 bg-slate-900 pt-32  pb-10 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-3 px-10">Contact</h2>
          <div className="relative px-5 sm:px-10 md:px-20 lg:px-28">
            <h4 className="text-xl mb-3 px-1">
              Get in touch with me anytime, through social media, e-mail, or
              phone number. Just a friendly reminder that the information
              provided here is for <b>business purposes only</b>. If you have
              any questions, feel free to chat with me directly on my social
              media. I appreciate your understanding in using this responsibly.
            </h4>
            <h3 className="text-xl font-bold px-0 py-2">Contact Details</h3>
            <div className="bg-transparent border-l-2 px-10 border-gray-500">
              <table className="w-2/3 sm:w-1/2 md:w-1/3 border border-gray-800 text-sm sm:text-base">
                <colgroup>
                  <col className="contact-col" />
                  <col className="detail-col" />
                </colgroup>
                <tbody>
                  <tr>
                    <th className="py-2 px-4 font-semibold border-b border-gray-800">
                      Contact
                    </th>
                    <th className="py-2 px-4 font-semibold border-b border-gray-800">
                      Details
                    </th>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-800">
                      Address
                    </td>
                    <td className="py-2 px-4 border-b border-gray-800">
                      Bandung, Indonesia
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b border-gray-800">
                      E-mail
                    </td>
                    <td className="py-2 px-4 border-b border-gray-800">
                      <a
                        className="text-blue-600 inline-block"
                        href="mailto:avitadiah4@gmail.com"
                      >
                        avitadiah4@gmail.com
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="px-0 mt-4">
                If you need any further information, such as my phone number,
                please do not hesitate to send me an email first.
              </p>
            </div>
          </div>
          <div className="relative px-5 sm:px-10 md:px-20 lg:px-28">
            <h3 className="text-xl font-bold px-0 py-3">Social Media</h3>
            <div className="bg-transparent border-l-2 px-10 border-gray-500">
              <div className="overflow-x-auto">
                <table className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 border border-gray-800 text-sm sm:text-base">
                  <colgroup>
                    <col className="contact-col" />
                    <col className="detail-col" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th className="py-2 px-4 font-semibold border-b border-gray-800">
                        Social media
                      </th>
                      <th className="py-2 px-4 font-semibold border-b border-gray-800">
                        URL
                      </th>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-800">
                        Linkedin
                      </td>
                      <td className="py-2 px-4 border-b border-gray-800">
                        <div className="whitespace-nowrap overflow-x-auto">
                          <a
                            className="text-blue-600 inline-block"
                            href="https://www.linkedin.com/in/avitadiah28/"
                          >
                            https://www.linkedin.com/in/avitadiah28/
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-800">
                        Github
                      </td>
                      <td className="py-2 px-4 border-b border-gray-800">
                        <div className="whitespace-nowrap overflow-x-auto">
                          <a
                            className="text-blue-600 inline-block"
                            href="https://github.com/avitadiahsaputri"
                          >
                            https://github.com/avitadiahsaputri
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border-b border-gray-800">
                        Instagram
                      </td>
                      <td className="py-2 px-4 border-b border-gray-800">
                        <div className="whitespace-nowrap overflow-x-auto">
                          <a
                            className="text-blue-600 inline-block"
                            href="https://www.instagram.com/ativa_28/"
                          >
                            https://www.instagram.com/ativa_28/
                          </a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
