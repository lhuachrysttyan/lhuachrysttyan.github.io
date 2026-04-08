{
    const MENU_LINKS_ACTIVE = document.querySelector('#nav-header a[href="#"]');

    const toggleActiveState = (event) => {
        if (!MENU_LINKS_ACTIVE) return;

        if (event.type === 'mouseover') {
            if (event.target.tagName.toLowerCase() === 'a') {
            MENU_LINKS_ACTIVE.classList.remove('active');
            }         
        } else if (event.type === 'mouseout') {
            if (event.target.tagName.toLowerCase() !== 'a') {
            MENU_LINKS_ACTIVE.classList.add('active');
            }  
        }
    }

    const targetContent = (event) => {
        console.log(event);
        if (event.type === 'click') {
            document.querySelectorAll('.item-projeto').forEach(item => {
                item.addEventListener(event.type, () => {
                    const targetID = item.getAttribute('data-target');
                    const targetArticle = document.getElementById(targetID);

                    targetArticle.scrollIntoView({ behavior: 'smooth' });                    
                })
            })

        }      
        
    }

    const stopBehavior = (event) => event.preventDefault();    

    const checkElement =  (element, event, funcao) => {
        if (!element || !event || !funcao) return;

        if(element === document || element === window) {
            return element.addEventListener(event, funcao);
        } else {
            const el = document.querySelector(element);
            if (el) return el.addEventListener(event, funcao);  
        }      
    }

    const mouse = (e) => console.log(`Tag: ${e.target.tagName.toLowerCase()} - Classe: ${e.target.classList}`);

    // checkElement(document,'mouseover', mouse);

    checkElement(document,'click', targetContent);
    checkElement(document,'mouseover', toggleActiveState);
    checkElement(document,'mouseout', toggleActiveState);
    checkElement('#me','contextmenu', stopBehavior);
    checkElement('.meuVideo','contextmenu', stopBehavior); // precisa ter o controlsList="nodownload" no video
}
