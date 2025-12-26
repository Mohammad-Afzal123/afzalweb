import "./DeveloperCard.css";

export default function DeveloperCard({
  name,
  skills,
  experience,
  status,
}) {
  return (
    <div className="dev-card">
      <div className="dev-card-top-line">
        <span />
        <span />
      </div>

      <div className="dev-card-header">
        <div className="dot red" />
        <div className="dot orange" />
        <div className="dot green" />
      </div>

      <div className="dev-card-body">
        <code>
          <div>
            <span className="kw">const</span>{" "}
            <span className="var">developer</span>{" "}
            <span className="kw">=</span>{" "}
            <span className="br">{`{`}</span>
          </div>

          <div className="indent-1">
            <span className="key">name:</span>{" "}
            <span className="str">'{name}'</span>,
          </div>

          <div className="indent-1">
            <span className="key">skills:</span>{" "}
            <span className="br">[</span>
            {skills.map((s, i) => (
              <span key={i}>
                <span className="str">'{s}'</span>
                {i < skills.length - 1 && (
                  <span className="br">, </span>
                )}
              </span>
            ))}
            <span className="br">]</span>,
          </div>

          <div className="indent-1">
            <span className="key">experience:</span>{" "}
            <span className="num">{experience}</span>,
          </div>

          <div className="indent-1">
            <span className="key">currentStatus:</span>{" "}
            <span className="str">'{status}'</span>,
          </div>

          <div>
            <span className="br">{`}`}</span>
          </div>
        </code>
      </div>
    </div>
  );
}
