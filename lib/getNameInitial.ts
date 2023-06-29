export const getNameInitial = (name: string) => {
    return name.split(" ").map(i => `${i[0].toLocaleUpperCase()}`)
}