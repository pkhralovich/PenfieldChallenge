import axios from "axios";

function getEndpoint(path) {
    let endpoint = "http://localhost:3001";
    if (path) endpoint += path;

    return endpoint;
}

export default class SurveyService {
    submit(data, onSuccess, onError) {
        axios({
            method: "post",
            url: getEndpoint("/survey"),
            data: data,
            validateStatus: function(status) {
                return status === 200 ||  status === 400 || status === 404 || status === 409;
            }
        })
        .then(onSuccess)
        .catch(onError);     
    }
}