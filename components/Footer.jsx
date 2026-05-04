import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-8">

        <div>
          <h3 className="font-bold text-lg mb-4">Filters</h3>
          <div className="flex gap-3 text-sm text-gray-300">
            <span>All</span>
            <span>Electronics</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-3">
            <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500">
              <Facebook size={16} />
            </Link>
            <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500">
              <Twitter size={16} />
            </Link>
            <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500">
              <Instagram size={16} />
            </Link>
          </div>
        </div>

      </div>

      <div className="border-t border-blue-900 px-6 py-4 text-sm text-gray-400">
        © 2024 American
      </div>

    </footer>
  );
}