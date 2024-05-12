'use client'

import { ChangeEvent, useCallback, useState } from "react";
import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from "@/components/ui/file-upload";
import { Paperclip, Trash2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { Button } from "../ui/button";

const FileSvgDraw = () => {
    return (
        <>
            <svg
                className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
            >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
            </svg>
            <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
                &nbsp; or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF
            </p>
        </>
    );
};

function getImageData(event: ChangeEvent<HTMLInputElement>) {
    // FileList is immutable, so we need to create a new one
    const dataTransfer = new DataTransfer();

    // Add newly uploaded images
    Array.from(event.target.files!).forEach((image) =>
        dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
}


const ImageUploader = () => {
    const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
    const onDrop = useCallback((acceptedFiles: File[]) => {
        setUploadedFiles(acceptedFiles)
    }, [])
    const { getRootProps, getInputProps } = useDropzone({ onDrop })

    const deletefile = (index: number) => {
        const upload = [...uploadedFiles]
        upload.splice(index, 1)
        setUploadedFiles(upload)
    }
    return (
        <div className="w-full">
            <label {...getRootProps()} className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                <FileSvgDraw />
            </label>
            <Input
                {...getInputProps()}
                id="dropzone-file"
                accept="image/png, image/jpeg"
                type="file"
                className="hidden"
            />
            {uploadedFiles &&
                uploadedFiles.map((file, index) => (
                    <div className="flex justify-between items-center p-3" key={index}>
                        <div className=" flex justify-start gap-4">
                            <Image
                                key={index}
                                alt="pic"
                                src={URL.createObjectURL(file)}
                                width={70}
                                height={70}
                                className=" rounded-md"
                            />
                            <div className=" text-xs">
                                <p>{file.name}</p>
                                <p>{file.type}</p>
                            </div>
                        </div>
                        <Button size="icon" variant="ghost" onClick={() => { deletefile(index) }}><Trash2 /></Button>
                    </div>
                ))
            }
        </div>
    )
};

export const ImageUploaderOld = () => {
    const [files, setFiles] = useState<File[] | null>(null);

    const dropZoneConfig = {
        maxFiles: 5,
        maxSize: 1024 * 1024 * 4,
        multiple: true,
    };

    return (
        <FileUploader
            value={files}
            onValueChange={setFiles}
            dropzoneOptions={dropZoneConfig}
            className="relative bg-background rounded-lg p-2"
        >
            <FileInput className="outline-dashed outline-1 outline-white">
                <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
                    <FileSvgDraw />
                </div>
            </FileInput>
            <FileUploaderContent>
                {files &&
                    files.length > 0 &&
                    files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                            <Paperclip className="h-4 w-4 stroke-current" />
                            <span>{file.name}</span>
                        </FileUploaderItem>
                    ))}
            </FileUploaderContent>
        </FileUploader>
    );
}

export default ImageUploader;