class HttpClient {
  static async get<T>(url: string): Promise<T | null> {
    try {
      console.log('here');
      const response = await fetch(url);
      return response.json();
    } catch (e) {
      console.log(e);
      return null;
    }
  }
}

export default HttpClient;
