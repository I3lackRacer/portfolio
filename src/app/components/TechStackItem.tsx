export default function TechStackItem({ icon, name, link, invert = false, onlyUseIconName = false }: { icon: string, name: string, link: string, invert?: boolean, onlyUseIconName?: boolean }) {
    return (
        <div className="group relative flex flex-col items-center cursor-pointer" onClick={() => window.open(link, '_blank')}>
            <i className={`devicon-${icon + (onlyUseIconName ? '' : '-plain')} ${invert ? 'invert' : ''} colored text-6xl mx-auto transition-transform group-hover:scale-110 animate-float-delay-200`}></i>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-sm mt-2">{name}</span>
        </div>
    );
}