interface MonthlySales{
	label: string,
	name: string
}
export class User{

	constructor(
			public id: string,
			public name: string,
			public email: string,
			public description: string,
			public imageUrl: string,
			public salesDone: MonthlySales
		) {}
}