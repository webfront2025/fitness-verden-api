import './globals.css';
import { Ubuntu as UbuntuFont } from "next/font/google";
export const metadata = {
    title: {
        template: "%s |Fitness Verden",
    default: "Fitness Verden",
  },
  description: "Fitness World is a small chain of gyms,",
};

const ubuntu = UbuntuFont({
  subsets: ["latin"],
  weight: "400",
});



export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={` bg-white  antialiased`}>
                {children}
            </body>
        </html>
    );
}

