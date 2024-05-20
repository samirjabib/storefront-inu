export function isMobileViewport(): boolean {
  // Si estamos en un entorno de servidor, asumimos un ancho predeterminado para el móvil
  if (typeof window === "undefined") {
    return true; // Cambiar a false si se desea que sea false por defecto
  }

  // Verificar el ancho de la ventana para determinar si es móvil
  return window.innerWidth < 768; // Aquí establecemos 768 como el punto de corte para móvil
}
