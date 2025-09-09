import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const startDemo = () => {
    // This will be handled by the ChatWidget component
    const chatWidget = document.querySelector('[data-chat-widget]');
    if (chatWidget) {
      (chatWidget as any).click();
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-20 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main heading */}
          <div className="mb-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
              Smart Shopping with{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  AI
                </span>
                <Sparkles className="absolute -top-2 -right-8 h-8 w-8 text-yellow-300 animate-bounce-gentle" />
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-stagger">
            Create, discover, and shop with our intelligent AI assistant that knows every product in our marketplace. 
            Experience the future of e-commerce today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-stagger">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              onClick={startDemo}
              className="border-white text-white bg-white/10 backdrop-blur hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold rounded-full"
            >
              Try AI Demo
              <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center animate-fade-in-stagger">
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-white/80 text-sm">AI Assistant</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">∞</div>
              <div className="text-white/80 text-sm">Products to Add</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="text-white/80 text-sm">Secure Shopping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};