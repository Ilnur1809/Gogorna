const animItems = document.querySelectorAll('._anim-items');
// главная функция

if (animItems.length > 0) {
    const offset = (el) => {
        const rect = el.getBoundingClientRect();
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft,
        }
    };
    
    const animOnScroll = (params) => {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 1;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active');
				}
			}
		}
	};
    animOnScroll();
console.log(window.addEventListener('scroll', animOnScroll));
}


// BURGER
const menuBody = document.querySelector('.menu__body');
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	iconMenu.addEventListener('click', (e)=> {
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}










