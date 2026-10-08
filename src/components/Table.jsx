import './css/Table.css'
import Button from './Button';
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
                                <Button
                                    variant="danger"
                                    onClick={() => onDelete(emp.id)}
                                >
                                    حذف
                                </Button>
                            </td>
                        )}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}