declare module 'simpleddp' {
    export interface MeteorChange<T> {
        fieldsChanged?: Partial<T>,
        added: boolean | T,
        removed: boolean | T
        changed: boolean | {
            prev?: T,
            next?: T,
            fields?: {
                [key: string]: 1,
            },
        }
    }

    export class MeteorCollection<T> {
        onChange(callback: (change: MeteorChange<T>) => any): void
    }

    export default class {
        constructor(opts: any);
        collection<T = any>(name: string): MeteorCollection<T>
    }
}