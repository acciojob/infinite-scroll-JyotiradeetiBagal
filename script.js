document.addEventListener("DOMContentLoaded",()=>{
    const list = document.getElementById("infi-list");

    function addItems(count = 10) {
        for(let i = 1; i <= count; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${list.children.length + 1}`;
            list.appendChild(listItem);
        }
    }

    addItems();

    list.addEventListener("scroll", () => {
        const { scrollTop, scrollHeight, clientHeight } = list;

        if (scrollTop + clientHeight >= scrollHeight-5) {
            addItems(2);
        }
    });
});