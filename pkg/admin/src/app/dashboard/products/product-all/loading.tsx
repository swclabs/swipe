import { LoaderCircle } from 'lucide-react';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="flex items-center">
                <LoaderCircle className="h-4 w-4 animate-spin" />
                <p className="pl-1 text-xs">Loading...</p>
            </div>
        </div>
    )
}