import { Navbar } from "@/components";

export const metadata = {
 title: 'SEO Title',
 description: 'SEO Title',
};
export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}