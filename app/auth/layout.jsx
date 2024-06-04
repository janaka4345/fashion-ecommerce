import SocialAuth from "./_components/SocialAuth";

export default function layout({ children }) {
  return (
    <div className="mt-10 flex flex-row items-center justify-center gap-2">
      <div className="w-[40dvw]">layout</div>
      <SocialAuth />
      <div>{children}</div>
    </div>
  );
}
