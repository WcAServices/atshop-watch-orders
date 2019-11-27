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

    export class Subscription {
        ready(): Promise<void>;
    }

    export interface MeteorCollection<T> {
        onChange(listener: (change: MeteorChange<T>) => void): void
    }

    export default class {
        constructor(opts: any, plugins: any[]);
        collection<T = any>(name: string): MeteorCollection<T>
        login(options: KeyVal): Promise<{ id: string, token: string, tokenExpires: any, type: string }>
        subscribe(name: string, ...args: any): Subscription;
    }
}

interface KeyVal {
    [key: string]: any;
}