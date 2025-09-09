import { Bot, Plus, Search, Smartphone, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Bot,
    title: "AI Shopping Assistant",
    description: "Get personalized product recommendations and instant answers about our entire catalog with advanced AI technology."
  },
  {
    icon: Plus,
    title: "Create Products", 
    description: "Add your own products with images, descriptions, and pricing. Our AI instantly learns about them!"
  },
  {
    icon: Search,
    title: "Smart Search",
    description: "Find exactly what you need with intelligent search that understands context and product relationships."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Perfect shopping experience on any device - desktop, tablet, or mobile."
  },
  {
    icon: Zap,
    title: "Real-time Updates",
    description: "Products appear instantly after creation and our AI knows about them immediately."
  },
  {
    icon: Shield,
    title: "Secure Platform", 
    description: "Built with modern security best practices and safe file upload handling."
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience next-generation e-commerce with AI-powered features designed to make shopping and selling effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card hover:bg-card-hover transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 shadow-md animate-fade-in-stagger group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};