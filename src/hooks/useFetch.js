import { useState, useEffect } from 'react';

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('فشل في جلب البيانات');
                }
                const result = await response.json();
                setData(result);//  تخزين البيانات في حالة نجاح الجلب
            } catch (err){
                setError(err.message);//تخزين رسالة خطأ
            } finally{
                setLoading(false);//يوقف التحميل
            }
        }
        fetchData();
    },[url]);//<-أعيد التنفيذ فقط إذا تغير url
    return { data, loading, error };
}