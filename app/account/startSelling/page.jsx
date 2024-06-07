import { auth } from "../../../auth";
import StartSellingForm from "../_components/StartSellingForm";

export default async function page() {
  const session = await auth();
  return (
    <div className="flex h-[100dvh] flex-row gap-2 pt-10">
      <div className="w-[35dvw] bg-green-400">
        <h1>Unlock your shopping adventure!</h1>
        <p>
          Welcome aboard! Expand your reach and watch your business flourish!
        </p>
      </div>
      <StartSellingForm userId={session.user.id} />
    </div>
  );
}
