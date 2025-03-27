"use client";
import React, { useState } from "react";
import { Send, Loader2 } from "lucide-react";

const Page = () => {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [description, setDescription] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setDescription([]);

    try {
      console.log("Sending request to backend...");
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      });

      console.log("Response received:", response);

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const responseText = await response.text();
      console.log("Raw response:", responseText);

      setDescription([responseText]);
    } catch (error) {
      console.error("Error:", error);
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="bg-gray-800 rounded-lg shadow-xl p-6 border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">
          Algorithm Suggestion Generator
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Describe your use case
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Example: I need to sort a large dataset efficiently..."
            />
          </div>
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-200 shadow-md ${
              isLoading || !input.trim()
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-lg"
            }`}
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-10 h-5 w-5" />
                Generating...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Get Suggestion
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-600 text-white rounded-lg">
            <p>{error}</p>
          </div>
        )}

        {description.length > 0 && (
          <div className="mt-8 p-6 bg-gray-700 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-4">
              Suggested Approach
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
