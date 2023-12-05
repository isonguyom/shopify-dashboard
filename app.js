

const app = function () {

    // Declarations
    const dropdownMenuTrigger = document.querySelector(".profile-bar");
    const dropdownMenu = document.querySelector(".dropdown-menu")
    const dropdownAlertTrigger = document.querySelector(".alert-bell");
    const dropdownAlert = document.querySelector(".alerts-dropdown")
    const closeAdsButton = document.querySelector(".ads-dialogue-box-close-button")
    const collaspsibleTriggerButton = document.querySelector(".collaspsible-toggler")
    const collaspsibleItem = document.querySelectorAll(".collaspsible-item")
    const checkbox = document.querySelectorAll(".checkbox")
    const progressCounter = document.querySelector(".progress-count")
    const progressIndicator = document.getElementById("myBar")


    const collaspsibleItems = [...collaspsibleItem]
    const checkboxes = [...checkbox]
    const checkedItemsArray = []

    progressCounter.innerHTML = checkedItemsArray.length
    progressIndicator.value = `${checkedItemsArray.length / 5 * 100}`

    // Top nav dropdown toggling
    const toggleDropdown = function (dropdown, otherDropdown, target) {
        const isExpanded = target.attributes["aria-expanded"].value === "true"

        if (otherDropdown.classList.contains("show")) {
            otherDropdown.classList.remove("show")
        }

        dropdown.classList.toggle("show")

        if (isExpanded) {
            target.ariaExpanded = "false"
        } else {
            target.ariaExpanded = "true"
        }
    }

    // Close ads dialogue box
    const closeAds = function () {
        const adsBox = document.querySelector(".ads-dialogue-box")
        adsBox.classList.add("hide")
    }

    // Display collaspsible item 
    // const displayCollaspsibleItem = function () {
    collaspsibleItems.forEach((item) => {


        item.addEventListener("click", () => {
            // console.log(item)
            collaspsibleItems.forEach((element) => {
                if (collaspsibleItems.indexOf(element) === collaspsibleItems.indexOf(item)) {
                    element.classList.add("show")
                } else {
                    element.classList.remove("show")
                }
            })

        })
    })
    // }

    // Toggle collaspsible
    const toggleCollaspsible = function () {
        const collaspsible = document.querySelector(".collaspsible-item-wrapper")
        const collaspsibleDown = document.querySelector("#collaspsibleDown")
        const collaspsibleUp = document.querySelector("#collaspsibleUp")


        collaspsible.classList.toggle("hide")

        collaspsibleItems.forEach((item) => {
            if (collaspsibleItems.indexOf(item) === 0) {
                item.classList.add("show")
            } else {
                item.classList.remove("show")
            }
        })

        if (collaspsible.classList.contains("hide")) {
            collaspsibleDown.style.display = "block"
            collaspsibleUp.style.display = "none"
            collaspsibleTriggerButton.ariaLabel = collaspsibleTriggerButton.ariaLabel.replace("collapse", "expand")
        } else {
            collaspsibleDown.style.display = "none"
            collaspsibleUp.style.display = "block"
            collaspsibleTriggerButton.ariaLabel = collaspsibleTriggerButton.ariaLabel.replace("expand", "collapse")
        }
    }


    // Manipulate checkboxes
    checkboxes.forEach((box) => {
        box.addEventListener("click", (e) => {
            // e.preventDefault()
            checkboxes.forEach((clickedBox) => {
                if (checkboxes.indexOf(clickedBox) === checkboxes.indexOf(box)) {
                    // alert(checkboxes.indexOf(clickedBox))
                    clickedBox.classList.add("load-checked")
                    if (clickedBox.classList.contains("checked")) {
                        setTimeout(() => {
                            clickedBox.classList.remove("load-checked")
                        }, 3000);
                        clickedBox.classList.remove("checked")
                        checkedItemsArray.splice(checkedItemsArray.indexOf(clickedBox), 1)
                        setTimeout(() => {
                            progressCounter.innerHTML = checkedItemsArray.length
                            progressIndicator.value = `${checkedItemsArray.length / 5 * 100}`
                        }, 3000);
                        clickedBox.ariaLabel = clickedBox.ariaLabel.replace("uncheck", "check")
                    } else {
                        setTimeout(() => {
                            clickedBox.classList.remove("load-checked")
                        }, 3000);
                        clickedBox.classList.add("checked")
                        checkedItemsArray.push(clickedBox)
                        setTimeout(() => {
                            progressCounter.innerHTML = checkedItemsArray.length
                            progressIndicator.value = `${checkedItemsArray.length / 5 * 100}`
                        }, 3000);
                        clickedBox.ariaLabel = clickedBox.ariaLabel.replace("check", "uncheck")
                    }
                }
            })
        })
    })


    // Eventlisteners
    dropdownMenuTrigger.addEventListener("click", () => toggleDropdown(dropdownMenu, dropdownAlert, dropdownMenuTrigger))
    dropdownAlertTrigger.addEventListener("click", () => toggleDropdown(dropdownAlert, dropdownMenu, dropdownAlertTrigger))
    closeAdsButton.addEventListener("click", closeAds)
    collaspsibleTriggerButton.addEventListener("click", toggleCollaspsible)
    console.log("Hello Me")
}


app()