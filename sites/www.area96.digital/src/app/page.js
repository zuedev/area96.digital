import VideoBackground from "@/components/VideoBackground";

import "./page.css";

export default function Home() {
  return (
    <>
      <VideoBackground src="4124198-hd_1920_1080_24fps.mp4" type="video/mp4" />
      <div className="flex flex-col p-4 min-h-full">
        <main className="space-y-4 max-w-prose text-justify grow">
          <h1 className="text-4xl font-bold area96gradientText">
            Area 96 Digital
          </h1>
          <blockquote className="text-xl">
            Open-source management services for the post-modern era. ✨
          </blockquote>
          <p className="text-lg">
            From art publishing to influencer marketing, we provide the tools
            and services to help you manage your digital presence with ease. Our
            aim is to help you focus on what you do best, while we take care of
            the rest.
          </p>
        </main>
        <footer className="text-sm">
          Made with ❤️ by{" "}
          <a
            href="https://zue.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline"
          >
            zuedev
          </a>
        </footer>
      </div>
    </>
  );
}
