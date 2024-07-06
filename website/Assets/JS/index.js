function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("content");

    if (sidebar.style.left === "-250px" || sidebar.style.left === "") {
        sidebar.style.left = "0";
        content.style.marginLeft = "250px";
    } else {
        sidebar.style.left = "-250px";
        content.style.marginLeft = "0";
    }
}
