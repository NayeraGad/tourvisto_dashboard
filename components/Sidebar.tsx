import { cn } from "lib/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const Sidebar = ({ handleClick }: { handleClick?: () => void }) => {
  const user = {
    name: "Nayera",
    email: "nayera@example.com",
    imageURL: "assets/images/michael.webp",
  };
  return (
    <section className="nav-items">
      <Link to="/" className="nav-logo">
        <img src="/logo.svg" alt="Logo" className="size-[30px]" />
        <h1>Tourvisto</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map(({ id, href, icon, label }) => (
            <NavLink to={href} key={id}>
              {({ isActive }: { isActive: boolean }) => (
                <div
                  className={cn("group nav-item", {
                    "bg-primary-100 !text-white": isActive,
                  })}
                  onClick={handleClick}
                >
                  <img
                    src={icon}
                    alt={label}
                    className={`group-hover:brightness-0 size-6 group-hover:invert ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  {label}
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <footer className="nav-footer">
          <img
            src={user?.imageURL || "/assets/images/david.webp"}
            alt={user?.name || "David"}
            className="user-avatar"
          />

          <div className="user-details">
            <h2>{user?.name || "David"}</h2>
            <p>{user?.email || "email@example.com"}</p>
          </div>

          <button
            onClick={() => {
              console.log("Logging out...");
            }}
          >
            <img
              src="/assets/icons/logout.svg"
              alt="Log Out"
              className="size-6"
            />
          </button>
        </footer>
      </div>
    </section>
  );
};

export default Sidebar;
