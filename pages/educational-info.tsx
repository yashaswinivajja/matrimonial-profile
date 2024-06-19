import { useRouter } from "next/router";
import { useState } from "react";

export default function EducationalInfo() {
  const router = useRouter();
  const [form, setForm] = useState({
    familyDetails: "",
    qualification: "",
    income: "",
    work: "",
    college: "",
    yearPassedOut: "",
    job: "",
    degree: "",
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
    router.push("/about-me");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 mt-8 bg-white bg-opacity-90 rounded-lg shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold text-center">
          Educational Info & Family Details
        </h2>
        <div className="mb-4">
          <label className="block mb-2">Family Details</label>
          <input
            type="text"
            name="familyDetails"
            value={form.familyDetails}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Qualification</label>
          <input
            type="text"
            name="qualification"
            value={form.qualification}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Income</label>
          <input
            type="text"
            name="income"
            value={form.income}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Where do you work?</label>
          <input
            type="text"
            name="work"
            value={form.work}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Which college?</label>
          <input
            type="text"
            name="college"
            value={form.college}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Year Passed Out</label>
          <input
            type="text"
            name="yearPassedOut"
            value={form.yearPassedOut}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">What job do you do?</label>
          <input
            type="text"
            name="job"
            value={form.job}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Degree/Other field of study</label>
          <input
            type="text"
            name="degree"
            value={form.degree}
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
