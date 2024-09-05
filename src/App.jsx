import { useState } from 'react';
import 'daisyui/dist/full.css';
import './components/Footer.jsx'
function App() {
  const [alternatives, setAlternatives] = useState({
    alt1: '',
    alt2: '',
    alt3: '',
    alt4: ''
  });

  const [decision, setDecision] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false); // Track dark mode state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlternatives({ ...alternatives, [name]: value });
  };

  const handleDecision = () => {
    const options = Object.values(alternatives).filter(Boolean); // Filter out empty values
    if (options.length === 4) {
      const randomChoice = options[Math.floor(Math.random() * options.length)];
      setDecision(`The decision is: ${randomChoice}`); // Set the decision to state
      console.log(`The decision is: ${randomChoice}`); // Log the decision for debugging
    } else {
      setDecision("Please fill in all four alternatives!");
      console.log("Please fill in all four alternatives!"); // Log an error for debugging
    }
  };

  // Handle theme switching
  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode); // Toggle the state
    document.documentElement.setAttribute('data-theme', !isDarkMode ? 'night' : 'winter'); // Apply the theme
    console.log(`Theme switched to ${!isDarkMode ? 'night' : 'winter'}`);
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Navbar */}
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Decision Maker</a>
        </div>
        {/* TEMPORARY Theme Switcher with Button */}
        <div className="flex-none">
          <button className="btn" onClick={handleThemeSwitch}>
            {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Decision Maker</h2>
            <input
              type="text"
              name="alt1"
              placeholder="Alternative 1"
              className="input input-bordered w-full mb-2"
              value={alternatives.alt1}
              onChange={handleChange}
            />
            <input
              type="text"
              name="alt2"
              placeholder="Alternative 2"
              className="input input-bordered w-full mb-2"
              value={alternatives.alt2}
              onChange={handleChange}
            />
            <input
              type="text"
              name="alt3"
              placeholder="Alternative 3"
              className="input input-bordered w-full mb-2"
              value={alternatives.alt3}
              onChange={handleChange}
            />
            <input
              type="text"
              name="alt4"
              placeholder="Alternative 4"
              className="input input-bordered w-full mb-4"
              value={alternatives.alt4}
              onChange={handleChange}
            />
            <button
              className="btn btn-primary w-full"
              onClick={handleDecision} // Attach the handler
            >
              Pick a Decision
            </button>

            {/* Display the decision here */}
            {decision && (
              <p className="mt-4 text-lg font-semibold">{decision}</p> // Dynamically display the decision
            )}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
