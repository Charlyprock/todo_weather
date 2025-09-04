type MaxLength<L extends number, V extends string | number> = V extends string ? V : L

const t: MaxLength<6, 'dddd'> = '6'

console.log(t)