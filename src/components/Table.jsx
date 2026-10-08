import './css/Table.css'
export default function Table({ data = [], columns = [], onDelete }) {
    //                                                    ↑ أضفنا onDelete كـ prop اختياري

    return (
        <table className='table'>
            <thead>
                <tr>
                    {/* لكل عمود، اعرضي النص مباشرة */}
                    {columns.map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                    {/* أضفنا: عمود "إجراءات" يظهر فقط عند تمرير onDelete */}
                    {onDelete && <th>إجراءات</th>}
                </tr>
            </thead>
            <tbody>
                {/* لكل موظف، أنشئي صفاً */}
                {data.map((emp, empIndex) => (
                    <tr key={emp.id || empIndex}>
                        {/* لكل قيمة داخل الموظف، أنشئي خلية */}
                        {Object.entries(emp)
                            .filter(([key]) => key !== 'id')
                            .map(([, value], colIndex) => (
                                <td key={colIndex}>{value}</td>
                            ))}

                        {/* أضافة خلية تحتوي زر الحذف (تظهر فقط عند onDelete) */}
                        {onDelete && (
                            <td>
                                <button
                                    className='delete-btn'
                                    onClick={() => onDelete(emp.id)}
                                >
                                    حذف
                                </button>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}