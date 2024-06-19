import { useRouter } from "next/router";
import { useState } from "react";

export default function PersonalInfo() {
  const router = useRouter();
  const [form, setForm] = useState({
    height: "",
    weight: "",
    bloodGroup: "",
    dietaryPreference: "",
    habits: "",
    community: "",
    maritalStatus: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/religious-background");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 mt-8 bg-white bg-opacity-90 rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">Personal Info</h2>
        <div className="mb-4">
          <label className="block mb-2">Height</label>
          <input
            type="text"
            name="height"
            value={form.height}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Weight</label>
          <input
            type="text"
            name="weight"
            value={form.weight}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Blood Group</label>
          <input
            type="text"
            name="bloodGroup"
            value={form.bloodGroup}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Dietary Preference</label>
          <input
            type="text"
            name="dietaryPreference"
            value={form.dietaryPreference}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Habits</label>
          <input
            type="text"
            name="habits"
            value={form.habits}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Community</label>
          <input
            type="text"
            name="community"
            value={form.community}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Marital Status</label>
          <select
            name="maritalStatus"
            value={form.maritalStatus}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          >
            <option value="">Select Status</option>
            <option value="unmarried">Unmarried</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widow">Widow</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-orange-600 rounded-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
