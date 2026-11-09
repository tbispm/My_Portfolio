import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../hooks/useReveal";

const TYPE_MS = 70;
const DELETE_MS = 38;
const HOLD_MS = 1700;

/** Types and deletes each role in turn. Screen readers get the full list once. */
function RoleTypewriter({ roles }) {
  const [reduced] = useState(prefersReducedMotion);
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(reduced ? roles[0] : "");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) {
      const id = setInterval(() => {
        setRoleIndex((index) => (index + 1) % roles.length);
      }, 2600);
      return () => clearInterval(id);
    }

    const current = roles[roleIndex];
    let delay = deleting ? DELETE_MS : TYPE_MS;
    if (!deleting && text === current) delay = HOLD_MS;

    const id = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((index) => (index + 1) % roles.length);
      } else {
        setText(current.slice(0, text.length + (deleting ? -1 : 1)));
      }
    }, delay);

    return () => clearTimeout(id);
  }, [reduced, roles, roleIndex, text, deleting]);

  return (
    <span className="role-typewriter">
      <span className="sr-only">{roles.join(", ")}</span>
      <span aria-hidden="true">
        {reduced ? roles[roleIndex] : text}
        <span className="role-cursor" />
      </span>
    </span>
  );
}

export default RoleTypewriter;
