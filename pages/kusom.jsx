import Image from "next/image";
import React from "react";
import kusomImg from "../public/assets/projects/kusom.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const kusom = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh]  relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={kusomImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-1">
          <h2>Kusom Alumni System</h2>
          <h3>Django /MySQL / HTML / CSS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <div style={{ textAlign: "justify" }}>
            <p style={{ paddingBottom: "5px" }}>
              The KUSOM Alumni System project is a software application
              developed for YCO Solutions, specifically designed to meet the
              needs of Kathmandu University School of Management (KUSOM) in
              managing their alumni records and facilitating communication among
              alumni members. The system serves as a central platform for KUSOM
              to engage with their alumni community, post events, and share job
              opportunities.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              One of the key features of the KUSOM Alumni System is its robust
              alumni record management functionality. The system allows KUSOM to
              maintain a comprehensive database of alumni information, including
              their contact details, educational background, employment history,
              and other relevant details. This information enables KUSOM to stay
              connected with their alumni and track their achievements and
              contributions over time.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              Additionally, the system provides a platform for alumni to connect
              with each other and foster a sense of community. Alumni members
              can create profiles, search and connect with fellow alumni, and
              engage in discussions and collaborations. This fosters networking
              opportunities and allows alumni to share their experiences,
              insights, and expertise.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              The KUSOM Alumni System also includes features for event
              management. KUSOM can post upcoming events such as alumni
              reunions, workshops, seminars, and conferences. Alumni members can
              view and RSVP to these events, facilitating their participation
              and enhancing engagement between KUSOM and its alumni community.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              Furthermore, the system incorporates a job posting module, where
              KUSOM can share job opportunities targeted towards their alumni.
              Alumni members can access and apply for these job openings,
              leveraging the network and resources provided by KUSOM.
            </p>
            <p style={{ paddingBottom: "5px" }}>
              Overall, the KUSOM Alumni System project developed by YCO
              Solutions serves as a comprehensive and user-friendly platform for
              KUSOM to manage their alumni records, facilitate alumni
              communication and networking, and provide valuable resources and
              opportunities to their alumni community.
            </p>
          </div>
          <button className="px-8 py-2 mt-4 mr-8">
            <a href="http://kusomalumni.org/">Demo</a>
          </button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="font-semibold text-center py-4">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Django
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> MySQL
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> HTML
              </p>
              <p className="text-gray-600 py-2  flex items-center">
                <RiRadioButtonFill className="pr-1" /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default kusom;
