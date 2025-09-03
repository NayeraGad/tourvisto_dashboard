import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div>
      AdminLayout
      <aside className="children">
        <Outlet />
      </aside>
    </div>
  );
};

export default AdminLayout;
