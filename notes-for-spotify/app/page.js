import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "tailwindcss/tailwind.css";
import Playlist from "./playlist/page";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="navbar navbar-light bg-slate-200">
        <span className="navbar-brand mx-auto font-mono">
          Notes-for-Spotify
        </span>
      </nav>
      <div className="playlist">
        <h2>My Cool Playlist</h2>
      </div>
      <Link href="/api/login">
        <button className="btn btn-primary">Login to Spotify</button>
      </Link>
    </main>
  );
}
