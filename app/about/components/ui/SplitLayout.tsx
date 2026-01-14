interface SplitLayoutProps {
  children: React.ReactNode;
  reverse?: boolean;
}

export default function SplitLayout({
  children,
  reverse = false,
}: SplitLayoutProps) {
  return (
    <div
      className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {children}
    </div>
  );
}
