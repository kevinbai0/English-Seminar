import NavigationBar from "../components/NavigationBar";

const getNavBar = (selected, isLight) => {
    return <NavigationBar navItems={[
        { name: "Home", link: "/" },
        { name: "Consulters", link: "/consulters" },
        { name: "Mediators", link: "/mediators"},
        { name: "Commentators", link: "/commentators" }
    ]}  selected={selected} lightBar={isLight}/>
}

export default getNavBar;