import Link from "next/link";
import { getCategories } from "@/lib/api";

const NotesSidebar = async () => {
  const categories = await getCategories();
  return (
    <ul>
      <li>
        <Link href={`/notes/filter/all`}>All Notes</Link>
      </li>
      {categories.map((categories) => (
        <li key={categories.id}>
          <Link href={`/notes/filter/${categories.id}`}>{categories.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NotesSidebar;
