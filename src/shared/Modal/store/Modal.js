import { atom } from 'nanostores';
import { bodyLock } from '@tools/helpers'
export const open = atom('');

const modalName = open.subscribe(value => {
	if(typeof window === 'undefined') return
	bodyLock(value)
})
