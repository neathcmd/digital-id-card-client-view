import ProfileLayout from "@/components/layouts/ProfileLayout";
// import CreateCardForm from "./components/CreateCardForm";
import CreateCardInput from "./components/CreateCardInput";

export default function CreateCard() {
  return (
    <ProfileLayout>
      <div className="max-w-2xl mx-auto p-6">
        {/* Form Create Card */}
        {/* <CreateCardForm /> */}
        {/* <h1>This is create card</h1> */}
        <CreateCardInput
          formData={{
            fullName: "",
            description: "",
            socialMedia: "",
            position: "",
            // Add other required fields with default values
            email: "",
            phoneNumber: "",
            address: "",
            // avatarUrl: "",
            company: "",
          }}
        />
      </div>
    </ProfileLayout>
  );
}
