import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Laptop, Smartphone, Tablet, Package } from "lucide-react";
import { Product } from "@/pages/Index";

interface ProductsSectionProps {
  products: Product[];
  loading: boolean;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  onAddToCart: (product: Product) => void;
}

const categories = [
  { id: "all", name: "All Products", icon: Package },
  { id: "laptops", name: "Laptops", icon: Laptop },
  { id: "mobiles_phones", name: "Mobile Phones", icon: Smartphone },
  { id: "tablets", name: "Tablets", icon: Tablet },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "laptops": return "💻";
    case "mobiles_phones": return "📱";
    case "tablets": return "📱";
    default: return "🛍️";
  }
};

const getCategoryName = (category: string) => {
  switch (category) {
    case "laptops": return "Laptops";
    case "mobiles_phones": return "Mobile Phones"; 
    case "tablets": return "Tablets";
    default: return "Other";
  }
};

export const ProductsSection = ({ 
  products, 
  loading, 
  selectedCategory, 
  onCategoryChange, 
  onAddToCart 
}: ProductsSectionProps) => {
  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-slide-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Featured Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse our AI-curated collection or create your own products to add to the marketplace.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id 
                  ? "primary-gradient text-white shadow-lg hover:shadow-xl transform hover:scale-105" 
                  : "hover:border-primary hover:text-primary"
              }`}
            >
              <category.icon className="h-4 w-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-pulse">
              <div className="text-6xl mb-4">🤖</div>
              <div className="text-xl text-muted-foreground">AI is loading products...</div>
            </div>
          </div>
        ) : products.length === 0 ? (
          <Card className="p-16 text-center bg-muted/30 border-dashed">
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">No products found</h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Be the first to add a product to our marketplace! Create innovative products that others will love.
            </p>
            <Button className="primary-gradient text-white px-8 py-3 rounded-full font-semibold">
              <Package className="h-4 w-4 mr-2" />
              Add First Product
            </Button>
          </Card>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card 
                key={product.id} 
                className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 product-card-hover animate-fade-in-stagger bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image */}
                <div className="aspect-square bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center text-6xl relative overflow-hidden">
                  {product.image_url ? (
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-primary/60 group-hover:scale-110 transition-transform duration-300">
                      {getCategoryIcon(product.category)}
                    </span>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-6">
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-3 text-xs font-semibold">
                    {getCategoryName(product.category)}
                  </Badge>

                  {/* Product Name */}
                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="text-2xl font-bold text-success mb-3">
                    ${product.price.toLocaleString()}
                  </div>

                  {/* Product ID */}
                  <div className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded mb-3 inline-block">
                    ID: {product.product_id}
                  </div>

                  {/* Description */}
                  {product.description && (
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {product.description}
                    </p>
                  )}

                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => onAddToCart(product)}
                    className="w-full primary-gradient text-white font-semibold py-3 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};