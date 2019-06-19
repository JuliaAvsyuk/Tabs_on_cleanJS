let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tab'),
          tabName;

    tabNav.forEach(/*callbackfn:*/ item =>{
        item.addEventListener(/*type:*/'click', selectTabNav)
    });
    
    function selectTabNav() {
        tabNav.forEach(/*callbackfn:*/ item=>{
            item.classList.remove(/*tokens:*/'is-active');
        });
        console.log(this);
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        console.log(tabName);
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {               tabContent.forEach(/*callbackfn:*/           item=> {
              item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove(/*tokens:*/'is-active');
       })
    }

};


tab();