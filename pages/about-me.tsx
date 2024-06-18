import { useRouter } from "next/router";
import { useState } from "react";

export default function AboutMe() {
  const router = useRouter();
  const [form, setForm] = useState({
    aboutMe: "",
    partnerPreferences: "",
    preferredAgeRange: "",
    preferredHeight: "",
    preferredEducationLevel: "",
    preferredOccupation: "",
    preferredLocation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process form data or submit it to the server here
    console.log("Form submitted:", form);
    alert("Form submitted!");
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold">
          About Me & Partner Preferences
        </h2>
        <div className="mb-4">
          <label className="block mb-2">About Me</label>
          <textarea
            name="aboutMe"
            value={form.aboutMe}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Partner Preferences</label>
          <textarea
            name="partnerPreferences"
            value={form.partnerPreferences}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preferred Age Range</label>
          <input
            type="text"
            name="preferredAgeRange"
            value={form.preferredAgeRange}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preferred Height</label>
          <input
            type="text"
            name="preferredHeight"
            value={form.preferredHeight}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preferred Education Level</label>
          <input
            type="text"
            name="preferredEducationLevel"
            value={form.preferredEducationLevel}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preferred Occupation</label>
          <input
            type="text"
            name="preferredOccupation"
            value={form.preferredOccupation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Preferred Location</label>
          <input
            type="text"
            name="preferredLocation"
            value={form.preferredLocation}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
