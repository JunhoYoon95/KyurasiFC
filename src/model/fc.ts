// let data = {
//     name: "Junmannn",
//     address: {
//       city: "Seoul",
//       detail: "Gangdong",
//       zipCode: 12341234
//     },
//     product: [
//       {
//         name: "Tottenham Spurs",
//         price: 2000,
//         category: "Outwear"
//       },
//       {
//         name: "Menchaster City",
//         price: 3000,
//         category: "Sthirs"
//       },
//     ]
// }
// type 이나 interface 로 만들면 됨
export type FC = {
    name: string;
    address: Address;
    product: Product[];
}

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
    // zipCode?: number; 이거는 nullable 인 경우로도 사용을 할 수도 있음
}
export type Product = {
    name: string;
    price: number;
    category: string;
}

// Address 그대로 사용은 하고 싶은데, zipcode 만 빼고 사용하고싶어. 그럴 때에는 Omit 사용해서 하면 됨.
export type AddressWithoutZip = Omit<Address, 'zipCode'>
// Zipcode 만 가져오고 싶을 경우
export type ProductOnlyCategory = Pick<Address, 'zipCode'>

