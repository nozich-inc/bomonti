export default function MainFrame({ children, ...props }) {
  return (
    <main
      className="flex flex-col overflow-scroll min-w-0 py-5 px-8 mx-auto w-full"
      {...props}
    >
      {children}
    </main>
  );
}
