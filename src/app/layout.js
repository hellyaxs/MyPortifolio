import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Elias Vitor | Engenheiro da Computação",
  description:
    "Portfólio de Elias Vitor — Desenvolvedor Full Stack apaixonado por transformar ideias em experiências digitais inovadoras.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="author" content="Elias Vitor" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0eff" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        />
        <link rel="icon" href="assets/images/logo.ico" />
        {/* Aplica o tema salvo antes da hidratação — evita flash e mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('selected-theme');if(t==='light')document.documentElement.classList.add('sun-theme');}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-body antialiased overflow-x-hidden bg-background text-foreground`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
