// "use client";

// import React from "react";
// import { CardFormData } from "@/types/form-type";

// interface Props {
//   formData: CardFormData;
//   onChange: (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => void;
// }

// export default function CreateCardInput({ formData, onChange }: Props) {
//   return (
//     <>
//       <input
//         type="text"
//         name="fullName"
//         placeholder="Full Name"
//         value={formData.fullName}
//         onChange={onChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={onChange}
//       />
//       {/* Add more inputs like phone, position, etc. */}
//     </>
//   );
// }

"use client";

// import { CardFormData } from "@/types/form-type";

// interface Props {
//   formData: CardFormData;
//   //   onChange: (
//   //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   //   ) => void;
// }

// const inputHandler = () => {
//   console.log("do something");
// };

import React from "react";
import {
  User,
  Mail,
  Phone,
  Building,
  MapPin,
  Link,
  FileText,
} from "lucide-react";

const CreateCardInput = () => {
  const inputFields = [
    {
      label: "Full Name",
      name: "fullName",
      placeholder: "Full Name",
      type: "text",
      icon: User,
      required: true,
    },
    {
      label: "Description (Optional)",
      name: "description",
      placeholder: "Description",
      type: "text",
      icon: FileText,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "Email",
      type: "email",
      icon: Mail,
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone_number",
      placeholder: "Phone Number",
      type: "tel",
      icon: Phone,
    },
    {
      label: "Company",
      name: "company",
      placeholder: "Company",
      type: "text",
      icon: Building,
    },
    {
      label: "Address",
      name: "address",
      placeholder: "Address",
      type: "text",
      icon: MapPin,
    },
    {
      label: "Social Links",
      name: "social_link",
      placeholder: "Social Link",
      type: "url",
      icon: Link,
    },
  ];

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Create New Card
        </h2>
        <p className="text-gray-600">Fill in the details to create your card</p>
      </div>

      <div className="space-y-6">
        {inputFields.map(({ label, name, placeholder, type, icon: Icon }) => (
          <div>
            <span>{label}</span>
            <div key={name} className="relative">
              <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>
          </div>
        ))}

        <button className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
          Create Card
        </button>
      </div>
    </div>
  );
};

export default CreateCardInput;
