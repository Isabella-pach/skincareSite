let backtoTopBtn = document.querySelector(".back-to-top")
window.onscroll = () => {
  if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
    backtoTopBtn.style.display ="flex"
  } else {
    backtoTopBtn.style.display ="none"
  }
}
 let bottomNavItems = document.querySelectorAll(".mb-nav-item")

 let bottomMove = document.querySelector(".mb-move-item")

 bottomNavItems.forEach((item, index) => {
   item.onclick = (e) => {
     let crrItem = document.querySelector('.mb-nav-item.active')
     crrItem.classList.remove("active")
     item.classList.add("active")
     bottomMove.style.left = index * 25 + "%"
   }
 });
