import axios from 'axios'

export class ApiService {
  public static fetchStock = async () => {
    const result = await axios.get('http://localhost:5000/get-stock')
    return result.data
  }
}
