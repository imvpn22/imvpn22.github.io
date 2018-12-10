import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
        <div className="header-title">Vipin Yadav</div>
        <div className="navbar">
            <div className="nav-items">
                <span className="nav-item"><a href="#about_section"><i className="fa fa-user-o"></i> About</a></span>
                <span className="nav-item"><a href="#project_section"><i className="fa fa-code"></i> Project</a></span>
                <span className="nav-item"><a href="#skill_section"><i className="fa fa-terminal" aria-hidden="true"></i> Skills</a></span>
                <span className="nav-item"><a href="#contact_section"><i className="fa fa-envelope-o" aria-hidden="true"></i> Contact</a></span>
            </div>
        </div>

    </div>

    <div className="container ">
        <div className="info-section" id="about_section">
            <div className="sep">
                <span className="sep_line"></span>
                <span className="sep_code">
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="cat-title">About</span>
                </span>
                <span className="sep_line"></span>
            </div>

            <div className="about-content">
                <div className="about-image"></div>
                <div className="about-text">
                    I am responsible, innovative, passionate and committed professional with a get-it-done approach. Experience in designing and implementing sophisticated web applications using Node.JS, Vue.JS and PHP as well as softwares in C++, QT and Computer Vision. Proficient in web design &amp; development technologies, UI/UX standards, infrastructure and Application Life-Cycle management.
                </div>
            </div>
        </div>


        <div className="info-section" id="project_section">
            <div className="sep">
                <span className="sep_line"></span>
                <span className="sep_code">
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="cat-title">Projects</span>
                </span>
                <span className="sep_line"></span>
            </div>
            <div className="project-section">

                <span className="pr-left"><i className="fa fa-chevron-left"></i></span>

                <div className="pr-caro">

                    <div className="project-box">
                        <div className="project-header">
                            <span className="project-title">Restaurant Review</span>
                            <span className="project-duration">Jun - Nov, 2018</span>
                        </div>
                        <div className="project-desc">
                            A progressive web application developed for Udacity's MWS nanodegree
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/imvpn22/restaurant-review-pwa" target="_blank">
                                <img className="project-img" src="https://raw.githubusercontent.com/imvpn22/imvpn22.github.io/master/assets/images/projects/restaurant-review.png" />
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className="project-header">
                            <span className="project-title">PBR Ray Tracer</span>
                            <span className="project-duration">Oct - Dec, 2017</span>
                        </div>
                        <div className="project-desc">
                            A ray tracer based on physically based rendering
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/methusael13/phy-ray" target="_blank">
                                <img className="project-img" src="https://raw.githubusercontent.com/imvpn22/imvpn22.github.io/master/assets/images/projects/phyray.png" />
                            </a>
                        </div>
                    </div>
                    <div className="project-box">
                        <div className="project-header">
                            <span className="project-title">WhiteBoard</span>
                            <span className="project-duration">Jul - Aug, 2017</span>
                        </div>
                        <div className="project-desc">
                            A simple messaging and sketch streaming web app for brainstorming sessions
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/imvpn22/whiteboard" target="_blank">
                                <img className="project-img" src="https://raw.githubusercontent.com/imvpn22/imvpn22.github.io/master/assets/images/projects/whiteboard.png" />
                            </a>
                        </div>
                    </div>

                    <div className="project-box">
                        <div className="project-header">
                            <span className="project-title">Tab Tracker</span>
                            <span className="project-duration">Sept - Oct, 2017</span>
                        </div>
                        <div className="project-desc">
                            A Vue.js / Express.js web application for keeping track of guitar tabs.
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/imvpn22/guitar-tab-tracker" target="_blank">
                                <img className="project-img" src="https://raw.githubusercontent.com/imvpn22/imvpn22.github.io/master/assets/images/projects/tabtracker.png" />
                            </a>
                        </div>
                    </div>


                    <div className="project-box">
                        <div className="project-header">
                            <span className="project-title">Jnanagni 2017</span>
                            <span className="project-duration">Jan - Mar, 2017</span>
                        </div>
                        <div className="project-desc">
                            Official website for Jnanagni 2017 - FET, GKV&#39;s Annual Techfest
                        </div>
                        <div className="project-link">
                            <a href="https://github.com/methusael13/jnanagni17" target="_blank">
                                <img className="project-img" src="https://raw.githubusercontent.com/imvpn22/imvpn22.github.io/master/assets/images/projects/jnanagni.png" />
                            </a>
                        </div>
                    </div>

                </div>
                <span className="pr-right"><i className="fa fa-chevron-right"></i></span>


            </div>
        </div>



        <div className="info-section" id="skill_section">
            <div className="sep">
                <span className="sep_line"></span>
                <span className="sep_code">
                    <i className="fa fa-code" aria-hidden="true"></i>
                    <span className="cat-title">Skills</span>
                </span>
                <span className="sep_line"></span>
            </div>

            <div className="cat-skill-item">
                <div className="cat-skill-type">Programming Languages</div>
                <div className="cat-skill-body">

                    <div className="skill">
                        <a href="https://www.wikiwand.com/en/C_(programming_language)" target="_blank" className="skill-image">
                            <img src="http://wikiprogramming.org/wp-content/uploads/2015/05/c-logo.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="http://www.cplusplus.com/doc/tutorial/" target="_blank" className="skill-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/140px-ISO_C%2B%2B_Logo.svg.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://www.geeksforgeeks.org/java/" target="_blank" className="skill-image">
                            <img src="https://cdn.worldvectorlogo.com/logos/java-14.svg" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://docs.python.org/3/tutorial/" target="_blank" className="skill-image">
                            <img src="http://languageinstituteoftheamericas.com/wp-content/uploads/2016/11/python.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://developer.mozilla.org/en-US/docs/Learn/HTML" target="_blank" className="skill-image" style={{color: "#f13300"}}>
                            <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" className="skill-image" style={{color: "#1367bc"}}>
                            <img src="https://cdn.worldvectorlogo.com/logos/css-3.svg" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://developer.mozilla.org/bm/docs/Web/JavaScript" target="_blank" className="skill-image">
                            <img src="http://www.northeastjsconference.com/wp-content/uploads/2015/11/learn-javascript.png" />
                        </a>
                    </div>

                </div>
            </div>


            <div className="cat-skill-item">
                <div className="cat-skill-type">
                    Database
                </div>
                <div className="cat-skill-body">
                    <div className="skill">
                        <a href="https://www.mysql.com/" target="_blank" className="skill-image">
                            <img src="https://d1q6f0aelx0por.cloudfront.net/product-logos/0dd7193f-e747-4a15-b797-818b9fac3656-mysql.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://www.postgresql.org/" target="_blank" className="skill-image">
                            <img src="http://logo-load.com/uploads/posts/2016-08/postgresql-logo.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://www.mongodb.com/" target="_blank" className="skill-image">
                            <img src="https://images.ctfassets.net/3ouphkrynjol/3ah0QTRL2UOCQqS6iO0eQA/540aaa26603a18ca07b06fd10ceffe0a/mongodb-logo-1.png" />
                        </a>
                    </div>


                </div>
            </div>


            <div className="cat-skill-item">
                <div className="cat-skill-type">Frameworks / Libraries</div>
                <div className="cat-skill-body">

                    <div className="skill">
                        <a href="https://nodejs.org/en/" target="_blank" className="skill-image">
                            <img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://reactjs.org/docs/hello-world.html" target="_blank" className="skill-image">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://vuejs.org/v2/guide/" target="_blank" className="skill-image">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://angular.io/" target="_blank" className="skill-image">
                            <img src="https://angular.io/assets/images/logos/angular/angular.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://laravel.com/docs/5.5" target="_blank" className="skill-image">
                            <img src="https://seeklogo.com/images/L/laravel-framework-logo-C10176EC8C-seeklogo.com.png" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://socket.io/docs/" target="_blank" className="skill-image">
                            <img src="https://joscor.com/wp-content/uploads/2014/10/SOCKETIOICON.gif" />
                        </a>
                    </div>

                </div>
            </div>


            <div className="cat-skill-item">
                <div className="cat-skill-type">Operating System</div>
                <div className="cat-skill-body">
                    <div className="skill">
                        <a href="https://getgnulinux.org/en/home/" target="_blank" className="skill-image">
                            <img src="https://getgnulinux.org/images/slides/GNU_Tux.svg" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://www.microsoft.com/en-in/windows/" target="_blank" className="skill-image">
                            <img src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/topic_images/2015/windows-phone-logo-topic.png?itok=DbviCvdc" />
                        </a>
                    </div>

                    <div className="skill">
                        <a href="https://www.android.com/" target="_blank" className="skill-image">
                            <img src="http://pngimg.com/uploads/android_logo/android_logo_PNG25.png" />
                        </a>
                    </div>


                </div>
            </div>
        </div>
    </div>



    <div className="footer info-section" id="contact_section">
        <div className="sep">
            <span className="sep_line"></span>
            <span className="sep_code">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <span className="cat-title">Contacts</span>
            </span>
            <span className="sep_line"></span>
        </div>

        <div className="cat-contact-body">
            <div className="contact-item">
                <div className="contact-logo">
                    <i className="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div className="contact-info">
                    <a href="mailto:imvpn22@gmail.com">
                        imvpn22@gmail.com
                    </a>
                </div>
            </div>
            <div className="contact-item">
                <div className="contact-logo">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                </div>
                <div className="contact-info">+919919716378</div>
            </div>
            <div className="contact-item">
                <div className="contact-logo">
                    <i className="fa fa-address-card" aria-hidden="true"></i>
                </div>
                <div className="contact-info">14/8/1A Salori, Shukla Market, Teliyarganj, Allahabad U.P. India, PIN - 211004</div>
            </div>
        </div>

        <div className="user-section">
            <div className="profile-title"> Find me on various platforms </div>
            <div className="profile-links">
                <a className="facebook" href="https://www.facebook.com/imvpn22" target="_blank">
                    <i className="fa fa-facebook"></i>
                </a>

                <a className="twitter" href="https://www.twitter.com/imvpn22" target="_blank">
                    <i className="fa fa-twitter"></i>
                </a>

                <a className="linkedin" href="https://www.linkedin.com/in/vpnydv10year" target="_blank">
                    <i className="fa fa-linkedin"></i>
                </a>

                <a className="github" href="https://github.com/imvpn22" target="_blank">
                    <i className="fa fa-github"></i>
                </a>

                <a className="pinterest" href="https://in.pinterest.com/imvpn22" target="_blank">
                    <i className="fa fa-pinterest-p"></i>
                </a>

                <a className="google-plus" href="https://plus.google.com/u/1/+VIPINYADAVvpnydv10year?pageId=none" target="_blank">
                    <i className="fa fa-google-plus"></i>
                </a>


                <a className="free-code-camp" href="https://www.freecodecamp.org/imvpn22" target="_blank">
                    <i className="fa fa-free-code-camp"></i>
                </a>


                <a href="https://www.hackerearth.com/@vpnydv10year" target="_blank">
                    <img src="https://hackerearth.global.ssl.fastly.net/static/hackerearth/images/logo/HE_identity.png" />
                </a>

                <a href="https://www.hackerrank.com/imvpn22" target="_blank">
                    <img src="https://hrcdn.net/hackerrank/assets/brand/h_mark_medium-a456857be737628eada00d05e5fad5f7.png" />
                </a>

                <a className="reddit" href="https://www.reddit.com/user/imvpn22/" target="_blank">
                    <i className="fa fa-reddit-alien"></i>
                </a>

                <a className="medium" href="https://medium.com/@imvpn22" target="_blank">
                    <i className="fa fa-medium"></i>
                </a>

                <a href="http://vpnwb.blogspot.in" target="_blank">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Blogger.svg/483px-Blogger.svg.png" />
                </a>
            </div>
        </div>


    </div>
      </div>
    );
  }
}

export default App;
