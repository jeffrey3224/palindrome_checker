"use client"

import { useState } from "react";

export default function PalindromeChecker() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [isPalindrome, setIsPalindrome] = useState<boolean | null>(null);
  const handleCheck = () => {
    const regex = /[\s\W_]/g;
    const formatted = input.replace(regex, "").toLowerCase();

    if (formatted === "") {
      alert("Please input a value");
      setResult("");
      setIsPalindrome(null);
      return;
    }

    const reversed = formatted.split("").reverse().join("");

    if (reversed === formatted) {
      setResult(`${input} is a palindrome.`);
      setIsPalindrome(true);
    } else {
      setResult(`${input} is not a palindrome.`);
      setIsPalindrome(false);
    }
  };

  const tags = ["react", "typescript", "tailwind"]

  return (
    <main className="px-10 relative z-10">
      <div className="max-w-[1200px] bg-white shadow-2xl rounded-lg mx-auto px-10 my-10 py-10">
      <section className="mx-auto py-20 text-center border-3 border-black border-solid w-[50vw] rounded-lg flex flex-col items-center">
        <h1 className="text-5xl tracking-tightest font-bold mb-5 text-center">Palindrome Checker</h1>
        <h2 className="mb-5">Enter a word to check if it is a palindrome.</h2>
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 px-4 py-2 w-full mb-4 rounded max-w-[400px]"
            placeholder="Enter text"
          />
          <button
            onClick={handleCheck}
            className="bg-my-black text-white px-6 py-2 rounded hover:bg-gray-800"
          >
            Check
          </button>
      {result && (
        <p
          className={`mt-4 text-lg ${
            isPalindrome ? "text-green-600 font-bold" : "text-red-500 font-bold"}`}>
          {result}
        </p>
      )}
      </section>
    </main>
  )
}
