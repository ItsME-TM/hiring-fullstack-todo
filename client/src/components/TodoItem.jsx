import { FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { set } from "mongoose";

export default function TodoItem({}){
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState("");
    const [editDescription, setEditDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSaveEdit = () => {
        console.log("Save Edit Clicked");
    }

    const handleCancelEdit = () => {
        setIsEditing(false);
    }

    const handleToggleDone = () => {
        console.log("Toggle Done Clicked");
    }

    const handleDelete = () => {
        console.log("Delete Clicked");
    }

    const todo = {
        title: "Sample Todo",
        description: "This is a sample description for the todo item.",
        done: false,
        createdAt: new Date(),
    };

    return(
        <li
            className = {`bg-white p-4 rounded-lg shadow-md transition-all ${
                todo.done ? "opacity-60" : ""
            } ${isLoading ? "pointer-events-none opacity-50" : ""}`}
        >
            {isEditing ? (
                //Edit Mode
                <div className = "space-y-3">
                    <input
                        type = "text"
                        value = {editTitle}
                        onChange = {(e) => setEditTitle(e.target.value)}
                        className = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <textarea
                        value = {editDescription}
                        onChange = {(e) => setEditDescription(e.target.value)}
                        rows = "4"
                        placeholder = "Description"
                        className = "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                    />
                    <div className = "flex gap-2">
                        <button 
                            onClick = {handleSaveEdit}
                            className = "flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            <FaCheck /> Save
                        </button>
                        <button
                            onClick={handleCancelEdit}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors">
                            <FaTimes /> Cancel
                        </button>
                    </div>
                </div>
                ):(
                    //Display Mode
                    <div className = "flex items-start gap-3">
                        <input 
                            type = "checkbox"
                            checked = {todo.done}
                            onChange = {handleToggleDone}
                            className = "mt-1 w-5 h-5 cursor-pointer"
                        />
                        <div className = "flex-1">
                            <h3 className = {
                                `text-lg font-semibold ${
                                todo.done ? "line-through text-gray-500" : "text-gray-800"
                                }`
                            }>
                                {todo.title}
                            </h3>
                            {todo.description && (
                                <p 
                                    className = {`mt-1 text-sm ${
                                    todo.done ? "line-through text-gray-400" : "text-gray-600"
                                    }`}
                                >
                                    {todo.description}
                                </p>
                            )}
                            <p className = "mt-2 text-xs text-gray-400">
                                Created : {new Date(todo.createdAt).toLocaleDateString()}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className = "flex gap-2">
                            <button 
                                onClick = {() => {setIsEditing(true)}}
                                title = "Edit"
                                className = "p-2 text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                                <FaEdit size = {18}/>
                            </button>
                            <button
                                onClick = {() => handleDelete}
                                title = "Delete"
                                className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                            >
                                <FaTrash size = {18}/>
                            </button>
                        </div>
                    </div>
                )
            }
        </li>
    );
}



