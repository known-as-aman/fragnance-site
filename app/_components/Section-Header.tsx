"use client";

export default function SectionHeader({ title }: { title: string }) {
    return (
        <div className="flex items-center justify-between w-full">
            <img src="/divider.png" alt="divider" className="w-full h-72" />
            <h2 className="text-2xl font-bold whitespace-nowrap">{title}</h2>
            <img src="/divider.png" alt="divider" className="w-full h-72" />
        </div>
    );
}