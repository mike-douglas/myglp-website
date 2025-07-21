import type { Metadata } from "next";
import { ConsentManagerProvider, CookieBanner, ConsentManagerDialog } from "@c15t/nextjs";
import { GoogleAnalytics } from "../components/GoogleAnalytics";

import "./reset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyGLP Companion",
  description: "A simple and beautiful GLP journey tracking app to help you reach your goals."
};

export default function MyGLPLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConsentManagerProvider options={{
          mode: 'offline',
          consentCategories: ['necessary', 'marketing'], // Optional: Specify which consent categories to show in the banner. 
        }}>
          <CookieBanner />
          <ConsentManagerDialog />
          <main>
            {children}
          </main>
          <GoogleAnalytics />
    		</ConsentManagerProvider>
      </body>
    </html>
  );
}
