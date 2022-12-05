import { Behaviour, serializeable } from '@needle-tools/engine';
import { Renderer } from '@needle-tools/engine/engine-components/Renderer';
//import { Color } from 'three';

export class ChangeVisibility extends Behaviour {
	@serializeable()
	applyOnStart: boolean = true;

	start() {
		if (this.applyOnStart) this.applyNoVisibility();
	}

	applyBlueColor() {
		const renderer = this.gameObject.getComponent(Renderer);
		if (renderer) renderer.enabled = true;

		/*if (!renderer) {
			console.warn('Can not change color: No renderer on ' + this.name);
			return;
		}
		for (let i = 0; i < renderer.sharedMaterials.length; i++) {
			renderer.sharedMaterials[i].color = new Color(0, 128, 255);
		}*/
	}
	applyNoVisibility() {
		const rend = this.gameObject.getComponent(Renderer);
		if (rend) rend.enabled = false;
	}
}
