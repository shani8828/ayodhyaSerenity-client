import { useEffect, useCallback } from "react";

const RamNaamClick = () => {
  const createOm = useCallback((x: number, y: number) => {
    const el = document.createElement("span");
    el.textContent = "राम";
    el.style.cssText = `
      position: fixed;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 99999;
      font-size: 24px;
      color: hsl(var(--primary));
      font-weight: bold;
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 1;
      transition: all 0.8s ease-out;
    `;
    document.body.appendChild(el);
    requestAnimationFrame(() => {
      el.style.transform = "translate(-50%, -50%) scale(1.5)";
      el.style.opacity = "0";
      el.style.top = `${y - 40}px`;
    });
    setTimeout(() => el.remove(), 800);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (e instanceof TouchEvent) {
        Array.from(e.changedTouches).forEach(t => createOm(t.clientX, t.clientY));
      } else {
        createOm(e.clientX, e.clientY);
      }
    };
    document.addEventListener("click", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("click", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [createOm]);

  return null;
};

export default RamNaamClick;