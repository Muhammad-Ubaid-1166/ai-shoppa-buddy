export const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-2xl">🛍️</div>
              <h3 className="text-2xl font-bold">TechMart</h3>
            </div>
            <p className="text-background/80 mb-4 max-w-md">
              Experience the future of online shopping with personalized AI recommendations 
              and user-generated products. Shop smart, sell easy.
            </p>
            <div className="flex space-x-4">
              <div className="text-sm text-background/60">
                Powered by AI Shopping Assistant
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#home" className="hover:text-background transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-background transition-colors">Products</a></li>
              <li><a href="#features" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#about" className="hover:text-background transition-colors">About</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-background/60 text-sm mb-4 md:mb-0">
            &copy; 2025 TechMart. All rights reserved.
          </div>
          <div className="text-background/60 text-sm">
            Built with ❤️ using AI-powered technology
          </div>
        </div>
      </div>
    </footer>
  );
};