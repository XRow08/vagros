export default function BolaQuadrado({ color }: { color: string }) {
  return (
    <svg
      className="transition-all duration-300 ease-in-out"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="transition-all duration-300 ease-in-out"
        d="M1.66797 3.33329C1.66797 2.41282 2.41416 1.66663 3.33464 1.66663H6.66797C7.58844 1.66663 8.33463 2.41282 8.33463 3.33329V6.66663C8.33463 7.5871 7.58844 8.33329 6.66797 8.33329H3.33464C2.41416 8.33329 1.66797 7.5871 1.66797 6.66663V3.33329Z"
        stroke={color}
        stroke-width="1.25"
      />
      <path
        className="transition-all duration-300 ease-in-out"
        d="M18.3346 4.99996C18.3346 6.84091 16.8422 8.33329 15.0013 8.33329C13.1604 8.33329 11.668 6.84091 11.668 4.99996C11.668 3.15901 13.1604 1.66663 15.0013 1.66663C16.8422 1.66663 18.3346 3.15901 18.3346 4.99996Z"
        stroke={color}
        stroke-width="1.25"
      />
      <path
        className="transition-all duration-300 ease-in-out"
        d="M8.33463 15C8.33463 16.8409 6.84225 18.3333 5.0013 18.3333C3.16035 18.3333 1.66797 16.8409 1.66797 15C1.66797 13.159 3.16035 11.6666 5.0013 11.6666C6.84225 11.6666 8.33463 13.159 8.33463 15Z"
        stroke={color}
        stroke-width="1.25"
      />
      <path
        className="transition-all duration-300 ease-in-out"
        d="M11.668 13.3333C11.668 12.4128 12.4142 11.6666 13.3346 11.6666H16.668C17.5884 11.6666 18.3346 12.4128 18.3346 13.3333V16.6666C18.3346 17.5871 17.5884 18.3333 16.668 18.3333H13.3346C12.4142 18.3333 11.668 17.5871 11.668 16.6666V13.3333Z"
        stroke={color}
        stroke-width="1.25"
      />
    </svg>
  );
}
