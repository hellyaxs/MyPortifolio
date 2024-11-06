export default function Title({ title, subtitle,icon }) {
    return (
        <div>
        <h2 className="relative mx-auto top-2 text-6xl items-center font-semi-bold text-center text-gradient opacity-25">
        <i className={`bi bi-${icon}`}></i> 
         {subtitle}
         </h2>
        <h2 className="text-h2 font-semi-bold mb-2 text-center text-gradient">{title}</h2>
   </div>
    );
}