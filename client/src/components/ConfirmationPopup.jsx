import React, {useEffect} from 'react';
// Portal for rendering modal outside main DOM hierarchy (top of the app)
import { createPortal } from 'react-dom';


export const ConfirmationPopup = ({ isOpen, onConfirm, onCancel, message }) => {
    useEffect (() => {
        if (!isOpen) return;

        const originalOverflow = document.body.style.overflow;
        // Prevent background scrolling when modal is open
        document.body.style.overflow = 'hidden';

        const handleKey = (e) => {
            if (e.key === "Escape") onCancel();
        };
        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKey);
        }

    }, [isOpen, onCancel]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-40 flex items-center justify-center">
            {/* backdrop covers entire viewport; clicking it cancels */}
            <div
                // semi-transparent backdrop
                className="absolute inset-0 bg-black bg-opacity-60"
                onClick={onCancel}
                aria-hidden="true"
            />

            {/* modal container sits above backdrop (higher z-index) */}
            <div
                role="dialog"
                aria-modal="true"
                className="relative z-50 bg-white p-6 rounded-lg shadow-md max-w-lg w-full mx-4"
            >
                <h2 className="text-lg font-semibold mb-4">Confirmation</h2>
                <p className="mb-4">{message}</p>
                <div className="flex justify-end">
                    <button
                        onClick={onCancel}
                        className="mr-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};
