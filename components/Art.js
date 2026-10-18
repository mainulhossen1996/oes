export function HeroArt() {
  const lit = (i, j) => (i * 7 + j * 3) % 5 === 0;

  return (
    <svg
      viewBox="0 0 380 340"
      className="w-full drop-shadow-2xl"
      role="img"
      aria-label="Illustration of a building under construction with a tower crane lifting a steel beam"
    >
      <defs>
        <linearGradient id="ha-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0a2a6b" />
          <stop offset=".65" stopColor="#0f3a8f" />
          <stop offset="1" stopColor="#2f6ae0" />
        </linearGradient>
        <pattern id="ha-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity=".08" />
        </pattern>
        <pattern id="ha-hazard" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="6" height="12" fill="#f5b301" />
          <rect x="6" width="6" height="12" fill="#0a2a6b" />
        </pattern>
        <clipPath id="ha-clip">
          <rect x="6" y="6" width="368" height="328" rx="10" />
        </clipPath>
      </defs>

      <g clipPath="url(#ha-clip)">
        {/* Sky + blueprint grid */}
        <rect x="6" y="6" width="368" height="328" fill="url(#ha-sky)" />
        <rect x="6" y="6" width="368" height="328" fill="url(#ha-grid)" />

        {/* Distant skyline */}
        <g fill="#1d55c4" opacity=".55">
          <rect x="14" y="205" width="26" height="65" />
          <rect x="44" y="180" width="22" height="90" />
          <rect x="176" y="222" width="18" height="48" />
          <rect x="324" y="196" width="30" height="74" />
          <rect x="356" y="222" width="20" height="48" />
        </g>

        {/* Finished buildings */}
        <rect x="30" y="150" width="70" height="120" fill="#2f6ae0" />
        <rect x="108" y="110" width="60" height="160" fill="#1d55c4" />
        <rect x="30" y="150" width="70" height="5" fill="#fff" opacity=".25" />
        <rect x="108" y="110" width="60" height="5" fill="#fff" opacity=".25" />
        <g>
          {[0, 1, 2].flatMap((i) =>
            [0, 1, 2, 3, 4].map((j) => (
              <rect
                key={`a${i}${j}`}
                x={40 + i * 20}
                y={164 + j * 20}
                width="10"
                height="12"
                fill={lit(i, j) ? "#f5b301" : "#bcd3ff"}
                opacity={lit(i, j) ? 0.95 : 0.8}
              />
            ))
          )}
          {[0, 1, 2].flatMap((i) =>
            [0, 1, 2, 3, 4, 5, 6].map((j) => (
              <rect
                key={`b${i}${j}`}
                x={118 + i * 16}
                y={124 + j * 20}
                width="9"
                height="12"
                fill={lit(i + 2, j) ? "#f5b301" : "#bcd3ff"}
                opacity={lit(i + 2, j) ? 0.95 : 0.7}
              />
            ))
          )}
        </g>

        {/* Building under construction */}
        <rect x="200" y="210" width="36" height="60" fill="#2f6ae0" opacity=".35" />
        <g fill="none" stroke="#fff" strokeOpacity=".55" strokeWidth="1.5">
          <path d="M200 90l36 60M236 90l-36 60M200 150l36 60M236 150l-36 60M200 210l36 60M236 210l-36 60" />
          <path d="M236 150l36 60M272 150l-36 60M236 210l36 60M272 210l-36 60M272 150l36 60M308 150l-36 60M272 210l36 60M308 210l-36 60" />
        </g>
        <g fill="none" stroke="#fff" strokeWidth="3">
          <path d="M200 270V90M236 270V90M272 270V150M308 270V150" />
        </g>
        <g fill="none" stroke="#fff" strokeWidth="5">
          <path d="M194 270h120M194 210h120M194 150h120M194 90h48" />
        </g>
        {/* Safety rail on top slab */}
        <path d="M200 76v14M236 76v14M200 76h36M200 83h36" stroke="#f5b301" strokeWidth="1.5" fill="none" />

        {/* Tower crane */}
        <g stroke="#f5b301" fill="none" strokeLinejoin="round">
          {/* mast */}
          <path d="M224 90V30M236 90V30" strokeWidth="3" />
          <path d="M224 90l12-12-12-12 12-12-12-12 12-12" strokeWidth="1.5" />
          {/* jib and counter-jib */}
          <path d="M176 30h180" strokeWidth="4" />
          <path d="M236 30l14 9 14-9 14 9 14-9 14 9 14-9 10 9" strokeWidth="1.5" />
          <path d="M224 30l-12 9-12-9-12 9-8-9" strokeWidth="1.5" />
          {/* apex + tie lines */}
          <path d="M230 30V12M230 12L352 30M230 12L178 30" strokeWidth="1.5" />
        </g>
        <rect x="170" y="32" width="16" height="14" fill="#f5b301" />
        <rect x="224" y="30" width="16" height="10" rx="2" fill="#f5b301" />
        <rect x="228" y="32" width="6" height="5" fill="#0f3a8f" />
        <circle cx="230" cy="11" r="2.5" fill="#fff" />

        {/* Hook, slings and steel beam */}
        <g className="crane-hook">
          <path d="M330 34v32" stroke="#f5b301" strokeWidth="2" />
          <rect x="324" y="66" width="12" height="9" rx="1" fill="#f5b301" />
          <path d="M330 75L312 92M330 75L348 92" stroke="#fff" strokeOpacity=".8" strokeWidth="1.2" />
          <g fill="#e8eefc">
            <rect x="306" y="92" width="48" height="3" />
            <rect x="326" y="95" width="8" height="6" />
            <rect x="306" y="101" width="48" height="3" />
          </g>
        </g>

        {/* Ground */}
        <path d="M6 270h368v54a10 10 0 0 1-10 10H16a10 10 0 0 1-10-10z" fill="#0a2a6b" />
        <rect x="6" y="270" width="368" height="5" fill="url(#ha-hazard)" />

        {/* Caption plate */}
        <rect x="26" y="288" width="328" height="32" rx="6" fill="#fff" opacity=".1" />
        <text x="190" y="309" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700" letterSpacing=".3">
          Built to drawing, to schedule
        </text>
      </g>

      {/* Frame */}
      <rect x="6" y="6" width="368" height="328" rx="10" fill="none" stroke="#fff" strokeOpacity=".5" />
    </svg>
  );
}

