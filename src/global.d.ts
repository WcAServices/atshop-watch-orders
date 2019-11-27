declare module 'simpleddp' {
    export interface MeteorChange<T> {
        fieldsChanged?: Partial<T>,
        added: false | T,
        removed: false | T
        changed: false | {
            prev: T,
            next: T,
            fields: {
                [key: string]: 1,
            },
        }
    }

    export interface MeteorCollection<T> {
        onChange(listener: (change: MeteorChange<T>) => void): void
    }

    export default class {
        constructor(opts: any);
        collection<T = any>(name: string): MeteorCollection<T>
    }
}