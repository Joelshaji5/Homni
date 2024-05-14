import React from 'react'

function Page() {
    return (
        <div className="terms-container">
          <h1>Terms and Conditions</h1>
          <div className="terms-content">
            <h2>Appointment Booking</h2>
            <p>By booking an appointment or by visiting our website, you consent us to perform dental treatment of checkup and consultation upon you...</p>
            {/* Include all the sections of terms and conditions here */}
          </div>
          <div className="cookies-section">
            <h2>Cookies</h2>
            <p>We employ the use of cookies. By accessing Homnident LLP, you agreed to use cookies in agreement with the Homnident LLP's Privacy Policy...</p>
          </div>
          <div className="license-section">
            <h2>License</h2>
            <p>Unless otherwise stated, Homnident LLP and/or its licensors own the intellectual property rights for all material on Homnident LLP...</p>
          </div>
          {/* Include other sections like Hyperlinking, Content Liability, Your Privacy, etc. */}
          <div className="disclaimer-section">
            <h2>Disclaimer</h2>
            <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website...</p>
          </div>
        </div>
      );
    }
    
export default Page