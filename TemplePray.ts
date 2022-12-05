import {
	Behaviour,	
	LogType,
	serializeable,
	showBalloonMessage,
} from '@needle-tools/engine';
import { InputEvents } from "@needle-tools/engine/engine/engine_input";
import getEmployee from '../../Needle/Silvanus/src/scripts/web3Connect.js';
type SendH = {
	id: string;
	name: string;
};
export class TemplePray extends Behaviour {
	
	async applyPrayer() {
		console.warn('Prayer requested');
		const {signData } = await import(
			'../../Needle/Silvanus/src/scripts/web3Connect.js'
		);
		const prayer = await signData()
		showBalloonMessage('Prayed ', LogType.Warn);
	}
	awake() {
		this.context.input.addEventListener(InputEvents.PointerClick, evt => {
			this.applyPrayer()
		});
	}
}
