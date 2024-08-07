import {OrdersSortByEnum} from "@/types/OrdersSortByEnum";
import {SortOrderEnum} from "@/types/SortOrderEnum";
import {getHost} from "@/utils/utils";
import axios from "axios";
import {OrderStatusEnum} from "@/types/OrderStatusEnum";
import {ProductData} from "@/types/ProductData";
import {OrderType} from "@/types/OrderType";

export const getOrderByIdRequest = async (
    token: string,
    page: number,
    value: string,
    orderBy: OrdersSortByEnum,
    sortOrder: SortOrderEnum,
    id: number,
) => {
    const host = getHost();
    const url = `http://${host}/api/admin/orders/${id}?page=${page}&sortBy=${orderBy}&sortOrder=${sortOrder}${value === "" ? "" : `&value=${value}`}`;

    try {
        let response = await axios.get(url, {
            headers: {Authorization: "Bearer " + token}
        });
        console.log(response.data);
        // response.data = {...response.data, ...response.data.user}
        // delete response.data.user;
        return response.data;
    }
    catch (error) {
        console.error(error);
    }

    return {
        id: 1,
        date: "Лип. 30",
        firstName: "Ivan",
        surname: "Ivanov",
        email: "email@gmail.com",
        phoneNumber: "+380123456789",
        message: "Hello, World!",
        status: OrderStatusEnum.Completed,
        delivery: {
            city: {
                ref: "8d5a980d-391c-11dd-90d9-001a92567626",
                description: 'м. Київ, Київська обл.',
                cityName: 'Київ',
                regionName: 'Київська oбл.',
            },
            warehouse: {
                warehouse: "Відділення №19 (до 30 кг на одне місце): вул. Чумаченка, 25",
                schedule: null,
            }
        },
        products: [{
            "quantity": 1,
            "product": {
                "id": 43,
                "name": "Коляска 2 в 1 Adamex Porto Light ECO SA-4 темно-сірий",
                "price": 20099,
                "images": ["https://images.prom.ua/3329075518_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 2,
            "product": {
                "id": 30,
                "name": "Коляска 2 в 1 Adamex Porto Light Tip TK-60/С темно-сірий",
                "price": 19399,
                "images": ["https://images.prom.ua/5094228307_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 1,
            "product": {
                "id": 44,
                "name": "Коляска 2 в 1 Adamex Porto Light ECO SA-3 світло-сірий",
                "price": 20099,
                "images": ["https://images.prom.ua/3329075528_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 1,
            "product": {
                "id": 37,
                "name": "Коляска 2 в 1 Adamex Porto Light Tip TK-24 рожевий",
                "price": 19399,
                "images": ["https://images.prom.ua/3282802246_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 1,
            "product": {
                "id": 36,
                "name": "Коляска 2 в 1 Adamex Porto Light Tip TK-57 графіт",
                "price": 19399,
                "images": ["https://images.prom.ua/3282795863_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 1,
            "product": {
                "id": 34,
                "name": "Коляска 2 в 1 Adamex Gallo Thermo GA-10 chocolate gold",
                "price": 18359,
                "images": ["https://images.prom.ua/3092530753_kolyaska-2-v.jpg"]
            }
        }, {
            "quantity": 1,
            "product": {
                "id": 42,
                "name": "Коляска 2 в 1 Adamex Porto Light ECO SA-5 графіт",
                "price": 20099,
                "images": ["https://images.prom.ua/3329075508_kolyaska-2-v.jpg"]
            }
        }]
    } as OrderType;
}