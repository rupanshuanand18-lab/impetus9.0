interface ImpactItem {
  title: string;
  icon: string;
}

export default function ImpactCards({ items }: { items: ImpactItem[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-white/5 border border-white/10 rounded-xl p-5 text-center backdrop-blur-sm"
        >
          <div className="text-3xl mb-2">{item.icon}</div>
          <h4 className="font-semibold">{item.title}</h4>
        </div>
      ))}
    </div>
  );
}