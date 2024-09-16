import SideNavigation from "@/app/_components/SideNavigation";

function Layout({ children }) {
  return (
    <div className="flex-1 grid grid-cols-[16rem_1fr] gap-12 px-4 py-2">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
}

export default Layout;
