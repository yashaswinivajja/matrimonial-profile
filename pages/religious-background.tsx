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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold">Religious Background</h2>
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
          className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
