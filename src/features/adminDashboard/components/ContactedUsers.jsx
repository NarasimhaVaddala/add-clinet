import React from "react";
import { Phone, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ContactedUsers({ contacts }) {
  const navigate = useNavigate();

  const handleContactClick = (contact) => {
    navigate(`/contact/${contact._id}`, { state: { contact } });
  };

  return (
    <div className="lg:w-[40%] w-full bg-gradient-to-br from-gray-50 to-white text-gray-900 p-4 rounded-xl relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-teal-200/20 to-purple-200/20 animate-gradient-x"></div>

      {/* Title */}
      <h2 className="relative z-10 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 mb-4">
        Contacted for Support
      </h2>

      {/* Contacts List */}
      <div className="relative z-10 space-y-2 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
        {contacts.length > 0 ? (
          contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-3 rounded-lg border border-gray-200/50 transition-all duration-300 hover:border-blue-400/70 hover:bg-blue-50/50 group cursor-pointer"
              onClick={() => handleContactClick(contact)}
            >
              {/* Name */}
              <p className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-1">
                <UserCircle className="w-5 h-5 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="truncate">{contact.name}</span>
              </p>

              {/* Mobile */}
              <p className="flex items-center gap-2 text-sm text-gray-700">
                <Phone className="w-4 h-4 text-teal-500 transition-transform duration-300 group-hover:scale-110" />
                <span className="truncate">{contact.mobile}</span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center py-6 animate-fade-in">
            No contacts found.
          </p>
        )}
      </div>
    </div>
  );
}
