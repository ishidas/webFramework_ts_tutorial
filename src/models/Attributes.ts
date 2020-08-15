import { UserProps } from './User';

export class Attributes<T> {

  constructor(private data: T) {}

  // this will bind this to context
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }

  getAll(): T {
    return this.data;
  }
}

// if you hover over these variable names, you'll see different type set due to get<K extends keyof T>(key: K): T[K] setup on get

// const attrs = new Attributes<UserProps>({
//   id: 5,
//   age: 20,
//   name: 'hello',
// })
// const name = attrs.get('name');
// const age = attrs.get('age');
// const id = attrs.get('age');