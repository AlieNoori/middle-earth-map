import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "../styles/globals.css";

export const metadata: Metadata = {
	title: "Middle-Earth Map",
	description: "Generated by create next app",
};

const lora = Lora({
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lora.className} ${lora.style} bg-background text-black antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
