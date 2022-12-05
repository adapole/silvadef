import {
	Behaviour,
	LogType,
	serializeable,
	showBalloonMessage,
} from '@needle-tools/engine';
//import { InputEvents } from "@needle-tools/engine/engine/engine_input";
import getEmployee from '../../Needle/Silvanus/src/scripts/web3Connect.js';
type SendH = {
	id: string;
	name: string;
};
export class MetaConnect extends Behaviour {
	async applySendH20() {
		console.warn('Send H20 requested');
		showBalloonMessage('H20: Send H20 requested', LogType.Warn);
		//const e = getEmployee('1000', 'myname') as SendH;
		//showBalloonMessage('Water amount is ' + e.id, LogType.Warn);

		const { waterTree } = await import(
			'../../Needle/Silvanus/src/scripts/web3Connect.js'
		);
		//const a = await H2OSend('0');

		//showBalloonMessage('AsyncWater is ' + a, LogType.Warn);
		await waterTree('0');
		showBalloonMessage('Watering... ', LogType.Warn);
	}
	async applyPrayer() {
		console.warn('Prayer requested');
		const { signData } = await import(
			'../../Needle/Silvanus/src/scripts/web3Connect.js'
		);
		const prayer = await signData();
		showBalloonMessage('Prayed ', LogType.Warn);
	}
}
