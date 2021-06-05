import React from "react";

function Footer() {
  var currYear = new Date().getFullYear();

  return (
    <footer>
      <p>Dogecoin To The Moon  @ {currYear}</p>
    </footer>
  );
}

export default Footer;
