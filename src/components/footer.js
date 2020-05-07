import React from "react";
import {  MDBContainer, MDBFooter } from "mdbreact";

const FooterPage = () => {
   return (
    <MDBFooter color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">

      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/home"> 99100.productions </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;