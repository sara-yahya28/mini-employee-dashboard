import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Table from '../components/Table';
import TableSkeleton from '../components/TableSkeleton';

function Employees() {
    //جلب البيانات
    const { data: fetchedUsers, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    //state محلي لتخزين البيانات بعد جلبها
    const [users, setUsers] = useState([]);

    //نسخ البيانات الي state المحلي بعد جلبها
    useEffect(() => {
        if (fetchedUsers) {
            setUsers(fetchedUsers);
        }
    }, [fetchedUsers]);
    //عناوين الأعمدة للجدول
    const columns = ['الاسم', 'البريد الإلكتروني', 'المدينة'];
    //تبسيط البيانات لتناسب الأعمدة في Table.jsx
    const tableData = users.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        city: user.address.city,
    }));

    const handleDelete = (id) => {
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
    };

    if (loading) return <TableSkeleton rows={5} columns={3} />;
    if (error) return <p>حدث خطأ: {error}</p>;
    return (
        <div className="employees-page">
            <h1>قائمة الموظفين</h1>
            <Table
                data={tableData}
                columns={columns}
                onDelete={handleDelete}
            />
        </div>
    );
}
export default Employees;