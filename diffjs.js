* {
  max-width: 100%;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
  font-size: 14px;
  color: #404040;
  overflow: hidden;
  box-sizing: border-box;
}

.container {
  width: 100%;
}

.suggest-container {
  display: none;
}

.asset_div {
  width: 100%;
  margin: 0px auto;
  text-align: center;
  padding: 0px;
  height: 100%;
}

.asset_div.video-lp {
  width: 100%;
}

.questionBoxn {
  border-bottom: 0px solid #808080;
  background: #fff;
  padding: 20px;
  position: fixed;
  z-index: -1;
  width: auto;
  top: 75px;
  min-height: 50px;
  width: calc(100% -360px -31vw);
  
}

.questionBoxn .suggest {
  display: inline-block;
  margin: 5px;
}

.leftColumn {
  border: 10px solid #808080;
  background: #fff; 
  position: fixed;
  height: calc(100vh - 200px);
  overflow-y: auto;
  top: 170px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
}

.marquue-text {
  position: absolute;
  left: 22%;
  right: 15%;
  top: 12px;
  font-size: 20px;
  color: #000;
}

.marquue-text a {
  color: #000;
  font-weight: normal;
  text-decoration: none;
}

.marquue-text span {
  display: inline-flex;
  align-items: center;
}

.cmo {
  color: #000;
  position: fixed;
  right: 0;
  top: 95px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
  border: none;
  font-size: 18px;
  font-weight: normal;
  background-color: #fff;
  width: 19.7vw;
  z-index: 99;
  padding: 5px 20px 10px;
}

.cmo select {
  font-size: 18px;
  border: none;
}



.logo img.Insyte {
  margin-top: 0;
  float: right;
  padding-right: 30px;
  height: 60px;
}

/* 
#docFile video,
#docFile2 iframe {
  margin-top: 20px;
} */


.chat-widget-send-icon {
    width: 23px !important;
    height: 23px !important;
    display: block !important;
    background: url(https://micrositesdai.s3.us-east-1.amazonaws.com/cdn/images/send-icon.svg) 0px 0px no-repeat !important;
    background-size: contain !important;
    position: relative;
    right: -3px;
}
.send-button {
    background: #00204d;
    padding: 10px !important;
}

#docFile2 {
  height: 97%;
  max-width: 99%;
}

.chat-input input {
  margin-right: 0px;
}

.cookie-container {
  position: fixed;
  bottom: -100%;
  left: 0;
  right: 0;
  background: #fff;
  color: #000000;
  padding: 15px;
  box-shadow: 0 -2px 16px rgb(47 54 64 / 39%);
  transition: 400ms;
  z-index: 9999999999;
}

.cookie-container a {
  color: #2c66bc;
}

.cookie-container.active {
  bottom: 0;
}

.cookie-container p {
  font-size: 14px;
}

.inner-cookie-block {
  max-width: 1024px;
  margin: 0 auto;
  font-size: 14px;
  padding: 0 30px;
}

.inner-cookie-block h5 {
  font-weight: 700;
  color: #004074;
  font-size: 16px;
}

