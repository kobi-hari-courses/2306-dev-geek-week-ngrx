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

export function moveItem<T>(source: T[], fromIndex: number, toIndex: number): T[] {
    const item = source[fromIndex];
    source = removeAt(source, fromIndex);
    source = insertAt(source, item, toIndex);
    return source;
}

export function replaceAt<T>(source: T[], index: number, item: T): T[] {
    return [
        ...source.slice(0, index), 
        item, 
        ...source.slice(index + 1)
    ]
}

export function removeAt<T>(source: T[], index: number): T[] {
    return [
        ...source.slice(0, index), 
        ...source.slice(index + 1)
    ]
}

export function insertAt<T>(source: T[], item: T, index: number): T[] {
    return [
        ...source.slice(0, index), 
        item, 
        ...source.slice(index)
    ]
}