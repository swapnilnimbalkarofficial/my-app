import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black pt-4 pb-4 text-white">
      <div className="w-full max-w-6xl mx-auto px-4 py-2 grid grid-cols-2 lg:grid-cols-6 gap-4">
        <div>
          <h2 className="text-2xl pt-2 pb-2">Services</h2>
          <ul>
            <li>
              <a href="#">Baby wear</a>
            </li>
            <li>
              <a href="#">Mens wear</a>
            </li>
            <li>
              <a href="#">Ladies wear</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl pt-2 pb-2">Company</h2>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl pt-2 pb-2">Customer Care</h2>
          <ul>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl pt-2 pb-2">Shopping</h2>
          <ul>
            <li>
              <a href="#">New arrivals</a>
            </li>
            <li>
              <a href="#">Offers</a>
            </li>
            <li>
              <a href="#">Best sellers</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl pt-2 pb-2">Policies</h2>
          <ul>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Returns</a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl pt-2 pb-2">Follow us</h2>
          <ul>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">YouTube</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 py-2 text-center border-t border-gray-600">
        <p>&copy; 2026 My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}
