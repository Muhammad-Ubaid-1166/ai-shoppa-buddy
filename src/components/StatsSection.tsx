interface StatsSectionProps {
  productCount: number;
}

const stats = [
  {
    label: "Products Available",
    value: (count: number) => count.toString(),
    suffix: ""
  },
  {
    label: "AI Assistant Available",
    value: () => "24/7",
    suffix: ""
  },
  {
    label: "Products You Can Add", 
    value: () => "∞",
    suffix: ""
  },
  {
    label: "Happy Customers",
    value: () => "10K+",
    suffix: ""
  }
];

export const StatsSection = ({ productCount }: StatsSectionProps) => {
  return (
    <section className="py-20 primary-gradient text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 0L0 20L20 40L40 20Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="animate-fade-in-stagger"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 animate-bounce-gentle">
                {stat.value(productCount)}
                {stat.suffix}
              </div>
              <div className="text-white/90 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};