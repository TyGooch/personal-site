import React from 'react'
import { Link } from 'react-static'

import './resume.css'

export default() => (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          TY GOOCH
        </div>

        <div className="resume-contact-info">
          <div className="resume-contact">
            <i className="fas fa-mobile-alt"></i>
            <span className="phone-number">(805) 705-6502</span>
          </div>

          <div className="resume-contact">
            <i className="far fa-envelope-open"></i>
            <span>gooch.ty@gmail.com</span>
          </div>

          <div className="resume-contact">
            <i className="fas fa-home"></i>
            <span>Santa Barbara, CA</span>
          </div>
        </div>

        <div className="resume-body">
          <br />
          <div className="projects">
            <div className="body-header">
              PROJECTS
            </div>
            <div className="body-header-line"></div>
            <ul className="list">
              <li>UCSBMap.com — Interactive online map of the UCSB campus
                <ul className="sublist">
                  <li>Full stack web app built with Java Spring, MongoDB, React/Redux and Leaflet.js</li>
                  <li>Used open source GIS resources to collect highly accurate GeoJSON data of UCSB buildings and interiors</li>
                  <li>Developed chrome extension UCSB Map For GOLD that allows students to easily view their className locations on ucsbmap.com with one click from their online schedule</li>
                </ul>
              </li>
              <li>Isla Vista Emergency Map — Emergency dispatch visualization with live updates
                <ul className="sublist">
                  <li>Full stack JavaScipt web app built with Express.js, Twitter API, and MongoDB on the backend and React/Redux and Google Maps API on the frontend</li>
                  <li>Server side JavaScipt runs a Twitter livestream, parsing tweets to store emergency data</li>
                  <li>Used Python to scrape 94,000 tweets, allowing users to view all emergencies in Isla Vista since March 2009</li>
                </ul>
              </li>
              <li>Caltrain Live — Map of real time CalTrain vehicle locations
                <ul className="sublist">
                  <li>Uses JavaScript, jQuery, and Leaflet to add an interactive layer to Google Maps tiles</li>
                  <li>Client side JavaScript determines approximate geographic locations of trains</li>
                </ul>
              </li>
              <li>Cockatune — Spotify inspired full stack music app
                <ul className="sublist">
                  <li>Full stack web app built with Rails, JavaScript, and React/Redux with custom frontend user authentication and a single page workflow</li>
                </ul>
              </li>
            </ul>
          </div>

          <br />

          <div className="skills">
            <div className="body-header">
              SKILLS
            </div>
            <div className="body-header-line"></div>
            <ul className="list">
              <li>JavaScript (ES6), jQuery
              </li>
              <li>Node.js
              </li>
              <li>React.js, Redux
              </li>
              <li>Express.js
              </li>
              <li>Ruby, Ruby on Rails
              </li>
              <li>MongoDB, PostgreSQL
              </li>
              <li>Leaflet.js, Google Maps
              </li>
              <li>GIS
              </li>
              <li>HTML, CSS
              </li>
            </ul>
          </div>

          <br />

          <div className="education">
            <div className="body-header">
              EDUCATION
            </div>
            <div className="body-header-line"></div>
            <ul className="list">
              <li>UC Santa Barbara — Computer Science Engineering (2019)
                <ul className="sublist">
                  <li>Pursing B.S. degree. Coursework includes Python/C++ programming, data structures and algorithms, computer architecture, assembly language, and discrete mathematics</li>
                </ul>
              </li>
              <li>App Academy (2017)
                <ul className="sublist">
                  <li>{"1000-hour full-stack web development course with <5% acceptance rate. Coursework included JavaScript, React.js, Rails, scalability, algorithms, and single-page apps"}</li>
                </ul>
              </li>
            </ul>
          </div>

          <br />

          <div className="work-experience">
            <div className="body-header">
              WORK EXPERIENCE
            </div>
            <div className="body-header-line"></div>
            <ul className="list">
              <li>The Guilfordian - Social Justice Editor/Web Developer (2014)
                <ul className="sublist">
                  <li>Helped manage a team of 18 writers. Created, pitched, and edited social justice oriented articles for Guilford College’s student paper. Built and maintained Guilford College’s social justice website using WordPress and CSS3. Awarded Most Outstanding College Newspaper by the American Scholastic Press Association in 2014.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <br />

        <div className="resume-footer">
          <a href="https://github.com/tygooch">
            <i className="fab fa-github"><span>github.com/tygooch</span></i>
          </a>

          <a href="https://linkedin.com/in/tygooch">
            <i className="fab fa-linkedin"><span>linkedin.com/in/tygooch</span></i>
          </a>
        </div>
        <br />
      </div>
    </div>
)
