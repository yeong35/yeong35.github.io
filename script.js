(function () {
    const root = document.documentElement;
    const btn = document.getElementById("themeToggle");
  
    const saved = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  
    const initialTheme = saved ?? (prefersDark ? "dark" : "light");
  
    setTheme(initialTheme);
  
    function setTheme(theme){
      root.setAttribute("color-theme", theme);
      localStorage.setItem("theme", theme);
    }
  
    if(btn){
      btn.addEventListener("click", () => {
        const current = root.getAttribute("color-theme");
        const next = current === "dark" ? "light" : "dark";
  
        setTheme(next);
      });
    }
  })();
  