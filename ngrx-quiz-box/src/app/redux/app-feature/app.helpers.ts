export function replaceItem<T>(source: T[], predicate: (t: T)=> boolean, projection: (t:T) => T): T[] {
    const index = source.findIndex(predicate);
    if (index < 0) return source;

    const oldItem = source[index];
    const newItem = projection(oldItem);

    return [
        ...source.slice(0, index), 
        newItem, 
        ...source.slice(index + 1)
    ]
}