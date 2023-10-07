import Menu from "@/components/menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full min-h-screen relative">
      <Menu />
      <div className="w-full h-full ml-full max-md:ml-mobile">{children}</div>
    </div>
  );
}
