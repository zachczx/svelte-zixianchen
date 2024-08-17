const buttonPressed: string[] = ['neumorphism-inset', 'border-gray-200'];
const buttonNormal: string[] = ['neumorphism-alt', 'border-white'];

/**
 * Insert neumorphism css class
 * @param {Event} evt
 */
export function addNeumorphismInset(evt: MouseEvent | KeyboardEvent) {
	const el = evt.currentTarget as HTMLElement;
	el.classList.add(...buttonPressed);
	el.classList.remove(...buttonNormal);
}

/**
 * Remove neumorphism css class
 * @param {Event} evt
 */
export function removeNeumorphismInset(evt: MouseEvent | KeyboardEvent) {
	const el = evt.currentTarget as HTMLElement;
	el.classList.remove(...buttonPressed);
	el.classList.add(...buttonNormal);
}
