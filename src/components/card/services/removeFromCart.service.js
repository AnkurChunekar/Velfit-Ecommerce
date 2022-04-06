import axios from "axios";
import { toast } from "react-toastify";

const removeFromCartService = async ({ token, cartDispatch, product }) => {

    try {
        const response = await axios.delete(`/api/user/cart/${product._id}`, {
            headers: { authorization: token },
        });

        switch (response.status) {
            case 200:
                cartDispatch({
                    type: "UPDATE_CART",
                    payload: { cart: response.data.cart },
                });
                toast.info(product.title.slice(0, 10).trim() + "... Removed to Cart");
                break;
            case 404:
                throw new Error(
                    "The email you entered is not Registered. Not Found error"
                );
            default:
                throw new Error("Unknown Error Occured!");
        }
    } catch (error) {
        toast.error(error.response.data.errors[0])
        console.error(error);
    }

}

export { removeFromCartService };
