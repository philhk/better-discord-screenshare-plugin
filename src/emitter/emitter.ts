import EventEmitter from 'events';
import { TypedEmitter } from 'tiny-typed-emitter';

export type TypedEmitterEvents<J extends TypedEmitter> = J extends TypedEmitter<
  infer N
>
  ? N
  : never;

export interface EmitterEvent {
  emitter: TypedEmitter | EventEmitter;
  event: any;
  fn: (...args: any[]) => any;
}

export class Emitter {
  private static events: EmitterEvent[] = [];

  public static addListener<
    T extends TypedEmitter,
    U extends keyof TypedEmitterEvents<T>,
    V extends TypedEmitterEvents<T>[U]
  >(
    emitter: T,
    type: keyof Pick<EventEmitter, 'on' | 'once'>,
    event: U,
    fn: V
  ): () => void;

  public static addListener(
    emitter: EventEmitter,
    type: keyof Pick<EventEmitter, 'on' | 'once'>,
    event: string,
    fn: (...args: any[]) => void
  ): () => void {
    emitter[type](event, fn);
    const emitterEvenet: EmitterEvent = {
      emitter,
      event,
      fn,
    };
    this.events.push(emitterEvenet);

    return () => this.removeListener(emitterEvenet);
  }

  public static removeListener(emitterEvent: EmitterEvent) {
    emitterEvent.emitter.removeListener(emitterEvent.event, emitterEvent.fn);
    this.events = this.events.filter(
      (emitterEvent_) => emitterEvent_ !== emitterEvent
    );
  }

  public static removeAllListeners() {
    this.events.forEach((emitterEvent) =>
      emitterEvent.emitter.removeListener(emitterEvent.event, emitterEvent.fn)
    );
    this.events = [];
  }
}
