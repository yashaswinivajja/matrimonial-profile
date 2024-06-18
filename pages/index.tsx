import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/basic-details");
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <button
        onClick={handleStart}
        className="px-6 py-3 text-white bg-blue-600 rounded-lg"
      >
        Start
      </button>
    </div>
  );
}
