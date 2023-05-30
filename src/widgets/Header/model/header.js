import { atom } from 'nanostores';
import { bodyLock } from '@tools/helpers';

export const catalogOpen = atom(false);

export const openMenu = atom(false);

export async function toggleMenu() {
	const lockPaddingValue = `${window.innerWidth - document.body.offsetWidth}px`;
	if(openMenu.get()) {
		document.body.classList.remove('overflow-hidden')
		document.body.classList.add('overflow-y-scroll')
		document.body.style.setProperty('padding-right', 0);
	} else {
		document.body.classList.add('overflow-hidden')
		document.body.classList.remove('overflow-y-scroll')
		document.body.style.setProperty('padding-right', lockPaddingValue);
	}
	openMenu.set(!openMenu.get())
}
