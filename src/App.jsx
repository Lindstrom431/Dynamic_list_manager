import { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-teal-600 mb-4">
          Dynamic List Manager
        </h1>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter an item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-grow p-2 border border-teal-400 rounded-l-md placeholder-gray-400 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          <button
            onClick={handleAddItem}
            className="bg-teal-500 hover:bg-teal-600 text-white px-4 rounded-r-md font-medium"
          >
            Add Item
          </button>
        </div>

        <div className="border border-teal-200 bg-[#f0fefc] p-4 rounded-md min-h-[80px]">
          {items.length === 0 ? (
            <p className="text-gray-500 text-sm">No items yet.</p>
          ) : (
            <ul className="list-disc pl-5 text-teal-700">
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
