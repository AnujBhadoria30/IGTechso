import React from 'react';

function Footer() {
  return (
    <footer className="py-8 px-4 text-left sm:text-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
    
        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li className="text-sm md:text-base">Support Center</li>
            <li className="text-sm md:text-base">Customer Support</li>
            <li className="text-sm md:text-base">Michael Brown</li>
            <li className="text-sm md:text-base">Emily Davis</li>
            <li className="text-sm md:text-base">Chris Wilson</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Our Information</h3>
          <ul className="space-y-2">
            <li className="text-sm md:text-base">Company Address</li>
            <li className="text-sm md:text-base">Support Email</li>
            <li className="text-sm md:text-base">Contact Number</li>
            <li className="text-sm md:text-base">Working Hours</li>
            <li className="text-sm md:text-base">Location</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">My Account</h3>
          <ul className="space-y-2">
            <li className="text-sm md:text-base">Login</li>
            <li className="text-sm md:text-base">Register</li>
            <li className="text-sm md:text-base">Order History</li>
            <li className="text-sm md:text-base">Wishlist</li>
            <li className="text-sm md:text-base">Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-bold mb-4">Policy</h3>
          <ul className="space-y-2">
            <li className="text-sm md:text-base">Privacy Policy</li>
            <li className="text-sm md:text-base">Refund Policy</li>
            <li className="text-sm md:text-base">Shipping Policy</li>
            <li className="text-sm md:text-base">Terms of Service</li>
            <li className="text-sm md:text-base">FAQs</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
