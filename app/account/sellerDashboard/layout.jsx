import SellerSidebar from "../_components/SellerSidebar";

export default function layout({ children }) {
  return (
    <div className="flex flex-row gap-2 pt-10">
      <SellerSidebar />
      {children}
    </div>
  );
}
