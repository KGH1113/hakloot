import React, { useState } from "react";

import Navbar from "./Navbar";
import Swal from "sweetalert2";

const MyPage = () => {
  return (
    <>
      <main>
        <div className="wraper">
          <p className="info-text">MyPage</p>
          <span className="material-icons-sharp"> logout </span>
        </div>
      </main>
      <div className="right-section">
        <Navbar />
      </div>
    </>
  );
};

export default MyPage;