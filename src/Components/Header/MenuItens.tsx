import MenuItem from "./MenuItem";

export default function MenuItens() {
  return (
    <div className="flex items-center justify-between gap-5">
      <a href="/ciclos">
        <MenuItem>CICLOS</MenuItem>
      </a>
      <a href="/road-map">
        <MenuItem>ROAD MAP</MenuItem>
      </a>
      <a href="/about-us">
        <MenuItem>QUEM SOMOS</MenuItem>
      </a>
    </div>
  );
}
