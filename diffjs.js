:root {
  --blue: #00ccff;
  --white: #ffffff;
}

html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
}

html,
body,
.suggest button {
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
  line-height: 24px;

}

.suggest button {
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
}

.suggestBold {
  border-right: 1px solid #ccc;
  padding-right: 12px;
}

.suggestions-wrapper {
  position: relative;
}

.suggestions-wrapper.has-nav {
  padding: 0 28px;
}

.suggestions-track {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scroll-behavior: smooth;
  align-items: stretch;
  scrollbar-width: none;
}

.suggestions-track::-webkit-scrollbar {
  display: none;
}

.suggestions-track .suggest {
  flex: 0 0 auto;
}

.suggest-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: #000000;
  color: #fff;
  line-height: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.16);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.suggest-nav:hover {
  background: #0556ae;
  transform: translateY(-50%) scale(1.05);
}

.suggest-nav:disabled {
  opacity: 0.4;
  cursor: default;
  transform: translateY(-50%);
}

.suggest-nav.left {
  left: 0;
}

.suggest-nav.right {
  right: 0;
}

.suggestBold button {
  font-weight: bold;
}

.chat-widget {
  position: fixed;
  padding-top: 36px;
  bottom: 0;
  right: 2px;
  width: 26.5vw;
  height: calc(100vh - 80px);
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 10px #0000001a;
  padding-inline: 15px;
  justify-content: end;
  overflow-y: auto;
  z-index: 1;
}

.chat-widget .suggest {
  margin-bottom: 10px;
}

.message.user.bubble {
  background-color: #eee;
}

.message.user {
  color: #000;
}

.suggest button {
    border: 1px solid #bbb;
    background: #eee;
    color: #000;
}

.chat-input {
  border: 1px solid #004074;
  background-color: #ffffff;
}

.chat-header {
  flex: 0 0 auto;
  background-color: #dff0ff;
  color: #fff;
  padding: 10px;
  font-weight: 700;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.chat-messages {
  padding-block: 10px;
  overflow-y: auto;
  font-size: 12px;
  display: flex;
  flex-direction: column;
}


.message {
  margin-bottom: 10px;
}

.message pre {
  margin-bottom: 10px;
  white-space: pre-wrap;
  font-family: 'Poppins', Arial, Helvetica, sans-serif !important;
  max-width: 90%;
  font-size: 12px;
}

.message.user {
  text-align: right;
  /*color: #0c7e90; */
  font-size: 12px;
  line-height: 1.7;
}

.message.bot {
  text-align: left;
  color: #1c1c1c;
  font-size: 12px;
  line-height: 1.7;
}

.message.typing .dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 2px;
  background-color: #333;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out both;
}

.chat-bubble {
  background-color: #e6f8f1;
  padding: 10px;
  -webkit-border-radius: 0px;
  -webkit-border-bottom-left-radius: 2px;
  -moz-border-radius: 10px;
  -moz-border-radius-bottomleft: 2px;
  border-radius: 10px 10px 10px 0;
}

.message.typing .dot:nth-child(1) {
  animation-delay: -0.52s;
}

.message.typing .dot:nth-child(2) {
  animation-delay: -0.16s;
}

.message.typing .dot:nth-child(3) {
  animation-delay: 0s;
}

@keyframes bounce {

  0%,
  80%,
  to {
    transform: scale(0);
  }

  40% {
    transform: scale(1);
  }
}

.chat-input {
  display: flex;
  position: relative;
  margin-block: 20px;
  margin-top: 5px;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
}

.chat-input input {
  flex: 1;
  outline: none;
  border-radius: 50px;
  border: none;
  font-size: large;
  line-height: 1;
  padding: 12px 20px;
  color: #1c1c1c;
  height: 30px;
  width: 70%;
}

.chat-input button {

  padding: 0;
  color: #fff;
  border: none;
  cursor: pointer;
  right: 10px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}

.greatings-msg {
  text-align: left;
  color: #1c1c1c;
  font-size: 20px;
  line-height: 1.7;
  width: 100%;
  margin-bottom: 10px;
}

.greatings-msg b {
  color: #39b9ae;
  font-weight: 400;
}

.suggest button {
  -webkit-text-fill-color: black;
  padding: 15px;
  border-radius: 10px;
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  cursor: pointer;
  padding-inline: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding-block: 8px;
}

.btns {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.message.user.bubble {
  /*background-color: #c2f4ef;*/
  align-self: flex-end;
  border-bottom-right-radius: 0;
}
.message.bot.bubble {
  background-color: #eceaea;
  align-self: flex-start;
  border-bottom-left-radius: 0;
  max-width: 100%;
  width: 100%;
  padding: 12px 16px;
  box-sizing: border-box;
  word-wrap: break-word;
  margin-bottom: 10px;
}
.message.bubble {
  padding: 10px 15px;
  border-radius: 20px;
  line-height: 1.4;
  position: relative;
  display: inline-block;
}

.message.bot.bubble div {
  margin-bottom: 10px;
}

.aureon-logo {
  text-align: right;
  margin-bottom: 20px;
}

.aureon-logo img {
  max-width: 100px;
}

.chat-input button img {
  vertical-align: middle;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

@media (max-width: 1600px) {
  .chat-widget {
    width: 26.5vw !important;
  }
}




@media screen and (min-width: 1024px) and (max-width: 1280px) {
  .suggest button {
    font-size: 10px;
  }

  .chat-widget {
    width: 30.5vw !important;
  }
}

@media (max-width: 1100px) {
  .suggest button {
    font-size: 8px;
    padding-inline: 5px;
    padding-block: 5px;
  }
}

@media (max-width: 1023px) {
  .chat-widget {
    width: 36.5vw !important;
    padding-top: 70px;
    right: 0px;
  }

  /* ul#mobileNavdiv {
    overflow-x: hidden;
    top: 82px;
  } */
}

@media (max-width: 768px) {
  .chat-input input {
    height: auto;
    width: 107px !important;
    font-size: 12px;
    padding-left: 16px;
  }

  pre#out {
    margin-block: 2px;
  }

  .chat-input button img {
    vertical-align: middle;
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 768px) {
  .chat-widget {
    width: 100% !important;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0px;
    z-index: 99;
    height: auto;
    max-height: 65vh;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 0 10px 0 #dfdbdb;
    padding: 0px;
  }

  .chat-input {
    width: 96%;
    margin: 5px auto;
    margin-bottom: 15px;
  }

  .chat-widget .suggest {
    margin: 10px;
  }

  .chat-messages {
    padding: 10px;
  }

  .ls_mob {
    right: 17px;
    top: 12px;
  }

  .left_links {
    top: 50px !important;
  }

  .left_links li {
    width: 180px;
    height: 100px;
  }

  .left_links li span small {
    font-size: 12px !important;
    line-height: 1.4;
  }
}

.chat-toggle {
  position: absolute;
  right: 10px;
  top: 5px;
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #000;
}

@media (max-width: 1023px) {
  ul#mobileNavdiv {
    overflow-x: hidden;
    top: 57px;
  }
}

@media (min-width: 481px) {
  .chat-toggle {
    display: none;
    /* Only show on mobile */
  }

  .chat-input {
    width: 94%;
    margin: 5px auto;
    margin-bottom: 15px;
  }
}