const ic = { width: 28, height: 28, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2 };
export const Icons = {
  civil: <svg {...ic}><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" /></svg>,
  interior: <svg {...ic}><path d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M3 13a2 2 0 0 1 4 0v2h10v-2a2 2 0 0 1 4 0v5H3zM6 18v2M18 18v2" /></svg>,
  plumbing: <svg {...ic}><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" /></svg>,
  painting: <svg {...ic}><rect x="3" y="3" width="15" height="6" rx="1" /><path d="M18 6h3v5H12v4M10 15h4v6h-4z" /></svg>,
};

export const Tiles = {
  civil: (
    <svg viewBox="0 0 300 200" className="block w-full" aria-hidden="true">
      <rect width="300" height="200" fill="#1456d6" /><rect y="160" width="300" height="40" fill="#0a2a6b" />
      <path d="M60 160V50M120 160V50M180 160V50M60 110h120M60 50h120" stroke="#fff" strokeWidth="4" fill="none" />
      <path d="M200 160V30h70M200 30l-30 20" stroke="#f5b301" strokeWidth="4" fill="none" />
      <rect x="255" y="44" width="16" height="10" fill="#f5b301" />
    </svg>
  ),
  interior: (
    <svg viewBox="0 0 300 200" className="block w-full" aria-hidden="true">
      <rect width="300" height="200" fill="#dbe7ff" /><rect y="150" width="300" height="50" fill="#9bb6ea" />
      <rect x="190" y="30" width="80" height="80" fill="#fff" stroke="#1456d6" strokeWidth="4" />
      <path d="M230 30v80M190 70h80" stroke="#1456d6" strokeWidth="3" />
      <rect x="30" y="100" width="130" height="50" rx="10" fill="#1456d6" />
      <rect x="20" y="115" width="25" height="40" rx="8" fill="#0a2a6b" /><rect x="145" y="115" width="25" height="40" rx="8" fill="#0a2a6b" />
      <path d="M100 20v40" stroke="#0a2a6b" strokeWidth="3" /><path d="M85 60h30l-6 20H91z" fill="#f5b301" />
    </svg>
  ),
  plumbing: (
    <svg viewBox="0 0 300 200" className="block w-full" aria-hidden="true">
      <rect width="300" height="200" fill="#0a2a6b" />
      <path d="M0 140h120a20 20 0 0 1 20 20v40M140 60v50a20 20 0 0 0 20 20h140" stroke="#9bb6ea" strokeWidth="22" fill="none" />
      <path d="M180 40h40a10 10 0 0 1 10 10v20" stroke="#f5b301" strokeWidth="12" fill="none" />
      <path d="M230 80s9 11 9 18a9 9 0 0 1-18 0c0-7 9-18 9-18z" fill="#4d8dff" />
    </svg>
  ),
  painting: (
    <svg viewBox="0 0 300 200" className="block w-full" aria-hidden="true">
      <rect width="300" height="200" fill="#e9eef8" /><rect width="170" height="200" fill="#1456d6" /><rect x="170" width="20" height="200" fill="#4d8dff" />
      <rect x="200" y="60" width="70" height="26" rx="4" fill="#f5b301" />
      <path d="M270 73h14v34h-50v18" stroke="#0a2a6b" strokeWidth="4" fill="none" />
      <rect x="226" y="125" width="16" height="50" rx="4" fill="#0a2a6b" />
    </svg>
  ),
};
