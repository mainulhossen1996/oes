export function HeroArt() {
  return (
    <svg viewBox="0 0 380 340" className="w-full drop-shadow-2xl" role="img" aria-label="Illustration of a building under construction with a crane">
      <rect x="6" y="6" width="368" height="328" rx="10" fill="#0f3a8f" stroke="#fff" strokeOpacity=".5" />
      <circle cx="310" cy="60" r="26" fill="#f5b301" />
      <path d="M6 270h368v54a10 10 0 0 1-10 10H16a10 10 0 0 1-10-10z" fill="#0a2a6b" />
      <rect x="30" y="150" width="70" height="120" fill="#2f6ae0" />
      <rect x="108" y="110" width="60" height="160" fill="#1d55c4" />
      <g fill="#bcd3ff">
        {[[40,164],[62,164],[40,192],[62,192],[120,126],[142,126],[120,154],[142,154]].map(([x,y]) => <rect key={x+"-"+y} x={x} y={y} width="12" height="14" />)}
      </g>
      <g fill="none" stroke="#fff" strokeWidth="3">
        <path d="M200 270V90M236 270V90M272 270V150M308 270V150" />
        <path d="M194 270h120M194 210h50M194 150h50M194 90h50M266 210h48M266 150h48" strokeWidth="5" />
      </g>
      <g stroke="#f5b301" strokeWidth="4" fill="none">
        <path d="M230 90V30M230 30h110M230 30l-44 24M230 30l44-14" />
      </g>
      <g className="crane-hook">
        <path d="M330 30v34" stroke="#f5b301" strokeWidth="2" />
        <rect x="320" y="64" width="20" height="12" fill="#f5b301" />
      </g>
      <text x="190" y="310" fill="#fff" fontSize="13" fontWeight="700">Built to drawing, to schedule</text>
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
