/* eslint-disable react/prop-types */
export function Auditcomponent({ up, down, data }) {
  const { color, message } = getStage(data);
  return (
    <div
      href="#"
      className="flex h-32 w-1/4 bg-[#d5d1f7] flex-col items-center justify-evenly rounded-md border-2 border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80"
    >
      <div className="text-2xl items-center justify-start">Audit Ratio</div>
      <AuditGraph up={up} down={down} data={data} />
      <div className="w-full flex flex-row items-end justify-evenly">
        <span className="text-6xl leading none" style={{ color: `${color}` }}>
          {data.toFixed(1)}
        </span>
        <p style={{ color: `${color}` }}>{message}</p>
      </div>
    </div>
  );
}

function AuditGraph({ up, down, data }) {
  const doneMB = (up / 1000000).toFixed(2);
  const receivedMB = (down / 1000000).toFixed(2);
  return (
    <div className="box-border mt-2 flex justify-between items-center">
      <div className="w-full p-2">
        <Graph isUp={true} up={up} down={down} data={up} ratio={data} />
        <Graph isUp={false} up={up} down={down} data={down} ratio={data} />
      </div>
      <div className="ml-3">
        <div className="flex flex-col items-end font-mono text-xs leading-3 text-neutral mb-2">
          <div>{doneMB} MB</div>
          <div className="flex items-center">
            <div>Done</div>
            <div className="ml-1">
              <SvgCheck strokeColor="#FFFFFF" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end font-mono text-xs leading-3 text-neutral mt-2">
          <div className="flex items-center">
            <div>Received</div>
            <div className="ml-1">
              <SvgArrow strokeColor="#FFFFFF" />
            </div>
          </div>
          <div>{receivedMB} MB</div>
        </div>
      </div>
    </div>
  );
}

import { useElementWidth } from "../lib/hooks.js";

const Graph = ({ isUp: e, up: t, down: r, data: n, ratio: o }) => {
  const [s, i] = useElementWidth();
  const d = getStage(o);
  const l = !t && !r;
  const m = Math.max(t, r);
  const p = t === r;
  const g = !p && n === m;
  const f = g ? i : (n * i) / m;
  const h = (l && "#E8E1F0") || (((p && e) || g) && `${d.color}`) || "#FFFFFF";

  return (
    <div className="w-full h-6" ref={s}>
      <svg width="100%" height="100%">
        <line
          stroke={h}
          strokeWidth={6}
          x1={0}
          x2={l ? i : f || 1}
          y1={11}
          y2={11}
        />
      </svg>
    </div>
  );
};

const getStage = (e) => {
  if (e != null) {
    if (e === Infinity) {
      return Ps[0];
    } else {
      return Ps.find((t) => e.toFixed(1) >= t.min);
    }
  }
};

let Ps = [
  {
    color: "#00D4A1",
    message: "Best ratio ever!",
    adminMessage: "Best ratio ever!",
    min: 2,
  },
  {
    color: "#00D4A1",
    message: "Almost perfect!",
    adminMessage: "Almost perfect!",
    min: 1.25,
  },
  {
    color: "#F0BB00",
    message: "You can do better!",
    adminMessage: "It could be better!",
    min: 1,
  },
  {
    color: "#FFA482",
    message: "Make more audits!",
    adminMessage: "More audits needed!",
    min: 0.8,
  },
  {
    color: "#E66A7D",
    message: "Careful buddy!",
    adminMessage: "Low ratio...",
    min: 0,
  },
];

const SvgCheck = ({ strokeColor }) => (
  <svg width="12" viewBox="0 0 130 130">
    <path
      fill="none"
      stroke={strokeColor}
      strokeWidth="6"
      d="M17.35 55.4L65 7.75l47.65 47.65M65 122.75V8.41"
    ></path>
  </svg>
);

const SvgArrow = ({ strokeColor }) => (
  <svg width="12" viewBox="0 0 130 130">
    <path
      fill="none"
      stroke={strokeColor}
      strokeWidth="6"
      d="M114.65 73.1L67 120.75 19.35 73.1M67 5.75v114.34"
    ></path>
  </svg>
);
