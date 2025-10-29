import heroImage from '@assets/generated_images/Highway_road_hero_background_de9198e2.png';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 py-20 max-w-5xl mx-auto">
        <h1 className="text-8xl md:text-9xl font-bold text-[#FFD700] mb-6" data-testid="text-hero-title">
          RunAM
        </h1>
        
        <h2 className="text-2xl md:text-3xl text-white font-normal mb-6" data-testid="text-hero-tagline">
          Your Route. Their Package. One Simple Connection.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10" data-testid="text-hero-subtitle">
          Join Africa's peer-to-peer delivery network where every trip can earn you more, and every package arrives faster.
        </p>

        <button className="bg-[#2D8A54] hover:bg-[#2D8A54]/90 text-white px-10 py-4 text-lg font-semibold rounded-full transition-colors" data-testid="button-hero-get-started">
          Get Started
        </button>
      </div>
    </section>
  );
}
