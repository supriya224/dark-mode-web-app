"use client"
import Collections from '@/components/collections/Collections'
import Sports from '@/components/sports/Sports'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const handleSwitch = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-gray-50"}`}>
    <button type="button" onClick={handleSwitch} className="">
          {theme === "dark" ? "Light" : "Dark"}
        </button>
        <Sports/>
        <Collections/>
    </div>
  )
}

export default Page