import GlassPane from "@/components/GlassPane";
import "@/styles/global.css";

export default function AuthRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="h-screen w-screen rainbow-mesh p-6">
        <GlassPane className="h-full w-full flex items-center justify-center">
          {children}
        </GlassPane>
      </body>
    </html>
  );
}
