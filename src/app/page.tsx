export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Left */}
      <div className="w-1/4 bg-blue-900 text-white p-6 hidden md:block">
        <h2 className="text-xl font-semibold">About JavaScript</h2>
        <p className="mt-4">Learn the basics of JavaScript, one of the most popular programming languages!</p>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-2/4 p-6 bg-white mx-auto rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-blue-700 border-b-2 border-gray-200 pb-2 text-center">
          JavaScript: A Complete Beginner's Guide
        </h1>
        <p className="mt-4 text-gray-700">
          JavaScript is a foundational technology in web development, enabling everything from interactive buttons to complex web applications. If you’re new to programming, JavaScript is one of the best languages to start with, thanks to its straightforward syntax, wide support, and endless resources. This guide covers the basics of JavaScript, so let’s dive in!
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">What is JavaScript?</h2>
        <p className="text-gray-700">
          JavaScript (JS) is a high-level, interpreted programming language primarily used for making web pages interactive. Originally created in 1995, JavaScript is now a core web technology, used in client-side (browser-based) as well as server-side applications.
        </p>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">Why Learn JavaScript?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4 ml-4">
          <li><strong>Job Opportunities</strong>: Web development, mobile apps, and backend servers all use JavaScript.</li>
          <li><strong>Interactivity</strong>: JavaScript is the go-to language for making web pages interactive.</li>
          <li><strong>Large Ecosystem</strong>: The language has an active community, and numerous frameworks (e.g., React, Vue) simplify the coding process.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-2">Setting Up JavaScript</h2>
        <p className="text-gray-700">
          You don,t need any special software to start coding in JavaScript—just a text editor and a web browser. Here are the steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 mt-4 ml-4">
          <li><strong>Text Editor</strong>: Choose a code editor like VS Code or Sublime Text.</li>
          <li><strong>Browser Console</strong>: All modern browsers (Chrome, Firefox, Edge) have built-in developer tools, where you can run JavaScript code.</li>
        </ol>

        {/* Additional content can go here... */}
      </div>

      {/* Sidebar Right */}
      <div className="w-1/4 bg-gray-200 p-6 hidden md:block">
        <h2 className="text-xl font-semibold">Related Resources</h2>
        <ul className="space-y-2 mt-4 text-blue-900">
          <li><a href="#" className="hover:underline">JavaScript Documentation</a></li>
          <li><a href="#" className="hover:underline">freeCodeCamp</a></li>
          <li><a href="#" className="hover:underline">MDN Web Docs</a></li>
        </ul>
      </div>
    </div>
  );
}
