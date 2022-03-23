import React from "react";

function Projects() {
  return (
    <>
      <h1 className="text-center p-5">Projects</h1>
      <h4 className="p-4 bg-dark text-info rounded">
        Decentralized Online Voting Platform
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Details</th>
            <td className="pe-5" align="justify">
              Developed a decentralized online voting system based on Ethereum
              blockchain using HTML, CSS, JavaScript, Bootstrap framework for
              frontend and Nodejs, Solidity, Truffle and Web3.Js for backend.
            </td>
          </tr>
          <tr>
            <th>Source</th>
            <td>
              <a
                className="alert-link"
                href="https://github.com/Shanto75/Decentralized-Online-Voting-Platform-Based-on-Ethereum-Blockchain"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="p-4 bg-dark text-info rounded">
        Blood Bank Management System
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Details</th>
            <td className="pe-5" align="justify">
              Developed a web-based Management System using HTML, CSS, JavaScript,
              Bootstrap framework for frontend and PHP, MySQL for backend which
              manages the information of collection, donation and booking of blood.
            </td>
          </tr>
          <tr>
            <th>Source</th>
            <td>
              <a
                className="alert-link"
                href="https://github.com/Shanto75/Blood-Bank-Management-System"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="p-4 bg-dark text-info rounded">
        Covid 19 Death Zone Prediction
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Details</th>
            <td className="pe-5" align="justify">
              Designed an Oracle Machine Learning Classification model using OML,
              SQL and Python which predicts a death zone for a specific day.
            </td>
          </tr>
          <tr>
            <th>Source</th>
            <td>
              <a
                className="alert-link"
                href="https://github.com/Shanto75/Covid-19-death-zone-prediction-using-oracle-machine-learning"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>

      <h4 className="p-4 bg-dark text-info rounded">
        IoT Based Fire Alert System
      </h4>
      <table className="table table-borderless mx-5">
        <tbody>
          <tr>
            <th>Details</th>
            <td className="pe-5" align="justify">
              Designed a network and fire alert system using Cisco Packet
              Tracer which detects fire from home and sends alerts to users smart devices.
            </td>
          </tr>
          <tr>
            <th>Source</th>
            <td>
              <a
                className="alert-link"
                href="https://github.com/Shanto75/IoT-based-fire-alert-system-using-cisco-packet-tracer"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Link
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Projects;
