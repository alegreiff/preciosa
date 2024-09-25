import React, { useEffect, useRef, useState } from "react";
interface Props {
  texto: string;
  clase: string;
}
export const FuenteSize = ({ texto, clase }: Props) => {
  const inputElementRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState<string>("...");

  useEffect(() => {
    const handleResize = () => {
      const computedStyle = window.getComputedStyle(inputElementRef.current!);
      const size = computedStyle.getPropertyValue("font-size");

      setFontSize(size);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col mb-4">
      <div
        ref={inputElementRef}
        className={`bg-stone-700 p-4 text-slate-300 ${clase}`}
      >
        {texto}
      </div>
      <div className="bg-stone-200 p-2 text-2xl font-bold text-stone-900">
        <span className="font-bold">Clase tailwind: </span>
        {clase}

        <span className="font-bold ml-8">Tamaño en píxeles: </span>
        {fontSize}
      </div>
    </div>
  );
};
