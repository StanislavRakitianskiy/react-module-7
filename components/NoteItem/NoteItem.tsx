import Link from 'next/link';
import { Note } from '@/lib/api';

type Props = {
  item: Note;
};

const NoteItem = ({ item }: Props) => {
  return (
    <li>
      <Link href={`/notesSSR/${item.id}`}>{item.title}</Link>
    </li>
  );
};

export default NoteItem;