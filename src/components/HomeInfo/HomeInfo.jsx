
import React, { Fragment } from "react";
// import LastLoggedIn from "../LastLoggedIn/LastLoggedIn";
import LastReportsAccessed from "../LastReport/LastReport";
import Announcements from "../Announcement/announcements";
import "./HomeInfo.css"
import Lottie from "lottie-react";
import animationData from '../../assets/databaseanimi.json'

const Dashboard = () => {
  //const lastLoggedIn = new Date(); // Replace with actual date/time
  const reports = [
    { name: "Covid Vaccine Dashboard", link: "/reports/report-1" },
    { name: "Sales Dashboard", link: "/reports/report-2" },
    { name: "dashboard1", link: "/reports/report-3" },
  ];

  return (
    <Fragment>
        

        <div className="bg-home img">
            <Lottie  className="key"  animationData={animationData} />
            </div>
    <div style={{ display: "flex", gap: "200px", padding: "30px", justifyContent:"center",marginTop:"500px"}}>
      <LastReportsAccessed reports={reports} /> 
      <Announcements />
    </div>
    </Fragment>
  );
};

export default Dashboard;
