export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919839661544?text=Hello%20S.A.%20Traders%2C%20I%27d%20like%20to%20enquire%20about%20your%20packaging%20products."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
      <span className="relative flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-3 pr-5 py-3 shadow-elegant hover:scale-105 transition-transform">
        <svg viewBox="0 0 32 32" className="h-6 w-6 fill-white"><path d="M16.003 3C9.382 3 4 8.382 4 15c0 2.41.708 4.654 1.927 6.557L4 29l7.62-1.99A11.94 11.94 0 0 0 16.003 27C22.624 27 28 21.624 28 15S22.624 3 16.003 3Zm0 21.6a9.58 9.58 0 0 1-4.88-1.336l-.35-.207-4.522 1.18 1.207-4.408-.228-.36a9.58 9.58 0 0 1-1.48-5.07c0-5.297 4.31-9.6 9.602-9.6 5.297 0 9.6 4.303 9.6 9.6 0 5.296-4.303 9.6-9.602 9.6Zm5.49-7.166c-.3-.15-1.778-.876-2.053-.976-.275-.1-.475-.15-.674.15-.2.3-.776.976-.95 1.176-.176.2-.35.225-.65.075-.3-.15-1.27-.467-2.42-1.49-.894-.798-1.498-1.785-1.674-2.085-.176-.3-.02-.462.131-.611.135-.135.3-.35.45-.525.15-.176.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.674-1.625-.924-2.225-.243-.583-.49-.504-.674-.514l-.575-.01a1.1 1.1 0 0 0-.8.375c-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.114 3.225 5.123 4.524.717.31 1.276.494 1.712.633.72.23 1.376.197 1.895.12.578-.087 1.778-.726 2.028-1.426.25-.7.25-1.3.175-1.426-.075-.125-.275-.2-.575-.35Z" /></svg>
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </span>
    </a>
  );
}
