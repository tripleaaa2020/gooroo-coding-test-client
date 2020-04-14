import axios from "axios"
import { API_URL } from "../utils/Variables"

export const getContributorDetail = async contributorID => {

    var data

    await axios
        .get(API_URL + "contributors/" + contributorID)
        .then(function (response) {
            console.log("getContributorDetail Response => ", response);
              data = response.data
        })
        .catch(function (error) {
            console.log("getContributorDetail error => ", error);
              data = error
        });

    return data;
}