.cookie-btn {
  padding: 8px 32px;
  background: #004074;
  border-radius: 30px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.no-btn {
  padding: 8px 32px;
  background: #fff;
  border-radius: 30px;
  cursor: pointer;
  color: #000000;
  border: 1px solid #000000;
  color: grey;
  background: white !important;
  border: 1px solid grey;
}

.cookie-btn:hover,
.no-btn:hover {
  opacity: 0.8;
}

.cookie-btn-div {
  text-align: right;
}

.inner-cookie-block h5 {
  margin: 0;
}

.inner-cookie-block p {
  padding-left: 30px;
  position: relative;
}

.inner-cookie-block input[type="checkbox"] {
  position: absolute;
  left: 0;
  top: 2px;
}

.hide-block {
  display: none;
}

.OtherValue {
  top: 100%;
  position: absolute;
  left: 13%;
}

.modal-backdrop {
  position: relative;
  top: unset;
  right: unset;
  bottom: unset;
  left: unset;
  z-index: 0;
  background-color: none;
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  z-index: 9999999;
  top: unset;
  left: unset;
}

.modal {
  /* position: fixed; */
  right: 0;
  bottom: 0;
  z-index: 999;
  display: block;
  overflow: hidden;
  outline: 0;
  background: #fff;
  border: 1px solid #ddd;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}

button.close {
  padding: 0;
  background-color: transparent;
  border: 0;
  -webkit-appearance: none;
}

p.error-message {
  margin: 0;
  margin-bottom: 10px;
  font-size: 12px;
  min-height: 17px;
}

.error-message {
  text-align: center;
}

div#myModal {
  border: 1px solid #ddd;
}

.modal-header {
  border: 1px solid #004074;
}

.modal-header {
  background-color: #004074;
  color: #000000;
  display: block;
  padding: 10px 10px;
  font-size: 13px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;
}

h4.modal-title.text-center {
  font-size: 12px;
}

.modal-title {
  font-size: 15px;
}

.modal-body {
  max-height: 280px;
  overflow: auto;
  padding: 10px 0 0px;
}

input {
  margin-right: 20px;
}

.modal-footer button {
  background-color: #004074;
  color: #000000;
  color: #ffffff;
}

.pop-quest {
  color: #000;
  font-weight: 600;
  margin: 10px 0;
  font-size: 12px;
  font-weight: bold;
  line-height: 18px;
  text-indent:-20px;
  padding-left: 40px;
}
.pop-ans ul,.pop-ans ol{
  padding-left: 20px;
}

.pop-ans li {
  padding: 3px 0;
  font-size: 12px;
  color: #000;
  padding: 5px 0;
}

.pop-ans li input[type="checkbox"] {
  margin: 3px 3px 0 0;
}

.pop-ans li input[type="range"] {
  flex: 1;
  /* take full available width */
  max-width: 100%;
  margin: 0 !important;
  position: relative;
  top: 10px;
}

input[type="range"] {
  -webkit-appearance: none;
  /* Remove default styling */
  width: 300px;
  height: 6px;
  background: #ddd;
  border-radius: 3px;
  outline: none;
}

/* Slider track */
input[type="range"]::-webkit-slider-runnable-track {
  background: #000000;
  /* track color */
  height: 6px;
  border-radius: 3px;
}

/* Slider thumb (the draggable part) */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  /* thumb color */
  cursor: pointer;
  margin-top: -7px;
  /* align with track */
  border: 3px solid #000;
}


.pop-ans li span {
  text-align: center;
  font-weight: 600;
  height: 25px;
  width: 25px;
  background: #000;
  color: #fff;
  font-size: 12px;
  border-radius: 100%;
  line-height: 25px;
}

.modal-header .close {
  color: #fff;
  opacity: 1;
  /* margin-top: -20px; */
}

.modal-header h4 {
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
}

.modal-footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
}

.modal-dialog {
  max-width: 100%;
}

@media (min-width: 576px) {
  .modal-dialog {
    /* max-width: 350px; */
    margin: auto;

  }
}

.asset_nav {
  position: fixed;
  background: #333;
  color: #fff;
  line-height: 30px;
  width: 100%;
  height: 50px;
  top: 0;
  left: 0;
  font-size: 16px;
  right: 0;
  z-index: 99;
  padding: 10px 0;
  text-align: center;
  padding-left: 20%;
}

img {
  max-width: 100%;
}

a:focus {
  outline: none;
}

.logo {
  padding: 10px;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  height: 50px;
  background: #ffffff;
  box-shadow: none;
  border-bottom: 1px solid #ebeef0;
  width: calc(100% - 0px);
  position: fixed;
  top: 0;
  right: 0;
  padding-left: 30px;
  z-index: 9999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 15px;
}

.logoNoPadding {
  padding: 0 !important;
}

.client-logo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: .85;
}

.client-logo img {
  margin-left: 43px;
  max-width: max-content;
  height: 35px;
}


.logo img.Insyte {
  margin-left: 33px;
  height: 40px;
  margin-top: 0;
}

.marquee-logo {
  height: 40px;
  width: 40px;
}

.marquee-logo img {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
}

