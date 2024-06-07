import Link from "next/link";

export default function SellerSidebar() {
  return (
    <div className="flex h-[100dvh] w-[30dvw] flex-col gap-2 bg-red-400 pt-10">
      <Link href="/account/sellerDashboard">Dashboard</Link>
      <Link href="/account/sellerDashboard/createProduct">create product</Link>
      <Link href="/account/sellerDashboard/manageProducts">manage product</Link>
      <Link href="/account/sellerDashboard/settings">settings</Link>
    </div>
  );
}
