import Link from "next/link";

export const CancelButton = () => {
  return (
    <Link
      href=".."
      className="border border-red-500 rounded-md px-4 py-1 text-red-500 hover:bg-red-500 hover:text-white transition duration-300 ease-in-out"
    >
      Cancel
    </Link>
  );
};
