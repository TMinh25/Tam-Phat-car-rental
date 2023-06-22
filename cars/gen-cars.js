import fs from "fs";

const carData = [
	{
		name: "Hyundai i10",
		brand: "Hyundai",
		image: "images/hyundai-grand-i10.jpg",
		price: 600000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Kia Morning",
		brand: "Kia",
		image: "images/kia-morning.png",
		price: 600000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Vinfast Fadil",
		brand: "Vinfast",
		image: "images/vinfast-fadil.png",
		price: 600000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Toyota Vios",
		brand: "Toyota",
		image: "images/toyota-vios.jpg",
		price: 800000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Toyota Yaris",
		brand: "Toyota",
		image: "images/toyota-yaris.jpg",
		price: 800000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Honda City",
		brand: "Honda",
		image: "images/honda-city.png",
		price: 800000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Kia Cerato",
		brand: "Kia",
		image: "images/kia-cerato.jpg",
		price: 1000000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mazda 3 (2018-2019)",
		brand: "Mazda",
		image: "images/mazda-3-2018-2019.jpg",
		price: 1000000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mazda 3 (2021-2022)",
		brand: "Mazda",
		image: "images/mazda-3-2021-2022.jpg",
		price: 1100000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mazda 6",
		brand: "Mazda",
		image: "images/mazda-6.jpg",
		price: 1300000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Toyota Camry",
		brand: "Toyota",
		image: "images/toyota-camry.jpg",
		price: 1400000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Vinfast Lux A",
		brand: "Vinfast",
		image: "images/vinfast-lux-a.png",
		price: 1300000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mercedes C250",
		brand: "Mercedes",
		image: "images/mercedes-benz-c-250.jpg",
		price: 2500000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mercedes E200",
		brand: "Mercedes",
		image: "images/mercedes-benz-e-200.jpg",
		price: 3000000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Ford Ranger",
		brand: "Ford",
		image: "images/ford-ranger.jpg",
		price: 1100000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Ford Wildtrak",
		brand: "Ford",
		image: "images/ford-wildtrak.jpg",
		price: 1300000,
		seats: 4,
		fuelType: "Dầu"
	},
	{
		name: "Hyundai Tucson",
		brand: "Hyundai",
		image: "images/hyundai-tucson.jpg",
		price: 1200000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Hyundai Santa Fe",
		brand: "Hyundai",
		image: "images/hyundai-santa-fe.jpg",
		price: 1500000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mazda CX5",
		brand: "Mazda",
		image: "images/mazda-cx-5.jpg",
		price: 1350000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mercedes GLC200",
		brand: "Mercedes",
		image: "images/mercedes-glc-200.jpg",
		price: 3500000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Mitsubishi Xpander",
		brand: "Mitsubishi",
		image: "images/mitsubishi-xpander.jpg",
		price: 1000000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Kia Sedona",
		brand: "Kia",
		image: "images/kia-sedona.jpg",
		price: 1500000,
		seats: 5,
		fuelType: "Xăng"
	},
	{
		name: "Toyota Fortuner",
		brand: "Toyota",
		image: "images/toyota-fortuner.jpg",
		price: 1400000,
		seats: 4,
		fuelType: "Xăng"
	},
	{
		name: "Chevrolet Trailblazer",
		brand: "Chevrolet",
		image: "images/chevrolet-trailblazer.jpg",
		price: 1300000,
		seats: 5,
		fuelType: "Xăng"
	},
];

function generateHTMLFile() {
	for (let i = 0; i < carData.length; i++) {
		const car = carData[i];

		fs.readFile("./car-single.html", "utf8", (err, data) => {
			if (err) {
				console.error("Error reading file:", err);
				return;
			}

			// Replace placeholders with carData properties
			const htmlTemplate = data
				.replace(/{{name}}/g, String(car.name))
				.replace(/{{brand}}/g, String(car.brand))
				.replace(/{{seat}}/g, String(car.seats))
				.replace(/{{fuelType}}/g, String(car.fuelType))
				.replace(/{{image}}/g, "../" + String(car.image));

			// Generate new HTML file
			const fileName = String(car.name).toLowerCase().replace(/\s/, "-");
			fs.writeFile(`${fileName}.html`, htmlTemplate, "utf8", (err) => {
				if (err) {
					console.error("Error creating file:", err);
					return;
				}
			});
		});
	}
}

generateHTMLFile();
