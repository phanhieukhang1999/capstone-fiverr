import { congViecServiecs } from "../../services/congViecServices";
import { LAY_DS_CONG_VIEC_THEO_TEN, SET_MENU_CONG_VIEC } from "../types/CongViecTypes";


export const layMenuCongViecAction = () => {

    return async (dispatch) => {
        try {
            const result = await congViecServiecs.layMenuCongViec()
            console.log("result: ", result.data.content);
            if (result.statusCode === 200) {
                dispatch({
                    type: SET_MENU_CONG_VIEC,
                    menuJob: result.data.content,

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}

export const layDanhSachCongViecTheoTenAction = (valueSearch) => {

    return async (dispatch) => {
        try {
            const result = await congViecServiecs.layDanhSachCongViecTheoTenService(valueSearch)
            console.log("result: ", result.data.content);
            if (result.statusCode === 200) {
                dispatch({
                    type: LAY_DS_CONG_VIEC_THEO_TEN,
                    resultSearchJobByName: result.data.content,

                })

            }
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }

}