.marquee-cont {
  margin-left: 10px;
  margin-right: 10px;
}

.showMoreCont {
  float: right;
  font-size: 12px;
  margin: 25px 50px 0 0;
}

.socialiconsTop {
  position: absolute;
  top: 20px;
  right: 30px;
}

.socialiconsTop span {
  display: inline-block;
}

.weblink {
  color: #ff3621;
  font-size: 16px;
  text-decoration: none;
  font-weight: normal;
  border-right: 1px solid #ccc;
  padding: 10px 20px 10px 0;
  margin-right: 20px;
}

.socialiconsTop span a {
  text-decoration: none;
  color: #ff3621;
  margin: 0 5px;
  border-radius: 50px;
  border: 1px solid #ff3621;
  display: inline-block;
  height: 36px;
  width: 36px;
  text-align: center;
  line-height: 36px;
}

.socialiconsTop span a:hover {
  color: #000000;
  border: 1px solid #000000;
}

.left_col {
  position: fixed;
  left: 0;
  top: 70px;
  width: 360px;
  height: calc(100% - 55px);
  overflow-y: auto;
  z-index: 999;
}

.right_col {
  margin-left: 366px;
  width: calc(100% - 360px);
  height: 100%;
  position: absolute;
  /*top: 86px;*/
  top: 178px;
}

.right-top-section {
  position: sticky;
  top: 85px;
  right: 0px;
  width: 100%;
  padding: 0px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  background: #808080 !important;
  z-index: 999;
  height: 20px;
}

.asset-label {
  float: left;
}

.asset-label h2 {
  margin: 0;
  padding: 0;
}

.asset-pagi {
  padding-top: 18px;
  display: block;
}

.ptitleNew {
  color: #ff3621;
}

.asset-download {
  float: right;
}

div#the-canvas {
  position: relative;
  z-index: 11;
}

.left_linkSpc {
  padding: 25px 5px 25px 20px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #f9f9f9;
}

.left_links {
  margin: 0;
  padding: 0 20px 0 0px;
  list-style: none;
  margin-right: -25px;
}

.left_links li {
  line-height: 16px;
  position: relative;
  margin: 0;
  display: inline-block;
  align-items: center;
  width: 300px;
  height: 150px;
  padding-bottom: 20px;
}

.left_links li b {
  text-transform: uppercase;
  display: block;
  font-weight: normal;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 12px;
}

