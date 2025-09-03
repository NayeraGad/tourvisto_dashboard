//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

import { Link } from "react-router";
import Sidebar from "./Sidebar";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;

  const toggleSidebar = () => {
    sidebar.toggle();
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" className="size-[30px]" />
          <h1>Tourvisto</h1>
        </Link>

        <button onClick={toggleSidebar}>
          <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
        </button>
      </header>

      <SidebarComponent
        ref={(Sidebar) => (sidebar = Sidebar)}
        width={270}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="overlay"
      >
        <Sidebar handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
