import { useState, useEffect, useMemo, useRef } from 'react';
import { useFetch } from '../hooks/useFetch';
import Table from '../components/Table';
import TableSkeleton from '../components/TableSkeleton';
import '../components/css/Employees.css';

function Employees() {
    //جلب البيانات
    const { data: fetchedUsers, loading, error } = useFetch(
        'https://jsonplaceholder.typicode.com/users'
    );
    //state محلي لتخزين البيانات بعد جلبها
    const [users, setUsers] = useState([]);
    //state لتخزين قيمة نص البحث
    const [searchTerm, setSearchTerm] = useState('');

    const searchInputRef = useRef(null);

    //نسخ البيانات الي state المحلي بعد جلبها
    useEffect(() => {
        if (fetchedUsers) {
            setUsers(fetchedUsers);
        }
    }, [fetchedUsers]);

    // التركيز التلقائي على حقل البحث عند فتح الصفحة
    useEffect(() => {
        if (searchInputRef.current) {
            serchInputRef.current.focus();
        }
    }, []);
    //useMemo لتصفية المستخدمين حسب البحث
    const filteredUsers = useMemo(() => {
        if (!searchTerm) return users;
        return users.filter((user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [users, searchTerm]);//التصفية تعيد التنفيذ فقط إذا تغير users أو searchTerm

    //عناوين الأعمدة للجدول
    const columns = ['الاسم', 'البريد الإلكتروني', 'المدينة'];
    //تبسيط البيانات لتناسب الأعمدة في Table.jsx
    const tableData = filteredUsers.map((user) => ({
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
            {/*  حقل البحث */}
            <input
                type="text"
                className="search-input"
                placeholder="ابحث عن موظف بالاسم..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
            />

            <Table
                data={tableData}
                columns={columns}
                onDelete={handleDelete}
            />
        </div>
    );
}
export default Employees;