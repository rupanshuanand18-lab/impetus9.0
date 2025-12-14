export default function Hero() {
  return (
    <section className="relative  min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-black">
      {/* Glow animation */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Impetus watermark */}
      <div className="absolute inset-0 bg-[url('/impetus.png')] bg-center bg-no-repeat bg-contain opacity-[0.04]" />

      {/* Abstract tech overlay */}
      <div className="absolute inset-0 bg-[url('/impetus-logo.png')] bg-cover bg-center opacity-10" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-white">
        <div>
          <h1 className="mb-4 text-5xl font-bold">SPONSOR IMPETUS 9.0</h1>
          <h2 className="mb-2 font-bold">
            Partner with Innovation & Shape the Future of Engineering
          </h2>
          <p className="mb-6 text-lg opacity-75">
            Annual Technical Fest of Mechanical Engineering
            <br />
            IIEST Shibpur | 13–15 February 2026
          </p>
          <button className="rounded-lg bg-blue-600 px-6 py-3 transition hover:bg-blue-700">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
   
  );
}
