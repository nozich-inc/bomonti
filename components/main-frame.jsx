export default function MainFrame({ children, ...props }) {
  return (
    <main className="py-5 px-8 mx-auto w-full" {...props}>
      {children}
    </main>
  );
}
