export default function EducationCard({ title, titleGrayText, subtitle, date }: { title: string, titleGrayText: string, subtitle: string, date: string }) {
    return (
        <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-white">{title} <span className="text-gray-400">{titleGrayText}</span></h3>
            <p className="text-green-400">{subtitle}</p>
            <p className="text-gray-400">{date}</p>
        </div>
    );
}