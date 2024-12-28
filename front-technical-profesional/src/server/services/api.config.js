

import axios from "axios";
import { useEffect, useState } from "react";

// Hook personalizado para solicitudes GET
export const useAxiosGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

// Hook personalizado para solicitudes POST
export const useAxiosPost = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const postData = async (url, body) => {
    try {
      setLoading(true);
      const res = await axios.post(url, body);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, postData };
};

// Hook personalizado para solicitudes PUT
export const useAxiosPut = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const putData = async (url, body) => {
    try {
      setLoading(true);
      const res = await axios.put(url, body);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, putData };
};

// Hook personalizado para solicitudes DELETE
export const useAxiosDelete = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteData = async (url) => {
    try {
      setLoading(true);
      const res = await axios.delete(url);
      setResponse(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, deleteData };
};
