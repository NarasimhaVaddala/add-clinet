import React from "react";

export default function AlreadyRegistered() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 bg-gray-50 rounded-lg shadow-lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3761509/pexels-photo-3761509.jpeg"
            alt="Trophy celebration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            You're All Set!
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            You've already successfully registered for the competition. Results
            will be announced on <strong>1st May</strong> - mark your calendar!
          </p>

          <p className="font-semibold text-gray-500 mb-4">
            While you wait, make sure to:
          </p>

          <ul className="list-none space-y-2 text-gray-600">
            <li>✓ Check your email for confirmation (and spam folder!)</li>
            <li>✓ Prepare your presentation materials</li>
            <li>✓ Invite friends to watch the final results</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
