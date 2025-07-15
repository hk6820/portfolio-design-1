export default function SectionWrapper({ children, className = "",color }) {
  return (
    <div
      className={`w-[90%] px-4 sm:px-6 xl:px-[5rem] 2xl:px-[10rem] mx-auto ${className}`}
      style={{ marginLeft: "1.5rem", marginRight: "1.5rem" }} // Adds 1.5rem = 24px margin on both sides
    >
      {children}
    </div>
  );
}
