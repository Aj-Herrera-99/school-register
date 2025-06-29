import { useState, type Dispatch, type SetStateAction } from "react";
import Loader from "./Loader";

export default function DeleteModalAssignment({
    isOpen,
    setIsOpen,
    destroyAssignment,
    assignmentId,
    assignmentBody,
    isDestroyPending,
}: {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    destroyAssignment: (assignmentId: number) => void;
    assignmentId: number;
    assignmentBody: string;
    isDestroyPending: boolean;
}) {
    return (
        <div className="p-6">
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 ">
                        <h5 className="text-lg text-black font-semibold mb-4">
                            Do you really want to delete this assignment?
                        </h5>
                        <div className="flex justify-between">
                            <div></div>
                            <div></div>
                        </div>
                        <p className="mb-6 text-sm text-gray-600 clamped-text">
                            {assignmentBody}
                        </p>
                        {isDestroyPending ? (
                            <Loader isContained={true} />
                        ) : (
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() =>
                                        destroyAssignment(assignmentId)
                                    }
                                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
