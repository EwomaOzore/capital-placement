import React, { useRef, useState } from 'react';
import { BsUpload } from 'react-icons/bs';

const UploadBox: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleUploadClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const handleDeleteClick = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset the file input
        }
    };

    return (
        <div className="w-[50%] bg-white shadow-md rounded-2xl">
            <label className="cursor-pointer">
                <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <div className="bg-[#D0F7FA] p-2 rounded-t-2xl">
                    <p className="font-bold text-lg pl-3">Upload Cover Image</p>
                </div>
                <div className="p-10">
                    {selectedFile ? (
                        <div className="flex flex-col p-4 text-center border border-dashed border-t border-r border-b border-l border-black rounded-sm">
                            <div className="mx-auto mb-4">
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Preview"
                                    className="w-32 h-32 object-contain"
                                />
                            </div>
                            <p className="font-bold">Image Uploaded</p>
                            <p className="text-gray-600 text-sm">16:9 ratio is recommended. Max image size 1mb</p>
                            <div className="mt-4 space-x-2">
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={handleDeleteClick}
                                >
                                    Delete
                                </button>
                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                    onClick={handleUploadClick}
                                >
                                    Re-upload
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex flex-col p-4 text-center border border-dashed border-t border-r border-b border-l border-black rounded-sm cursor-pointer"
                            onClick={handleUploadClick}
                        >
                            <div className="mx-auto mb-4">
                                <BsUpload className="text-2xl" />
                            </div>
                            <p className="font-bold">Upload cover image</p>
                            <p className="text-gray-600 text-sm">16:9 ratio is recommended. Max image size 1mb</p>
                        </div>
                    )}
                </div>
            </label>
        </div>
    );
};

export default UploadBox;