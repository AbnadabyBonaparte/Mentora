import { useEffect } from "react";

/**
 * Componente de Analytics (Umami)
 * Só carrega o script se as variáveis de ambiente estiverem definidas
 */
export function Analytics() {
  useEffect(() => {
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

    // Só carrega analytics se ambas as variáveis estiverem definidas
    if (!endpoint || !websiteId) {
      return;
    }

    // Cria e injeta o script do Umami
    const script = document.createElement("script");
    script.src = `${endpoint}/umami`;
    script.setAttribute("data-website-id", websiteId);
    script.defer = true;
    script.async = true;

    document.head.appendChild(script);

    // Cleanup: remove o script quando o componente for desmontado
    return () => {
      const existingScript = document.querySelector(
        `script[src="${endpoint}/umami"]`
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // Componente não renderiza nada
}

