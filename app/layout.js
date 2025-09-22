import "./globals.css";
import TopLoader from "@/components/TopLoader";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <TopLoader />
        {children}
        </body>
        </html>
    );
}