.left_links li span {
  transition: transform 0.2s;
  width: 100%;
  height: 100%;
  position: relative;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.left_links li span {
  -webkit-transition: all 200ms ease-in;
  -webkit-transform: scale(1);
  -ms-transition: all 200ms ease-in;
  -ms-transform: scale(1);
  -moz-transition: all 200ms ease-in;
  -moz-transform: scale(1);
  transition: all 200ms ease-in;
  transform: scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.left_links li span small {
  text-decoration: none;
  padding: 0 20px;
  font-size: 13px;
  line-height: 1.3;
  color: #fff;
  bottom: 0;
  z-index: 999;
  vertical-align: middle;
  font-weight: 500;
  text-align: center;
  background-color: #00000091;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.left_links li.thumbbg-first span {
  background: url("../images/first-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-second span {
  background: url("../images/second-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-third span {
  background: url("../images/third-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-fourth span {
  background: url("../images/fourth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-fifth span {
  background: url("../images/fifth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-sixth span {
  background: url("../images/sixth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-seventh span {
  background: url("../images/seventh-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-eighth span {
  background: url("../images/eighth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-nineth span {
  background: url("../images/nineth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-tenth span {
  background: url("../images/tenth-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li.thumbbg-eleventh span {
  background: url("../images/eleventh-thumb.jpg") no-repeat;
  background-size: cover;
  background-position: center;
}

.left_links li:hover span::after,
.left_links li.active span:after {
  position: absolute;
  right: -40px;
  top: 45%;
  content: "";
  border-left: 15px solid #ff362185;
  width: 25px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  /* transform: translateY(50%); */
}

.left_links li:hover span,
.left_links li.active span {
  font-size: 16px;
  line-height: 22px;
}

.left_links li:hover span small,
.left_links li.active span small {
  background: #004074b8;
}



.left_links li:hover span b,
.left_links li.active span b {
  font-size: 14px;
}

.fa.fa-twitter::before {
  content: "ð•";
  font-size: 1.2em;
}

.asset-label h2,
.nav-subhead {
  font-size: 14px;
  font-weight: 600;
}

.nav-subhead {
  text-transform: uppercase;
  text-align: center;
  padding: 30px 0 25px;
}

.ls_mob {
  display: none;
  position: fixed;
  z-index: 999;
  right: 30px;
  top: 16px;
  font-size: 28px;
  color: #000;
}

.loader-overlay {
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: none;
  z-index: 999;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
  z-index: 9999;
  color: #fff;
}

.loader img {
  margin-right: 10px;
}

.asset-pagi {
  font-size: 12px;
}

.download_ctaTop {
  position: fixed;
  margin-top: -37px;
  /* left: 67.2%; */
  z-index: 2;
  padding-left: 10px;
  display: inline-block;
  padding-top: 5px;
  margin-right: -18px;
}

.download_ctaTop button {
  background: #808080;
  color: #fff;
  display: inline-block;
  font-size: 12px;
  padding: 6px 15px;
  line-height: 20px;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  border-radius: 0 !important;
  cursor: pointer;
}

.download_ctaTop button {
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
}

.socialicons {
  position: fixed;
  right: 4%;
  top: 105px;
  z-index: 99;
}

.socialicons .soc-label {
  display: block;
  padding-bottom: 5px;
  font-size: 12px;
}

.socialicons a {
  display: inline-block;
  margin: 0 2px;
  text-decoration: none;
  outline: none;
}

.socialicons a i {
  height: 24px;
  width: 24px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  font-size: 18px;
}

.popupQuestDiv {
  position: fixed;
  bottom: -5px;
  right: 20px;
  width: 315px;
  z-index: 9;
  box-shadow: 1px 0px 5px 0 rgba(0, 0, 0, 0.15);
}


.popupQuestDiv-head,
.btn-blue {
  border-radius: 5px 5px 0 0;
  padding: 5px 10px;
  min-height: 15px;
}

.popupQuestDiv-head {
  border-radius: 0px 0px 0 0;
}

.popupQuestDiv-head span.close {
  color: #fff;
  position: absolute;
  right: 10px;
  opacity: 1;
  text-shadow: none;
  cursor: pointer;
}

.popupQuest-htxt {
  color: #929497;
  font-size: 18px;
  text-align: center;
  padding: 0px 20px;
  font-weight: 500;
}

.pop-quest,
.pop-ans {
  padding: 5px 20px;
  margin: 0;
}

.pop-quest {
  font-weight: bold;
  text-align: left;
  text-indent: -20px;
  padding-left: 40px;
}

.pop-ans {
  list-style: none;
  margin: 0 0 0 0px;
  padding: 0 0 0 20px;
}

.pop-ans li {
  margin-left: 0;
  border-bottom: 0px solid #ddd;
  padding: 5px 0 5px 20px;
}

.popupCTAdiv {
  padding: 10px 20px 30px;
}

.btn {
  display: inline-block;
  padding: 9px 30px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
}

.btn-blue {
  color: #fff;
}

.popupCTAdiv .btn {
  text-transform: uppercase;
}


#pdf-main-container {
  position: relative;
}

.annotationLayer {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  opacity: 0.2;
  line-height: 1;
}

.left_links li:hover span::after,
.left_links li.active span:after {
  position: absolute;
  right: -39px;
  top: 50%;
  content: "";
  border-left: 15px solid #004074;
  width: 25px;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  transform: translateY(-50%);
}

.annotationLayer>section {
  color: transparent;
  position: absolute;
  white-space: pre;
  cursor: text;
  transform-origin: 0 0;
}

.annotationLayer>.linkAnnotation>a {
  position: absolute;
  font-size: 1em;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#the-canvas canvas {
  max-width: 100% !important;
  width: 100%;
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  margin-bottom: -3px;
}


/*color theme*/
body,
.right-top-section {
  background: white;
}

.left_col {
  background: none;
}

.left_col {
  color: #fff;
}

.popupQuestDiv {
  background: #ffffff;
}

.popupQuestDiv-head,
.btn-blue {
  background: #fd9e0b;
}

.socialicons a.facebook i {
  background: #3c599b;
}

.socialicons a.twitter i {
  background: #1f9eef;
}

.socialicons a.linkedin i {
  background: #0076b4;
}

.socialicons a.whatsapp i {
  background: #019f02;
}

.socialicons a.email-icon {
  background: #969696;
}

.loaderAll {
  border: 4px solid #004074;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: #004074;
  min-height: 100px;
}

select#language {
  position: absolute;
  right: 20px;
  top: 5px;
}


@media only screen and (max-width: 1600px) {
  .left_col {
    width: 300px;
  }

 

  .left_links li {
    width: 255px;
  }

  .left_linkSpc {
    padding: 25px 5px 25px 25px;
  }

  .right_col {
    margin-left: 308px;
    width: calc(100% - 300px);
  }

  .download_ctaTop {
    /* left: 67% */
  }
}

@media only screen and (min-width: 1500px) {
  .leftColumn {
    height: calc(100vh - 200px);
    top: 178px;
  }

  .download_ctaTop {
    /* left: 67.2% */
  }
}

@media only screen and (max-width: 1440px) {
    


  .modal-header h4 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 12px !important;
  }
}

@media only screen and (max-width: 1365px) {}

@media screen and (min-width: 1024px) and (max-width: 1366px) {

  .questionBoxn {
    padding: 10px;
  }

  .left_links li {
    width: 200px;
    height: 100px;
  }

  .left_col {
    width: 250px;
  }



  .right_col {
    margin-left: 255px;
    width: calc(100% - 256px);
  }

  .marquue-text {
    left: 27%;
    right: 27%;
  }

  .left_links li span small {
    font-size: 11px;
    line-height: 1.2;
  }
}

@media only screen and (max-width: 1280px) {
  .leftColumn {
    width: calc(100% - 56.5vw);
  }

  .modal-header h4 {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 12px !important;
  }

  .download_ctaTop {
    /* left: 57.9% */
  }
}

@media only screen and (max-width: 1150px) {
  .modal-header h4 {
    font-size: 12px !important;
  }

}

@media only screen and (max-width: 1100px) {


  .questionBoxn {
    font-size: 12px;
  }

  .modal-header h4 {
    font-size: 11px !important;
  }

  .download_ctaTop {
    /* left: 57% */
  }
}

@media only screen and (max-width: 1023px) {

  .left_links li:hover span::after,
  .left_links li.active span:after {
    content: none;
    /* removes the arrow */
    border: none;
    /* also clears borders */
  }

  .marquue-text,
  .cmo,
  .questionBoxn {
    display: none;
  }

  .suggest-container {
    display: block;
  }

  .leftColumn {
    top: 58px;
    height: calc(100vh - 90px);
  }

  .right_col {
    top: 0;
    padding-top: 0;
  }

  .asset_div,
  div#the-canvas>div:first-child canvas {
    padding-top: 0 !important;
  }

  .chat-widget {
    width: 36.5vw !important;
  }

  img.Insyte {
    padding-right: 56px;
    float: right;
    height: 54px;
  }

  .container {
    padding: 0;
  }

  .asset_nav {
    height: 60px;
  }

  .logo {
    padding: 8px 20px;
    width: 91%;
    text-align: left;
    box-shadow: none;
    z-index: 9999;
    left: 0;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .client-logo img {
    height: 35px;
    width: auto;
    margin-left: 0;
  }

  .logo img.Insyte {
    height: 40px;
    width: auto;
    margin-left: 0;
    margin-top: 0;
  }

  img.Insyte {
    height: 52px;
    padding-right: 40px !important;
  }

  .right-top-section {
    position: fixed;
    width: 100%;
    top: 55px;
    z-index: 1;
    padding: 15px 0;
    display: none;
  }

  .asset-label {
    float: none;
    text-align: center;
    padding-left: 0;
  }

  .asset-label h2 {
    font-size: 14px;
  }

  .right_col {
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 0px;
    margin-left: 0;
    left: 0;
    padding-top: 55px;
  }

  .ls_mob {
    display: block;
    cursor: pointer;
  }

  .left_col {
    width: 100%;
    height: auto;
    background: #fff;
  }

  .right_col {
    width: 100%;
    height: 100%;
    position: absolute;
    margin-top: 0px;
    margin-left: 0;
    left: 0;
    padding-top: 55px;
  }

  .ls_mob {
    display: block;
  }

  .left_links {
    position: fixed;
    top: 82px;
    bottom: 0;
    /* left: 0; */
    right: 0;
    z-index: 111;
    display: none;
    /* width: 100%; */
    background: #7d7d7d;
    padding: 10px 0px;
    overflow-y: auto;
    margin-right: 0;
    padding-inline: 10px;
  }

  .left_links li {
    /* width: 302px; */
    /* height: 302px; */
    /* margin: 0 auto; */
    float: none;
    display: block;
  }

  .download_ctaTop,
  .socialicons,
  .nav-subhead,
  .showMoreCont {
    display: none !important;
  }

  .asset_nav {
    top: 55px;
    padding-left: 0;
    line-height: 38px;
    height: 60px;
  }

  .left_linkSpc {
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal-body {
    max-height: 149px !important;
  }
  
}

@media only screen and (min-width: 481px) and (max-width: 1023px) {
  .left_links {
    max-width: 480px;
  }

  .asset_div {
    background-color: white;
  }
}

@media (max-width: 886px) {
  .modal-footer {
    padding-block: 7px !important;
  }
}

@media (max-width: 872px) {
  .modal-header h4 {
    margin: 0;
    padding: 0;
    text-align: left;
    font-size: 11px;
  }
}

@media (max-width: 800px) {
  .pop-ans li {
    display: flex;
    align-items: flex-start;
    gap: 5px;
    line-height: 1.2;
  }

  .modal-header {
    padding: 6px 9px;
    gap: 0;
  }

  .modal-header h4 {
    line-height: 1.2;
  }

  .pop-ans li {
    margin-left: 0;
    border-bottom: 0px solid #ddd;
    padding: 2px 0 0px 20px;
  }

  p#errorMessage {
    font-size: 12px;
  }


}

@media (max-width: 768px) {
  .inner-cookie-block {
    padding: 0 0px;
  }

  .modal-body {
    height: auto !important;
    overflow: scroll;
    padding: 10px 0 0px;
    max-height: 120px !important;
  }

  .modal-body {
    height: 110px;
    overflow: scroll;
    padding: 10px 0 0px;
  }

  /* .modal-dialog {
    max-width: max-content;
  } */

  .modal {
    min-height: 215px !important;
    width: 94%;
    margin: 0 auto;
  }

  .leftColumn {
    top: 47px;
  }

  .right_col {
    top: 0;
    padding-top: 0;
  }

  .asset_div,
  div#the-canvas>div:first-child canvas,
  .chat-widget {
    padding-top: 0 !important;
  }

  .leftColumn {
  
    position: relative;
    z-index: 11;
    height: calc(100vh - 162px);
  }

  .left_links {
    top: 50px;
    right: 0px;
    overflow-x: hidden;
  }

  .left_links li {
    width: 180px;
    height: 100px;
  }

  .left_links li span small {
    font-size: 12px;
  }

  .error-message-wrapper {
    padding-bottom: 5px !important;
  }

  .client-logo img {
    height: 16px !important;
    margin-top: 0px;
  }

  .logo img.Insyte {
    height: 30px !important;
    padding-right: 20px !important;
  }
}

@media (max-width: 480px) {
  .leftColumn {
    width: 95% !important;
    margin: 0 auto;
  }

  .logo img.Insyte {
    height: 25px !important;
    padding-right: 35px !important;
    position: relative;
    top:5px;
  }

  body,
  .cookie-container p {
    font-size: 12px;
    line-height: 18px;
  }

  .pop-quest,
  .pop-ans li {
    padding: 0 10px;
  }

  .logo {
    padding: 8px;
  }

}

/*loader*/
#overlayLoader {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9999;
  left: 0%;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  top: 0%;
}

.loaderAll {
  display: block;
  width: 30px;
  height: 30px;
  position: fixed;
  left: 50%;
  margin-left: -15px;
  z-index: 9999;
  top: 50%;
  animation: loader 2s infinite ease;
}

.loader-inner {
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}

.pop-ans {
  margin-bottom: 10px;
}

.pop-ans li {
  display: flex;
  align-items: flex-start;
  /* Vertically align radio and text */
  gap: 8px;
  /* Space between radio circle and text */
  line-height: 1.4;
  /* Better text spacing */
}

.pop-ans input[type="radio"] {
  margin: 0;
  /* Remove default margin */
  margin-top: 2px;
  cursor: pointer;
}

.modal-body {
  max-height: 200px;
  padding: 10px 0 0px;
}

.bts {
  bottom: 0;
}

.error-message-wrapper {
  min-height: 30px;
  padding-left: 30px;
}

.xclose {
  color: #000;
  font-weight: bold;
}


.logo-marquee {
  width: 100%;
  margin-top: 15px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 80%;
}

.logo-item {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-img {
  height: 25px;
  object-fit: contain;
}

.logo-wrapper a {
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 500;
}

.stories {
  position: absolute;
  /* top: 50%; */
  background: white;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: end;
  font-weight: 600;
  font-size: 16px;
  padding-right: 10px;
}


/* Overlay */
.popup-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* Popup box */
.popup-box {
  text-align: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}



/* Close button */
.close-btn {
  position: absolute;
  top: 12px;
  right: 15px;
  font-size: 20px;
  cursor: pointer;
}

h2 {
  margin: 0;
  color: #333;
}

/* Media queries */
/* Tablet / Small Screens */
@media only screen and (max-width: 1023px) {
  .leftColumn {
    width: calc(100% - 300px - 26vw);
  }
  .questionBoxn {
    width: max(0px, calc(76vw - 405px));
  }
}

/* 1024px to 1050px */
@media only screen and (min-width: 1024px) and (max-width: 1050px) {
  .questionBoxn, .leftColumn  { width: 39.5vw; } 

}
/* 1051px to 1099px */
@media only screen and (min-width: 1051px) and (max-width: 1099px) {
  .questionBoxn { width: 39.5vw; }
  .leftColumn   { width: 39vw; }

}

/* 1100px to 1220px */
@media only screen and (min-width: 1100px) and (max-width: 1220px) {
  .questionBoxn { width: 43vw; }
  .leftColumn   { width: 42vw; }
}

/* 1221px to 1280px */
@media only screen and (min-width: 1221px) and (max-width: 1280px) {
  .questionBoxn { width: 44vw; }
  .leftColumn   { width: 43vw; }
}

/* 1281px to 1599px */
@media only screen and (min-width: 1281px) and (max-width: 1599px) {
  .questionBoxn, 
  .leftColumn { width: 48vw; }
}

/* 1600px to 1699px */
@media only screen and (min-width: 1600px) and (max-width: 1699px) { 
  .questionBoxn, 
  .leftColumn { width: calc(100% - 54vw); }
}
/* 1700px to 1800px */
@media only screen and (min-width: 1700px) and (max-width: 1800px) { 
  .questionBoxn, 
  .leftColumn { width: calc(100% - 52vw); }
}
/* 1801px to 1900px */
@media only screen and (min-width: 1801px) and (max-width: 1900px) { 
  .questionBoxn, 
  .leftColumn { width: calc(100% - 51vw); }
}
/* 1901px to 2000px */
@media only screen and (min-width: 1901px) and (max-width: 2000px) { 
  .questionBoxn, 
  .leftColumn { width: calc(100% - 49vw); }
}


/* 2001px to 2150px */
@media only screen and (min-width: 2001px) and (max-width: 2150px) { 
  .questionBoxn, 
  .leftColumn { width: calc(100% - 48vw); }
}


/* 2151px and Up  */
@media only screen and (min-width: 2151px) { 
  .questionBoxn {
    width: calc(100% - 47vw); 
  }
  .leftColumn {
    width: calc(100% - 47vw);
  }
}