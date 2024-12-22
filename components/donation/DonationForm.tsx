'use client';
import { useState } from 'react';

export default function DonationForm() {
  const [page, setPage] = useState(1);
  
  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        
        {page === 2 && (
          <div>
            <button onClick={prevPage} className="text-blue-500 mb-4">← Back</button>
            <h1 className="text-2xl font-bold mb-6 text-center">Information</h1>
            <input type="text" placeholder="First Name" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <input type="text" placeholder="Last Name" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="anonymous" className="w-5 h-5 text-blue-500" />
              <label htmlFor="anonymous" className="ml-3">Make donation anonymous</label>
            </div>
            <input type="email" placeholder="Email" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <select className="mb-4 w-full px-3 py-2 border rounded-lg">
              <option>Select Country</option>
              {/* Add country options */}
            </select>
            <div className="flex gap-2 mb-4">
              <input type="text" placeholder="Address" className="flex-1 px-3 py-2 border rounded-lg" />
              <input type="text" placeholder="Postal Code" className="w-24 px-3 py-2 border rounded-lg" />
            </div>
            <input type="text" placeholder="State" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <div className="flex items-center mb-4">
              <input type="checkbox" id="terms" className="w-5 h-5 text-blue-500" />
              <label htmlFor="terms" className="ml-3">
                By donating, you agree to our privacy policy and terms.
              </label>
            </div>
            <button
              onClick={nextPage}
              className="w-full px-4 py-3 bg-blue-500 text-white text-lg font-medium rounded-lg hover:bg-blue-600 transition-all duration-150"
            >
              Next →
            </button>
          </div>
        )}

        {page === 3 && (
          <div>
            <button onClick={prevPage} className="text-blue-500 mb-4">← Back</button>
            <h1 className="text-2xl font-bold mb-6 text-center">Payment</h1>
            <div className="flex gap-4 justify-center mb-6">
              <button className="flex-1 px-4 py-2 border rounded-lg">Card</button>
              <button className="flex-1 px-4 py-2 border rounded-lg">PayPal</button>
              <button className="flex-1 px-4 py-2 border rounded-lg">Bank Transfer</button>
            </div>
            <input type="text" placeholder="Card Number" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <div className="flex gap-2 mb-4">
              <input type="text" placeholder="MM/YY" className="flex-1 px-3 py-2 border rounded-lg" />
              <input type="text" placeholder="CVC" className="w-20 px-3 py-2 border rounded-lg" />
            </div>
            <input type="text" placeholder="Billing ZIP Code" className="mb-4 w-full px-3 py-2 border rounded-lg" />
            <button
              className="w-full px-4 py-3 bg-green-500 text-white text-lg font-medium rounded-lg hover:bg-green-600 transition-all duration-150"
            >
              Donate (One-Time/Monthly)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

