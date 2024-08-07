import {ChangeEvent, Dispatch, MutableRefObject, SetStateAction} from "react";
import axios, {CancelTokenSource} from "axios";
import {City} from "@/types/City";
import {getCityRequest} from "@/api/get-city-request";
import {citySelectorCloseSignal} from "@/pages/checkout/components/CitySelector/signals/city-selector-close-signal";
import {getWarehouseListRequest} from "@/api/get-warehouse-list-request";
import {Warehouse} from "@/types/Warehouse";
import Cookies from "js-cookie";
import {CheckoutFormType} from "@/types/CheckoutFormType";
import {it} from "node:test";
import {postOrderRequest} from "@/api/post-order-request";
import {removeAllCartProductsFromLocalStorage} from "@/utils/local-storage-utils";
import {UnknownAction} from "redux";
import {removeAllCartProducts} from "@/redux/cart-slice";
import {em} from "@mantine/core";

export const handleCheckoutFormSubmit = async (
    data: CheckoutFormType,
    setIsOrderCompleted: Dispatch<SetStateAction<boolean>>,
    setIsOrderRequestSending: Dispatch<SetStateAction<boolean>>,
    dispatch: Dispatch<UnknownAction>
) => {
    setIsOrderRequestSending(true);

    const {name, surname, phoneNumber, email, message, city, warehouse, products} = data;

    const requestBody = {
        user: {
            name, surname, phoneNumber,
            email: email === undefined ? null : email,
            message: message === undefined ? null : message,
        },
        delivery: {
            ref: city.ref,
            description: city.description,
            cityName: city.cityName,
            regionName: city.regionName,
            warehouse: warehouse.warehouse
        },
        products: products.map(({product, quantity}) => ({
            id: product.id,
            quantity,
        }))
    };

    console.log(requestBody);
    await postOrderRequest(requestBody);
    setIsOrderCompleted(true);
    setIsOrderRequestSending(false);
    removeAllCartProductsFromLocalStorage();
    dispatch(removeAllCartProducts());
};


export const handleCitySelectorInput = async (
    e: ChangeEvent<HTMLInputElement>,
    cancelToken: MutableRefObject<CancelTokenSource | null>,
    setResponseCities: Dispatch<SetStateAction<City[] | undefined>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
) => {
    setIsDropdownOpen(true);

    const {value} = e.currentTarget;
    setInputValue(value);

    if (cancelToken.current) {
        cancelToken.current.cancel();
    }

    cancelToken.current = axios.CancelToken.source();
    const response = await getCityRequest(value, cancelToken);
    setResponseCities(response);
}

export const handleCitySelect = (
    value: string,
    responseCities: City[],
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
) => {
    setIsDropdownOpen(false);
    const city = responseCities?.find((val) => val.description === value);
    setCityInput(city as City);
    setInputValue(value);
}

export const handleExampleCityClick = (
    city: City,
    setCityInput: Dispatch<SetStateAction<City>>,
    setInputValue: Dispatch<SetStateAction<string>>,
) => {
    setCityInput(city);
    setInputValue(city.description);
}

export const handleSelectInputBlur = (
    setIsDropdownOpen: Dispatch<SetStateAction<boolean>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    cityInput: City,
) => {
    setIsDropdownOpen((prev) => {
        if (prev) {
            setInputValue(cityInput?.description as string);
        }
        return false;
    });
}

export const handleSelectCityButtonClick = (
    cityInput: City,
    setSelectedCity: Dispatch<SetStateAction<City | null>>,
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>,
    setWarehouseInputValue: Dispatch<SetStateAction<string>>,
) => {
    citySelectorCloseSignal.value = ++citySelectorCloseSignal.value;

    setSelectedCity(cityInput);
    setWarehouseInputValue("");
    setWarehouse(undefined);
    Cookies.set("kolyaskiCity", JSON.stringify(cityInput));
}

export const handleWarehouseInputChange = async (
    e: ChangeEvent<HTMLInputElement>,
    setInputValue: Dispatch<SetStateAction<string>>,
) => {
    const {value} = e.currentTarget;
    setInputValue(value);
}

export const handleWareHouseSelect = (
    setWarehouse: Dispatch<SetStateAction<Warehouse | undefined>>,
    warehouse: Warehouse,
    setIsMenuShown: Dispatch<SetStateAction<boolean>>,
    setInputValue: Dispatch<SetStateAction<string>>,
    inputRef: MutableRefObject<HTMLInputElement | null>,
) => {
    setInputValue("");
    setWarehouse(warehouse);
    Cookies.set("kolyaskiWarehouse", JSON.stringify(warehouse));
    setIsMenuShown(false);
    inputRef.current?.blur();
}