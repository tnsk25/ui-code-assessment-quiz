import axios from 'axios'
import { APISettings } from '../../api'
const questionBankApiUrl = APISettings.baseUrl

class QuizBankAPI {

    getQuestions = () => {
        let requesturl = questionBankApiUrl + APISettings.questionBank.get
        return axios.get(requesturl)
    }

}

export default QuizBankAPI