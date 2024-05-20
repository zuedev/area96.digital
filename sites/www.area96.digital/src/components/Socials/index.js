export default function Socials(props) {
  let { socials, space, height } = props;

  if (!socials) return null;

  if (!space) space = 4;
  if (!height) height = 8;

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
