/* global React */
const { useEffect, useRef, useState } = React;

/* ============================================================
   NODO MARK — the 4-node + center logo, animated
   ============================================================ */
function NodoMark({ size = 28, animate = false, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="10" stroke={color} strokeWidth="2.5"/>
      {/* connectors */}
      <line x1="24" y1="24" x2="13" y2="13" stroke={color} strokeWidth="2.2"/>
      <line x1="24" y1="24" x2="35" y2="13" stroke={color} strokeWidth="2.2"/>
      <line x1="24" y1="24" x2="13" y2="35" stroke={color} strokeWidth="2.2"/>
      <line x1="24" y1="24" x2="35" y2="35" stroke={color} strokeWidth="2.2"/>
      {/* nodes */}
      <circle cx="24" cy="24" r="3.6" fill={color}/>
      <circle cx="13" cy="13" r="2.6" fill={color}/>
      <circle cx="35" cy="13" r="2.6" fill={color}/>
      <circle cx="13" cy="35" r="2.6" fill={color}/>
      <circle cx="35" cy="35" r="2.6" fill={color}/>
      {animate && (
        <>
          <circle cx="13" cy="13" r="2.6" fill={color} opacity="0.5">
            <animate attributeName="r" values="2.6;6;2.6" dur="2.4s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite"/>
          </circle>
          <circle cx="35" cy="35" r="2.6" fill={color} opacity="0.5">
            <animate attributeName="r" values="2.6;6;2.6" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
          </circle>
        </>
      )}
    </svg>
  );
}

/* ============================================================
   HERO VISUAL — large interactive nodo network
   ============================================================ */
function HeroVisual() {
  const wrapRef = useRef(null);
  const [pulses, setPulses] = useState([]);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  // Network nodes positioned around a center
  const nodes = [
    { id: "C", x: 50, y: 50, r: 8, label: "NODO" },
    { id: "A", x: 18, y: 18, r: 5, label: "Estrategia" },
    { id: "B", x: 82, y: 18, r: 5, label: "Diseño" },
    { id: "D", x: 18, y: 82, r: 5, label: "Desarrollo" },
    { id: "E", x: 82, y: 82, r: 5, label: "Lanzamiento" },
    { id: "F", x: 50, y: 8,  r: 3, label: "Brief" },
    { id: "G", x: 92, y: 50, r: 3, label: "QA" },
    { id: "H", x: 50, y: 92, r: 3, label: "Deploy" },
    { id: "I", x: 8,  y: 50, r: 3, label: "Research" },
  ];
  const connections = [
    ["C","A"],["C","B"],["C","D"],["C","E"],
    ["A","F"],["B","F"],["B","G"],["E","G"],
    ["E","H"],["D","H"],["D","I"],["A","I"],
  ];

  useEffect(() => {
    // emit traveling pulses on connections
    const id = setInterval(() => {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      const pid = Math.random().toString(36).slice(2);
      setPulses(p => [...p, { id: pid, from: conn[0], to: conn[1] }]);
      setTimeout(() => setPulses(p => p.filter(x => x.id !== pid)), 2200);
    }, 700);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({
        x: (e.clientX - r.left) / r.width,
        y: (e.clientY - r.top) / r.height,
      });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const findNode = id => nodes.find(n => n.id === id);

  // Parallax offset for nodes based on mouse
  const offset = (n) => {
    const dx = (mouse.x - 0.5) * 4;
    const dy = (mouse.y - 0.5) * 4;
    const strength = n.id === "C" ? 0 : (1 - n.r / 8) * 0.6 + 0.4;
    return { x: n.x + dx * strength, y: n.y + dy * strength };
  };

  return (
    <div ref={wrapRef} className="hero-visual" style={{ position: 'relative' }}>
      {/* grid */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.06
      }}>
        {Array.from({length: 11}).map((_, i) => (
          <line key={'h'+i} x1="0" x2="100" y1={i*10} y2={i*10} stroke="#fff" strokeWidth="0.1"/>
        ))}
        {Array.from({length: 11}).map((_, i) => (
          <line key={'v'+i} y1="0" y2="100" x1={i*10} x2={i*10} stroke="#fff" strokeWidth="0.1"/>
        ))}
      </svg>

      {/* network */}
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%'
      }}>
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* center glow */}
        <circle cx={offset(findNode("C")).x} cy={offset(findNode("C")).y} r="28" fill="url(#glow)"/>

        {/* connections */}
        {connections.map(([a, b], i) => {
          const na = offset(findNode(a)), nb = offset(findNode(b));
          return (
            <line key={i}
              x1={na.x} y1={na.y} x2={nb.x} y2={nb.y}
              stroke="rgba(255,255,255,0.18)" strokeWidth="0.18"/>
          );
        })}

        {/* pulses traveling along connections */}
        {pulses.map(p => {
          const na = offset(findNode(p.from)), nb = offset(findNode(p.to));
          return (
            <circle key={p.id} r="0.9" fill="var(--accent)">
              <animate attributeName="cx" from={na.x} to={nb.x} dur="2s" fill="freeze"/>
              <animate attributeName="cy" from={na.y} to={nb.y} dur="2s" fill="freeze"/>
              <animate attributeName="opacity" values="0;1;1;0" dur="2s" fill="freeze"/>
            </circle>
          );
        })}

        {/* nodes */}
        {nodes.map(n => {
          const p = offset(n);
          const isCenter = n.id === "C";
          return (
            <g key={n.id}>
              {isCenter && (
                <circle cx={p.x} cy={p.y} r={n.r + 4} fill="none"
                  stroke="var(--accent)" strokeWidth="0.3" opacity="0.6">
                  <animate attributeName="r" values={`${n.r+4};${n.r+10};${n.r+4}`} dur="3s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite"/>
                </circle>
              )}
              <circle cx={p.x} cy={p.y} r={n.r}
                fill={isCenter ? "var(--accent)" : "#f4f3ee"}/>
              {isCenter && (
                <text x={p.x} y={p.y + 16} textAnchor="middle"
                  fill="var(--accent)"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="2.6" letterSpacing="0.3">NODO</text>
              )}
            </g>
          );
        })}
      </svg>

      {/* corner coords */}
      <div style={{
        position: 'absolute', left: 0, top: 0,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'var(--text-3)', letterSpacing: '0.1em'
      }}>0,0 / NETWORK</div>
      <div style={{
        position: 'absolute', right: 0, bottom: 0,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'var(--text-3)', letterSpacing: '0.1em'
      }}>{Math.round(mouse.x*100)}×{Math.round(mouse.y*100)}</div>
      <div style={{
        position: 'absolute', right: 0, top: 0,
        fontFamily: 'JetBrains Mono, monospace', fontSize: 10,
        color: 'var(--accent)', letterSpacing: '0.1em',
        display: 'flex', alignItems: 'center', gap: 6
      }}>
        <span style={{
          width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%',
          boxShadow: '0 0 8px var(--accent)'
        }}/>
        LIVE
      </div>
    </div>
  );
}

window.NodoMark = NodoMark;
window.HeroVisual = HeroVisual;
