import AuthProvider from "./_components/AuthProvider";

export default function layout({ children }) {
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-2">
      <div className="w-[40dvw]">layout</div>
      <AuthProvider />
      <div>{children}</div>
    </div>
  );
}
