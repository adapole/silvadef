import { Animator, Behaviour, serializeable } from '@needle-tools/engine';

export class TiltPour extends Behaviour {
	@serializeable(Animator)
	animator?: Animator;

	start() {
		this.animator = this.gameObject.getComponent(Animator) as Animator;
	}

	applyTilt() {
		//const mAnimator = this.gameObject.getComponent(Animator)
		if (this.animator != null) {
			this.animator.SetTrigger('TrEntry');
		}
	}
	applyEndTilt() {
		if (this.animator != null) {
			this.animator.SetTrigger('TrExit');
		}
	}
}
