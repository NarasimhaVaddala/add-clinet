import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MessageCircle,
  UserCircle,
  ArrowLeft,
} from "lucide-react";

export default function ContactDetailView() {
  const location = useLocation();
  const navigate = useNavigate();
  const { contact } = location.state || {};

  if (!contact) {
    return (
      <div className="container mx-auto p-4 text-center text-gray-600">
        No contact selected.
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <div className="bg-gradient-to-br from-gray-50 to-white text-gray-900 p-6 rounded-xl relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-teal-200/20 to-purple-200/20 animate-gradient-x"></div>

        {/* Back Button */}
        <button
          className="relative z-10 flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6 transition-colors duration-300"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to List
        </button>

        {/* Title */}
        <h2 className="relative z-10 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-600 mb-6">
          Contact Details
        </h2>

        {/* Contact Details */}
        <div className="relative z-10 space-y-6">
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg border border-gray-200/50">
            {/* Name */}
            <p className="text-xl font-semibold text-gray-900 flex items-center gap-3 mb-4">
              <UserCircle className="w-6 h-6 text-blue-500" />
              <span>{contact.name}</span>
            </p>

            {/* Email */}
            <p className="flex items-center gap-3 text-sm text-gray-700 mb-4">
              <Mail className="w-5 h-5 text-purple-500" />
              <span>{contact.email}</span>
            </p>

            {/* Mobile */}
            <p className="flex items-center gap-3 text-sm text-gray-700 mb-4">
              <Phone className="w-5 h-5 text-teal-500" />
              <span>{contact.mobile}</span>
            </p>

            {/* Message */}
            <p className="flex items-start gap-3 text-sm text-gray-600">
              <MessageCircle className="w-5 h-5 text-blue-500" />
              <span className="break-words">{contact.message}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
