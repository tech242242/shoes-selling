import React from "react";

export default function Footer(){
  return (
    <footer className="bg-bt-dark text-bt-muted py-6 mt-12 text-center">
      <p>&copy; {new Date().getFullYear()} Back-to-Streets. All Rights Reserved.</p>
      <p>Contact: <a href="mailto:info@backtostreets.com" className="text-bt-red">info@backtostreets.com</a></p>
    </footer>
  )
}
