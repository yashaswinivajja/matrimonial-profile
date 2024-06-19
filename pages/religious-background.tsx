import { useRouter } from "next/router";
import { useState } from "react";

export default function ReligiousBackground() {
  const router = useRouter();
  const [form, setForm] = useState({
    religion: "",
    caste: "",
    zodiacSign: "",
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
    router.push("/educational-info");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 mt-8 bg-white bg-opacity-90 rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">
          Religious Background
        </h2>
        <div className="mb-4">
          <label className="block mb-2">Religion</label>
          <input
            type="text"
            name="religion"
            value={form.religion}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Caste</label>
          <input
            type="text"
            name="caste"
            value={form.caste}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Zodiac Sign</label>
          <input
            type="text"
            name="zodiacSign"
            value={form.zodiacSign}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
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
