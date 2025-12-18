

export const codeExamples ={
    // "key" : "value"
    "App.jsx": `
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
    return (
        <div className="min-h-screen bg-slate-900 overflow-hidden">
            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    )
}

export default App
    `,

    "Hero.jsx": `
export default function Hero() {
    return (
        <SyntaxHighlighter 
            language="javascript" 
            style={nightOwl}
            customStyle={{
                margin: 0, 
                borderRadius: "8px", 
                fontSize: "12px", 
                lineHeight: "1.4", 
                height: "100%", 
                border: "1px solid #3c3c3c"
            }}
        >
            {codeExamples[activeTab]}
        </SyntaxHighlighter>
    )
}

export default App
    `,

    "Navbar.jsx": `        
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-900/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="/saya.png"
                className="w-6 h-6 sm:w-8 sm:h-8"
                alt="SAYA"
              />
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-medium">
    `
}

export const floatingCards = {
    "App.jsx" : {
        bgColor: "bg-blue-500/20",
        iconColor: "text-blue-400",
        textColor: "text-blue-200",
        contentColor: "text-blue-300",
        icon: "AI",
        title: "Smart Completion",
        content: "AI-powered code suggestions in real-time"
    },
    "Hero.jsx" : {
        bgColor: "bg-purple-500/20",
        iconColor: "text-purple-400",
        textColor: "text-purple-200",
        contentColor: "text-purple-300",
        icon: "⚡",
        title: "Auto Animation",
        content: "Dynamic typing effects generated automatically"
    },
    "Navbar.jsx" : {
        bgColor: "bg-emerald-500/20",
        iconColor: "text-emerald-400",
        textColor: "text-emerald-200",
        contentColor: "text-emerald-300",
        icon: "🔍",
        title: "Smart Search",
        content: "Intelligent code search across your project"
    }
}