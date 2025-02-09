import React, { useState } from "react";
import "./button.css";

const DynamicButton: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect(); // Obtém as dimensões do botão
    const x = e.clientX - rect.left; // Posição do mouse no eixo X em relação ao botão
    const y = e.clientY - rect.top; // Posição do mouse no eixo Y em relação ao botão
    setMousePosition({ x, y }); // Atualiza a posição do mouse
  };

  return (
    <button
      className="btn"
      onMouseMove={handleMouseMove} // Atualiza a posição dinamicamente
      style={{ "--x": `${mousePosition.x}px`, "--y": `${mousePosition.y}px` } as React.CSSProperties}
    >
      <span>Enviar</span>
    </button>
  );
};

export default DynamicButton;
