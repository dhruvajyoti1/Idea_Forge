import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Plus, Users, User, Bell, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

const Navigation = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  
  const navItems = [
    { path: "/", icon: Home, label: "Feed" },
    { path: "/teams", icon: Users, label: "Teams" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden md:flex items-center justify-between px-6 py-4 border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">I_F</span>
            </div> */}
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              IDEA_FORGE
            </span>
          </Link>
          
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center space-x-2 px-3 py-2 rounded-lg transition-smooth",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link to="/profile">
              <User className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t z-50">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-smooth",
                location.pathname === item.path
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      {/* Floating Action Button - Mobile */}
      <Button 
        variant="floating" 
        className="md:hidden"
        asChild
      >
        <Link to="/submit">
          <Plus className="w-6 h-6" />
        </Link>
      </Button>
    </>
  );
};

export default Navigation;


