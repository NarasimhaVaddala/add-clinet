import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { API, imageUrl } from "../../core/url";
import ReactPlayer from "react-player";
import {
  User,
  Mail,
  Phone,
  MapPin,
  UserCircle,
  Film,
  Camera,
  Scissors,
  Users,
} from "lucide-react";

export default function DetailedView() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [presentUser, setPresentUser] = useState(null);
  const [images, setImages] = useState([]);
  const [videoUrl, setVideoUrl] = useState("");
  const [activeTab, setActiveTab] = useState("personal"); // State for tab switching

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await API.get(`/admin/getbyid/${id}`);
        setPresentUser(response.data);
        const {
          imageOne,
          imageTwo,
          imageThree,
          imageFour,
          imageFive,
          imageSix,
          imageSeven,
          imageEight,
          imageNine,
          imageTen,
        } = response.data;
        setVideoUrl(response.data?.video);
        setImages([
          imageOne,
          imageTwo,
          imageThree,
          imageFour,
          imageFive,
          imageSix,
          imageSeven,
          imageEight,
          imageNine,
          imageTen,
        ]);
      } catch (error) {
        toast.error(error.message);
      }
    };
    getUserById();
  }, [id]);

  const openImageModal = (imageSrc) => setSelectedImage(imageSrc);
  const closeImageModal = () => setSelectedImage(null);

  return (
    <div className="container mx-auto p-4">
      {/* Advanced Profile Section */}
      {presentUser && (
        <div className="relative bg-gray-900 text-white rounded-xl p-6 mb-10 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-purple-500/20 animate-gradient-x"></div>

          {/* Tabbed Navigation */}
          <div className="relative z-10 flex justify-start space-x-4 mb-6 border-b border-gray-700">
            <button
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeTab === "personal"
                  ? "text-blue-400 border-b-2 border-blue-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              onClick={() => setActiveTab("personal")}
            >
              Personal Details
            </button>
            {presentUser.directorName && (
              <button
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeTab === "roles"
                    ? "text-teal-400 border-b-2 border-teal-400"
                    : "text-gray-400 hover:text-gray-200"
                }`}
                onClick={() => setActiveTab("roles")}
              >
                Roles & Contributions
              </button>
            )}
          </div>

          {/* Content Area */}
          <div className="relative z-10">
            {/* Personal Details Tab */}
            {activeTab === "personal" && (
              <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/20 rounded-full transition-transform group-hover:scale-110">
                    <UserCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400">
                      Name
                    </span>
                    <p className="text-lg font-semibold text-white truncate">
                      {presentUser.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/20 rounded-full transition-transform group-hover:scale-110">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400">
                      Email
                    </span>
                    <p className="text-lg font-semibold text-white truncate">
                      {presentUser.email}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/20 rounded-full transition-transform group-hover:scale-110">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400">
                      Mobile
                    </span>
                    <p className="text-lg font-semibold text-white truncate">
                      {presentUser.mobile}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="p-2 bg-blue-500/20 rounded-full transition-transform group-hover:scale-110">
                    <MapPin className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <span className="block text-xs uppercase text-gray-400">
                      Address
                    </span>
                    <p className="text-lg font-semibold text-white truncate">
                      {presentUser.address}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Roles & Contributions Tab */}
            {activeTab === "roles" && presentUser.directorName && (
              <div className="animate-fade-in grid grid-cols-1 sm:grid-cols-2 gap-6">
                {presentUser.fullName && (
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-teal-500/20 rounded-full transition-transform group-hover:scale-110">
                      <UserCircle className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">
                        Full Name
                      </span>
                      <p className="text-lg font-semibold text-white truncate">
                        {presentUser.fullName}
                      </p>
                    </div>
                  </div>
                )}
                {presentUser.directorName && (
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-teal-500/20 rounded-full transition-transform group-hover:scale-110">
                      <Film className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">
                        Director
                      </span>
                      <p className="text-lg font-semibold text-white truncate">
                        {presentUser.directorName}
                      </p>
                    </div>
                  </div>
                )}
                {presentUser.cinematographyName && (
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-teal-500/20 rounded-full transition-transform group-hover:scale-110">
                      <Camera className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">
                        Cinematographer
                      </span>
                      <p className="text-lg font-semibold text-white truncate">
                        {presentUser.cinematographyName}
                      </p>
                    </div>
                  </div>
                )}
                {presentUser.editorName && (
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-teal-500/20 rounded-full transition-transform group-hover:scale-110">
                      <Scissors className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">
                        Editor
                      </span>
                      <p className="text-lg font-semibold text-white truncate">
                        {presentUser.editorName}
                      </p>
                    </div>
                  </div>
                )}
                {presentUser.producerName && (
                  <div className="flex items-start gap-4 group">
                    <div className="p-2 bg-teal-500/20 rounded-full transition-transform group-hover:scale-110">
                      <Users className="w-6 h-6 text-teal-400" />
                    </div>
                    <div>
                      <span className="block text-xs uppercase text-gray-400">
                        Producer
                      </span>
                      <p className="text-lg font-semibold text-white truncate">
                        {presentUser.producerName}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Video Section */}
      <div className="mt-8">
        <ReactPlayer
          url={`${imageUrl}/${videoUrl}`}
          controls={true}
          width="100%"
          height="400px"
          muted={true}
          playing={true}
          className="rounded-lg transition-transform hover:scale-[1.01]"
        />
      </div>

      {/* Images Section */}
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {images?.map((image, index) =>
          image ? (
            <img
              key={index}
              src={`${imageUrl}/${image}`}
              alt={`Image ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg cursor-pointer transition-transform hover:scale-105"
              onClick={() => openImageModal(`${imageUrl}/${image}`)}
            />
          ) : null
        )}
      </div>

      {/* Modal for Full-Screen Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeImageModal}
        >
          <div className="relative max-w-3xl max-h-screen">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center transition-transform hover:scale-110"
              onClick={(e) => {
                e.stopPropagation();
                closeImageModal();
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
