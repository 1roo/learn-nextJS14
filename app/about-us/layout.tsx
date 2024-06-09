export default function AoutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS is great!
    </div>
  );
}
