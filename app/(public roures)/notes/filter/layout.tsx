type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};
const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <main>{children}</main>
    </section>
  );
};
export default NotesLayout;
