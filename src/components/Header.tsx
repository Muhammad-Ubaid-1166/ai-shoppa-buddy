import { Search, ShoppingCart, Plus, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  cartItemsCount: number;
  cartTotal: number;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const Header = ({ cartItemsCount, cartTotal, searchTerm, onSearchChange }: HeaderProps) => {
  return (
    <header className="fixed top-12 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="text-2xl">🛍️</div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TechMart
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">Home</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">Features</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 w-48 lg:w-64"
              />
            </div>

            {/* Cart */}
            <Button variant="outline" className="relative">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Add Product */}
            <Button className="primary-gradient text-white font-semibold relative overflow-hidden pulse-glow">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
              <span className="absolute -top-1 -right-1 bg-warning text-warning-foreground text-xs px-1 rounded text-[10px] font-bold">
                NEW
              </span>
            </Button>

            {/* AI Chat Toggle */}
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <MessageCircle className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">AI Help</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};