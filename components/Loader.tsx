const dots = Array.from({ length: 9 });

export default function Loader() {
  return (
    <div
      className="fixed inset-0 z-[9999] overflow-hidden"
      role="status"
      aria-live="polite"
      aria-label="Loading">
      <div className="absolute inset-0 z-[9999] bg-white opacity-100" />

      <div className="absolute inset-0 z-[99999] grid place-items-center">
        <div className="relative h-20 w-20">
          <div className="relative h-full w-full animate-spin [animation-duration:2s] [animation-timing-function:linear]">
            {dots.map((_, index) => (
              <div
                key={index}
                className="absolute left-1/2 top-1/2"
                style={{
                  transform: `translate(-50%, -50%) rotate(${index * 40}deg) translateY(-30px)`,
                }}>
                <div
                  className="h-2.5 w-2.5 rounded-full bg-[#541f5c] opacity-30 animate-pulse [animation-duration:1s]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
