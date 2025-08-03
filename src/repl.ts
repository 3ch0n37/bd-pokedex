export function cleanInput(input: string): string[] {
    const result: Array<string> = [];
    const split = input.trim().toLowerCase().split(" ");
    split.forEach(part => {
        if(part.length) {
            result.push(part.trim());
        }
    });
    return result;
}