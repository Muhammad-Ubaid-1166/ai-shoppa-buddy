import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { StatsSection } from "@/components/StatsSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ChatWidget } from "@/components/ChatWidget";
import { Footer } from "@/components/Footer";
import { FeatureBanner } from "@/components/FeatureBanner";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

// Import product images
import laptopHero from "@/assets/laptop-hero.jpg";
import phoneHero from "@/assets/phone-hero.jpg";
import tabletHero from "@/assets/tablet-hero.jpg";

export interface Product {
  id: string;
  product_id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  image_url?: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { toast } = useToast();

  // Mock data for demo - replace with actual API calls
  const mockProducts: Product[] = [
    {
      id: "1",
      product_id: "TECH-001",
      name: "MacBook Pro 14-inch",
      price: 1999,
      category: "laptops",
      description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD. Perfect for professionals and creators.",
      image_url: laptopHero
    },
    {
      id: "2", 
      product_id: "TECH-002",
      name: "iPhone 15 Pro Max",
      price: 1199,
      category: "mobiles_phones",
      description: "Latest iPhone with A17 Pro chip, 256GB storage, Pro camera system.",
      image_url: phoneHero
    },
    {
      id: "3",
      product_id: "TECH-003", 
      name: "iPad Pro 12.9-inch",
      price: 899,
      category: "tablets",
      description: "M2 chip, 128GB storage, Liquid Retina XDR display with ProMotion.",
      image_url: tabletHero
    },
    {
      id: "4",
      product_id: "TECH-004",
      name: "Samsung Galaxy S24 Ultra",
      price: 1299,
      category: "mobiles_phones", 
      description: "AI-powered smartphone with S Pen, 200MP camera, 1TB storage.",
      image_url: phoneHero
    },
    {
      id: "5",
      product_id: "TECH-005",
      name: "Dell XPS 13 Plus",
      price: 1149,
      category: "laptops",
      description: "Intel 12th Gen i7, 16GB LPDDR5, 512GB SSD, InfinityEdge display.",
      image_url: laptopHero
    },
    {
      id: "6",
      product_id: "TECH-006",
      name: "Microsoft Surface Pro 9",
      price: 999,
      category: "tablets",
      description: "Intel 12th Gen processors, 2-in-1 design, up to 15.5 hours battery life.",
      image_url: tabletHero
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.product_id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1
        }];
      }
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-background">
      <FeatureBanner />
      
      <Header 
        cartItemsCount={cartItemsCount}
        cartTotal={cartTotal}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <HeroSection />
      
      <FeaturesSection />
      
      <StatsSection productCount={products.length} />
      
      <ProductsSection
        products={filteredProducts}
        loading={loading}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        onAddToCart={addToCart}
      />
      
      <Footer />
      
      <ChatWidget products={products} />
      
      <Toaster />
    </div>
  );
};

export default Index;