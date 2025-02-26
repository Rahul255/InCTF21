// import React, { useState } from "react";
import styled from "@emotion/styled";
// import ScheduleDay from "./ScheduleDay";

const ScheduleModuleWrap = styled.section`
    
    color: chocolate;
    min-height: 45vh;
    padding: 10vh 2vw;
`;

// const TabSwitcher = styled.div`
//     button {
//         border: none;
//         font-size: 20px;
//         padding: 6px 10px;
//         background: chocolate;
//         color: white;
//         &:focus {
//             outline: none!important;
//         }
//     }
//     .is_active {
//         background: white;
//         color: chocolate;
//     }
// `;

const Schedule = () => {

    // const [activeDay, setActiveDay] = useState(2);

    // const scheduleList = [
    //     {
    //         "date": "09 December 2021",
    //         "title": "December 9",
    //         "events": [
    //             {
    //                 "time": "08:00 - 08:45 IST",
    //                 "title": "Speaker",
    //                 "speakers": [
    //                     {
    //                         "name": "Rahul Manneri",
    //                         "designation": "Speaker",
    //                         "organization": "Amrita",
    //                         "avatar": require('../../images/rahul.jpg').default
    //                     }
    //                 ],
    //             },
        //         {
        //             "time": "08:45 - 09:30 IST",
        //             "title": "Keynote",
        //             "speakers": [
        //                 {
        //                     "name": "Rinki Sethi",
        //                     "designation": "Vice President & CISO",
        //                     "organization": "Twitter",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 }
        //             ],
        //         },
        //         // {
        //         //     "time": "09:30 - 10:30 IST",
        //         //     "title": "Inaugural Session",
        //         //     "speakers": [
                    
        //         //         {
        //         //             "name": "Krishnashree Achuthan",
        //         //             "designation": "Dean PG Programs",
        //         //             "organization": "Amrita University",
        //         //             "avatar": require('../../images/rahul.jpg').default
        //         //         },
        //         //         {
        //         //             "name": "Eric Falt", 
        //         //             "designation": "Director & UNESCO Representative",
        //         //             "organization": "Bhutan, India, Maldives and Sri Lanka",
        //         //             "avatar": require('../../images/rahul.jpg').default
        //         //         },
        //         //         {
        //         //             "name": "Meenakshi Lekhi",
        //         //             "designation": "Member of Parliament",
        //         //             "organization": "Lok Sabha, Delhi",
        //         //             "avatar": require('../../images/rahul.jpg').default
        //         //         },
        //         //         {
        //         //             "name": "Swamini Krishnamrita Prana",
        //         //             "designation": "",
        //         //             "organization": "Mata Amritanandamayi Math",
        //         //             "avatar": require('../../images/rahul.jpg').default
        //         //         },
        //         //         {
        //         //             "name": "Sreepriya Chalakkal",
        //         //             "designation": "Security Analyst",
        //         //             "organization": "Siemens",
        //         //             "avatar": require('../../images/rahul.jpg').default
        //         //         },
        //         //     ],
        //         // },
        //         {
        //             "time": "11:00 - 11:30 IST",
        //             "title": "From Technologist to Board Room, a Cybersecurity Journey",
        //             "speakers": [
        //                 {
        //                     "name": "Sanju Misra",
        //                     "designation": "VP & CISO",
        //                     "organization": "Alnylam Pharmaceuticals",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 }
        //             ],
        //         },
        //         {
        //             "time": "11:30 - 12:15 IST",
        //             "title": "Keynote",
        //             "speakers": [
        //                 {
        //                     "name": "Ratnaboli Ghorai Dinda",
        //                     "designation": "Deputy Director General(Scientist-G)",
        //                     "organization": "National Informatics Centre",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 }
        //             ],
        //         },
        //        {
        //             "time": "15:00 - 16:00 IST",
        //             "title": "Understanding Bluetooth Security",
        //             "speakers": [
        //                 {
        //                     "name": "Renu D S",
        //                     "designation": "Penetration Test Engineer",
        //                     "organization": "Schneider-Electric",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
                        
        //             ],
        //         },
        //         {
        //             "time": "15:00 - 16:00 IST",
        //             "title": "Cybersecurity Roadmap at Amrita University",
        //             "speakers": [
        //                 {
        //                     "name": "Krishnashree Achuthan",
        //                     "designation": "Dean PG Programs",
        //                     "organization": "Amrita Vishwa Vidyapeetham",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 }
        //             ],
        //         },
        //         {
        //             "time": "16:30 - 17:00 IST",
        //             "title": "Quantum safe solutions for Cybersecurity",
        //             "speakers": [
        //                 {
        //                     "name": "Anindita Banerjee",
        //                     "designation": "Quantum Research Head and VP",
        //                     "organization": "QuNu Labs Pvt Ltd.",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
        //             ]
        //         },  
        //         {
        //             "time": "17:00 - 17:30 IST",
        //             "title": "CyberSecurity in OT Environment",
        //             "speakers": [
        //                 {
        //                     "name": "Luisa Montealegre",
        //                     "designation": "OT Cybersecurity Specialist",
        //                     "organization": "Siemens",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
                        
        //             ],
        //         },  
        //         {
        //             "time": "20:00 - 20:30 IST",
        //             "title": "Internet of Drones Security",
        //             "speakers": [
        //                 {
        //                     "name": "Mehrnoosh Monshizadeh",
        //                     "designation": "Cybersecurity Specialist",
        //                     "organization": "Nokia Bell Labs",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
                        
        //             ],
        //         },
        //         {
        //             "time": "20:30 - 21:30 IST",
        //             "title": "Try your hand at Machine Learning for Security",
        //             "speakers": [
        //                 {
        //                     "name": "Bhavna Soman",
        //                     "designation": "ML Security Researcher",
        //                     "organization": "Microsoft",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
                        
        //             ],
        //         },
        //         {
        //             "time": "21:30 - 22:30 IST",
        //             "title": "Threat Modeling",
        //             "speakers": [
        //                 {
        //                     "name": "Sung Lee",
        //                     "designation": "Staff Security Architect",
        //                     "organization": "VMware",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 },
                        
        //             ],
                // },    
        //     ]
        // },
        // {
            // "date": "10 December 2021",
            // "title": "December 10",
            // "events": [
            //     {
            //         "time": "08:00 - 08:30 IST",
            //         "title": "Speaker",
            //         "speakers": [
            //             {
            //                 "name": "Rahul Manneri",
            //                 "designation": "Speaker",
            //                 "organization": " Amrita",
            //                 "avatar": require('../../images/rahul.jpg').default
            //             }
            //         ],
            //     },
                // {
                //     "time": "08:30 - 09:00 IST",
                //     "title": "Achieving Excellence in Cybersecurity",
                //     "speakers": [
                //         {
                //             "name": "Asha Poluru",
                //             "designation": "Head HR",
                //             "organization": " Sophos, India",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "09:00 - 09:30 IST",
                //     "title": "Decoding the Cybersecurity Career Path",
                //     "speakers": [
                //         {
                //             "name": "Sabna Sainudeen",
                //             "designation": "President",
                //             "organization": " (Women in CyberSecurity) WiCyS India",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "09:30 - 10:30 IST",
                //     "title": "CTFs and Cybersecurity Reasearch",
                //     "speakers": [
                //         {
                //             "name": "Tiffany Bao",
                //             "designation": "Assistant Professor",
                //             "organization": " Arizona State University",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "10:30 - 11:00 IST",
                //     "title": "Cyber Event - How to treat it right?",
                //     "speakers": [
                //         {
                //             "name": "Liora Itkin",
                //             "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
                //             "organization": " Israel Ministry of Defense",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                
                // {
                //     "time": "11:30 - 13:00 IST",
                //     "title": "Panel Discussion: Cybercrime and Pathways Ahead",
                //     "speakers": [
                //         {
                //             "name": "Liora Itkin",
                //             "designation": "Head of Cybersecurity Department (of SOC and DFIR teams)",
                //             "organization": " Israel Ministry of Defense",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Evelyn Kilel",
                //             "designation": "Co-Founder",
                //             "organization": "SheHacksKe",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Anyesh Roy",
                //             "designation": "IPS - DCP",
                //             "organization": "Cyber Crime, Delhi Police",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Dave Chatterjee",
                //             "designation": "Associate Professor",
                //             "organization": "The University of Georgia",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Krishnashree Achuthan",
                //             "designation": "Dean PG Programs",
                //             "organization": "Amrita Vishwa Vidyapeetham",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //     ],
                //     },
                    
                    
                // {
                //     "time": "15:00 - 16:00 IST",
                //     "title": "Recon to Software Supply Chain Attack",
                //     "speakers": [
                //         {
                //             "name": "Komal Armarkar",
                //             "designation": "Security Analyst",
                //             "organization": "CrowdStrike",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "16:00 - 16:45 IST",
                //     "title": "Kick-Start to Secure Software Development",
                //     "speakers": [
                //         {
                //             "name": "Arya M Sankar",
                //             "designation": "Security Researcher",
                //             "organization": "Siemens",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // // {
                // //     "time": "16:45 - 17:30 IST",
                // //     "title": "Techniques and tooling with FLARE-ON'20",
                // //     "speakers": [
                // //         {
                // //             "name": "Sreelakshmi Panangatt",
                // //             "designation": "Security Engineer",
                // //             "organization": "VMware",
                // //             "avatar": require('../../images/speakers/sreelakshmi.JPG')
                // //         }
                // //     ],
                // // },
                // {
                //     "time": "20.30 - 21.30 IST",
                //     "title": "Privacy preserving Data Analysis",
                //     "speakers": [
                //         {
                //             "name": "Mina Sheikhalishahi",
                //             "designation": "Security Researcher",
                //             "organization": "Eindhoven University of Technology",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "21:30 - 22:30 IST",
                //     "title": "Cybersecurity of Embedded Networks in Heavy Vehicles",
                //     "speakers": [
                //         {
                //             "name": "Indrakshi Ray",
                //             "designation": "Professor, Computer Science Department",
                //             "organization": "Colorado State University",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
        //     ],
        // },
        // {
        //     "date": "11 December 2021",
        //     "title": "December 11",
        //     "events": [
        //     {
        //             "time": "08:30 - 09:30 IST",
        //             "title": "Speech",
        //             "speakers": [
        //                 {
        //                     "name": "Rahul Manneri",
        //                     "designation": "Researcher",
        //                     "organization": "Amrita ",
        //                     "avatar": require('../../images/rahul.jpg').default
        //                 }
        //             ],
        //         },
                // {
                //     "time": "09:30 - 09:45 IST",
                //     "title": "A Few Thoughts on Authenticated Encryption",
                //     "speakers": [
                //         {
                //             "name": "Lakshmy K.V.",
                //             "designation": "Assistant Professor",
                //             "organization": "Amrita University",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "09:45 - 10:00 IST",
                //     "title": "Covert delivery mechanisms",
                //     "speakers": [
                //         {
                //             "name": "Amritha P.P.",
                //             "designation": "Assistant Professor",
                //             "organization": "Amrita University",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //     ],
                // },
                // {
                //     "time": "10:00 - 10:45 IST",
                //     "title": "Interactive Session",
                //     "speakers": [
                //         {
                //             "name": "Neeta Verma",
                //             "designation": "Director General",
                //             "organization": "National Informatics Centre",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Sundari Nanda",
                //             "designation": "CVO & Special Commissioner(Vigilance)",
                //             "organization": "Delhi Police",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //     ],
                // },
                // {
                //     "time": "10:45 - 11:15 IST",
                //     "title": "Preventing cyber attacks together - The Power of Collaboration",
                //     "speakers": [
                //         {
                //             "name": "Karine Ben-Simhon",
                //             "designation": "VP, Cyber Intelligence Center and TLV Innovation",
                //             "organization": "Citi, Israel",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },  
                //     ],
                // },
                // {
                //     "time": "11:30 - 12:15 IST",
                //     "title": "Keynote",
                //     "speakers": [
                //         {
                //             "name": "Rama Vedashree ",
                //             "designation": "CEO",
                //             "organization": "Data Security Council of India",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "12:15 - 12:45 IST",
                //     "title": "Secure Software",
                //     "speakers": [
                //         {
                //             "name": "Sarvjeet Kaur",
                //             "designation": "Sc'G'",
                //             "organization": "Defence Research and Development Organization(DRDO)",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "15:00 - 16:00 IST",
                //     "title": "Firmware Security Introduction",
                //     "speakers": [
                //         {
                //             "name": "Priyadharshini Krishnan",
                //             "designation": "Engineering Manager",
                //             "organization": "American Megatrends International LLC",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "16:00 - 17:00 IST",
                //     "title": "Evolution of Endpoint Detection and Response(EDR)",
                //     "speakers": [
                //         {
                //             "name": "Aarti Gupta",
                //             "designation": "Director Engineering",
                //             "organization": " CrowdStrike",
                //             "avatar": require('../../images/rahul.jpg').default
                //         }
                //     ],
                // },
                // {
                //     "time": "17:15 - 17:45 IST",
                //     "title": "Valedictory Ceremony",
                //     "speakers": [
                //         {
                //             "name": "Micha Weis",
                //             "designation": "CyberSecurity Advisor",
                //             "organization": "Ministry of Finance",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //         {
                //             "name": "Vipin Pavithran",
                //             "designation": "Founder & Chief Mentor of Team Shakti, Team bi0s, amFOSS",
                //             "organization": "Amrita University",
                //             "avatar": require('../../images/rahul.jpg').default
                //         },
                //     ]
                // }
    //         ],
    //     }
    // ]
    
    return <ScheduleModuleWrap>
        <div className="container-lg px-0 p-md-2">
            <div className="row mx-0 text-center">
                <div className="col-md-8 my-5 my-md-0 px-3 px-md-2 pt-5">
                    <h1>InCTFCon Schedule will update soon...</h1>
                </div>
                </div>  
                {/* <div className="d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                    <TabSwitcher>
                        {scheduleList?.map((day, index) =>
                            <button
                                className={index===activeDay ? 'is_active' : null}
                                onClick={() => setActiveDay(index)}
                            >
                                {day.title}
                            </button>
                        )}
                    </TabSwitcher>
                </div>
            
            <div className="p-1 p-md-2">
                <ScheduleDay {...scheduleList[activeDay]} />
            </div>
            <div className="d-flex align-items-center justify-content-end  mb-3 my-md-0 px-2">
                <TabSwitcher>
                    {scheduleList?.map((day, index) =>
                        <button
                            className={index===activeDay ? 'is_active' : null}
                            onClick={() => setActiveDay(index)}
                        >
                            {day.title}
                        </button>
                    )}
                </TabSwitcher>
            </div> */}
        </div>
    </ScheduleModuleWrap>

};

export default Schedule;
