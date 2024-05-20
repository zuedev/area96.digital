export default function Socials(props) {
  const socials = props.socials;

  if (!socials) return null;

  const space = props.space || "4";
  const height = props.height || "8";

  return (
    <ul className={`flex flex-row space-x-${space}`}>
      {socials.map((social) => (
        <li key={social.href}>
          <a href={social.href}>
            <img
              src={`${social.icon}`}
              className={`h-${height}`}
              title={social.title}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
