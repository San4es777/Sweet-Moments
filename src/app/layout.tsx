import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Sweet Moments — домашня кондитерська в Одесі",
  description: "Домашні торти та десерти на замовлення в Одесі. Sweet Moments — made with love.",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="uk"><body>{children}</body></html>;
}