import {
	Behaviour,
	LogType,
	serializeable,
	showBalloonMessage,
} from '@needle-tools/engine';
// GameObject,
//import { WaitForSeconds } from '@needle-tools/engine/engine/engine_coroutine';
//import { serializeObject } from '@needle-tools/engine/engine/engine_serialization_core';
//import { Object3D } from 'three';
import { Renderer } from '@needle-tools/engine/engine-components/Renderer';

export class TreeSpawn extends Behaviour {
	@serializeable()
	applyOnStart: boolean = true;
	
	/*
	@serializeable(GameObject)
	object?: GameObject;

	interval: number = 10000;
	max: number = 100;

	private spawned: number = 0;

	awake() {
		if (!this.object) {
			console.warn('TimedSpawn: no object to spawn');
			showBalloonMessage('TimedSpawn: no object to spawn', LogType.Warn);
			return;
		}
		GameObject.setActive(this.object, false);
		this.startCoroutine(this.spawn());
	}

	*spawn() {
		if (!this.object) return;
		while (this.spawned < this.max) {
			const instance = GameObject.instantiate(this.object);
			GameObject.setActive(instance!, true);
			this.spawned += 1;
			yield WaitForSeconds(this.interval / 1000);
		}
	}
	
	applySpawn() {
		if (this.object == null) {
			console.warn('TreeSpawn: no object to spawn');			
			showBalloonMessage('TreeSpawn: no object to spawn', LogType.Warn);
			return;
		}
		//while (this.spawned < this.max) {
			console.log('Started waiting to Spawn tree')
			WaitForSeconds(this.interval / 1000);
			console.log('Wait ended')
			//const instance = GameObject.instantiate(this.object);
			//GameObject.setActive(instance!, true);
			console.log('Created Object')
			//this.spawned += 1;
			
		//}
	}
	*/
	start() {
		if (this.applyOnStart) this.applyNoVisibility();
	}
	
	applyNoVisibility() {
		const rend = this.gameObject.getComponent(Renderer);
		if (rend) rend.enabled = false;
	}
	
	applyVisibility() {
		const renderer = this.gameObject.getComponent(Renderer);
		if (renderer) renderer.enabled = true;
	}
	
	
}
