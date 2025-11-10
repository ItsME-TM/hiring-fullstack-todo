import { useState } from "react";


export default function TodoForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {

    }

    return(
        <div>
            <form className = "bg-grey-100 p-6 rounded-lg shadow-md mb-6">
                <h2 className = "text-3xl font-semibold mb-4 text-gray-800">To do List</h2>
                {/* Error Message */}
                {
                    error && (
                        <div className = "mb-4 p-2 bg-red-100 boarder border-red-400 text-red-700 rounded">
                            {error}
                        </div>
                    )
                }
                <div className = "mb-4">
                    <label htmlFor = "title" className = "block text-gray-700 fontmedium mb-2">
                        Title <span className = "text-red-500">*</span>
                    </label>
                    <input
                        type = "title"
                        value = {title}
                        onChange = {(e) => setTitle(e.target.value)}
                        placeholder = "Enter new Todo"
                        className = "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                        disabled = {isLoading}
                    />
                </div>
                {/* Description Input */}
                <div className = "mb-4">
                    <label html = "description" className = "block text-gray-700 font-medium mb-2">
                        Description
                    </label>
                    <textarea
                        id = "description"
                        value = {description}
                        onChange = {(e) => setDescription(e.target.value)}
                        placeholder = "Enter todo description (otional)"
                        rows = "3"
                        className = "w-full px-4 py-2 border border-grey-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                        disabled = {isLoading}
                    />
                </div>

                {/* Submit Button */}
                <button
                    type = "submit"
                    disabled = {isLoading}
                    className = { `w-full py-2 px-4 rounded-lg font-medium transition-colors 
                        ${
                        isLoading ? "bggray-400 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 text-white"
                        }`
                    }
                >
                    {isLoading ? "Adding..." : "Add Todo"}
                </button>
            </form>
        </div>
    );
};

