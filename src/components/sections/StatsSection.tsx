import { stats } from "@/data/site";

export function StatsSection() {
  return (
    <section className="bg-blue-700 text-white py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-blue-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
